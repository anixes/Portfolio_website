import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const InteractiveNeuralNetwork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    
    // Perspective Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 250;

    // WebGL Renderer with Alpha (Transparency) and Antialiasing
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Neural Network Particle Generator ---
    const particleCount = window.innerWidth < 768 ? 60 : 130;
    const maxDistance = 75; // Max distance to connect nodes

    // Geometries
    const positions = new Float32Array(particleCount * 3);
    const velocities: THREE.Vector3[] = [];

    // Initialize node positions and random velocities
    for (let i = 0; i < particleCount; i++) {
      // Random coordinates in a 3D box
      const x = (Math.random() - 0.5) * 350;
      const y = (Math.random() - 0.5) * 250;
      const z = (Math.random() - 0.5) * 200;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Velocity vectors for slow drift
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.15
        )
      );
    }

    // Node points geometry and material
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Canvas Texture for Glowing Circular Particles
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(137, 170, 204, 0.8)');
        gradient.addColorStop(1, 'rgba(137, 170, 204, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const pointsMaterial = new THREE.PointsMaterial({
      size: 5,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // --- Connective Lines Geometry & Material ---
    const lineIndices: number[] = [];
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    const lineColors = new Float32Array(particleCount * particleCount * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      linewidth: 1
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // --- Mouse interaction ---
    const mouse = new THREE.Vector2(-9999, -9999);
    const targetMouse = new THREE.Vector2(-9999, -9999);
    const mouse3D = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // --- Animation Loop ---
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp mouse coordinates for smooth movements
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      // Project mouse coordinates to 3D space
      if (mouse.x > -999) {
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, mouse3D);
      }

      const posAttribute = pointsGeometry.getAttribute('position') as THREE.BufferAttribute;
      const localPositions = posAttribute.array as Float32Array;

      let lineCount = 0;
      const linePosArr = lineGeometry.getAttribute('position').array as Float32Array;
      const lineColArr = lineGeometry.getAttribute('color').array as Float32Array;

      // Update positions of nodes based on velocity and mouse proximity
      for (let i = 0; i < particleCount; i++) {
        const xIdx = i * 3;
        const yIdx = i * 3 + 1;
        const zIdx = i * 3 + 2;

        // Apply slow constant drift
        localPositions[xIdx] += velocities[i].x;
        localPositions[yIdx] += velocities[i].y;
        localPositions[zIdx] += velocities[i].z;

        // Boundary checks (bounce back)
        if (Math.abs(localPositions[xIdx]) > 180) velocities[i].x *= -1;
        if (Math.abs(localPositions[yIdx]) > 130) velocities[i].y *= -1;
        if (Math.abs(localPositions[zIdx]) > 100) velocities[i].z *= -1;

        // Calculate distance from mouse in 3D
        if (mouse.x > -999) {
          const dx = localPositions[xIdx] - mouse3D.x;
          const dy = localPositions[yIdx] - mouse3D.y;
          const dz = localPositions[zIdx] - mouse3D.z;
          const distToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Push nodes away from mouse if they get too close (repulsion field)
          if (distToMouse < 60) {
            const force = (60 - distToMouse) / 60;
            // Push direction
            localPositions[xIdx] += (dx / distToMouse) * force * 1.8;
            localPositions[yIdx] += (dy / distToMouse) * force * 1.8;
            localPositions[zIdx] += (dz / distToMouse) * force * 1.8;
          }
        }
      }

      // Re-calculate lines between close nodes
      for (let i = 0; i < particleCount; i++) {
        const ax = localPositions[i * 3];
        const ay = localPositions[i * 3 + 1];
        const az = localPositions[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const bx = localPositions[j * 3];
          const by = localPositions[j * 3 + 1];
          const bz = localPositions[j * 3 + 2];

          const dx = ax - bx;
          const dy = ay - by;
          const dz = az - bz;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            // Draw line segment
            const offset = lineCount * 6;
            
            linePosArr[offset] = ax;
            linePosArr[offset + 1] = ay;
            linePosArr[offset + 2] = az;

            linePosArr[offset + 3] = bx;
            linePosArr[offset + 4] = by;
            linePosArr[offset + 5] = bz;

            // Calculate opacity based on distance (closer = brighter)
            const alpha = (1 - dist / maxDistance) * 0.22;

            // Gradient colors between purple/indigo and teal glow
            lineColArr[offset] = 0.35 * alpha; // R
            lineColArr[offset + 1] = 0.5 * alpha; // G
            lineColArr[offset + 2] = 0.85 * alpha; // B

            lineColArr[offset + 3] = 0.6 * alpha; // R
            lineColArr[offset + 4] = 0.35 * alpha; // G
            lineColArr[offset + 5] = 0.9 * alpha; // B

            lineCount++;
          }
        }
      }

      posAttribute.needsUpdate = true;
      lineGeometry.getAttribute('position').needsUpdate = true;
      lineGeometry.getAttribute('color').needsUpdate = true;

      // Draw only the connected lines
      lineGeometry.setDrawRange(0, lineCount * 2);

      // Rotate the whole scene very slightly for extra organic motion
      points.rotation.y += 0.0006;
      lineSegments.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    // --- Handle Resize ---
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      
      // Dispose WebGL Resources
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
