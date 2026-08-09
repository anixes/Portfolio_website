import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const DataNebula: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene, camera, renderer
    const scene = new THREE.Scene();
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles configuration
    const particleCount = window.innerWidth < 768 ? 1200 : 2500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color('#38BDF8'), // Cyan
      new THREE.Color('#EC4899'), // Pink
      new THREE.Color('#8B5CF6'), // Purple
      new THREE.Color('#6366F1'), // Indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates inside a sphere volume
      const r = 120 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      // Organic drift velocity direction
      velocities[i * 3] = (Math.random() - 0.5) * 0.15;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.15;

      // Color from palette
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create custom soft circle particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 2.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.8,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Mouse interactive target
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize target coordinates to match viewport sphere space
      mouse.targetX = ((e.clientX / window.innerWidth) * 2 - 1) * 140;
      mouse.targetY = (-(e.clientY / window.innerHeight) * 2 + 1) * 140;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = ((e.touches[0].clientX / window.innerWidth) * 2 - 1) * 140;
        mouse.targetY = (-(e.touches[0].clientY / window.innerHeight) * 2 + 1) * 140;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Soft mouse coordinate interpolation (spring/easing physics)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const posAttribute = geometry.getAttribute('position') as THREE.BufferAttribute;
      const posArray = posAttribute.array as Float32Array;

      // Apply organic drift + mouse gravitational swarming
      for (let i = 0; i < particleCount; i++) {
        const xIdx = i * 3;
        const yIdx = i * 3 + 1;
        const zIdx = i * 3 + 2;

        // 1. Organic wave-like drift based on noise/sine
        posArray[xIdx] += velocities[xIdx] + Math.sin(time + i) * 0.02;
        posArray[yIdx] += velocities[yIdx] + Math.cos(time + i) * 0.02;
        posArray[zIdx] += velocities[zIdx];

        // Keep particles within bound area
        const distFromCenter = Math.sqrt(
          posArray[xIdx] * posArray[xIdx] +
          posArray[yIdx] * posArray[yIdx] +
          posArray[zIdx] * posArray[zIdx]
        );
        if (distFromCenter > 280) {
          posArray[xIdx] = initialPositions[xIdx];
          posArray[yIdx] = initialPositions[yIdx];
          posArray[zIdx] = initialPositions[zIdx];
        }

        // 2. Gravitational pull toward mouse target
        const dx = mouse.x - posArray[xIdx];
        const dy = mouse.y - posArray[yIdx];
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 180) {
          // Attract close particles, stronger pull when close
          const pullForce = (1 - distToMouse / 180) * 0.45;
          posArray[xIdx] += dx * pullForce * 0.035;
          posArray[yIdx] += dy * pullForce * 0.035;
        }
      }

      posAttribute.needsUpdate = true;

      // Gently rotate scene for background life
      particleSystem.rotation.y = time * 0.025;
      particleSystem.rotation.x = time * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden opacity-60"
    />
  );
};
