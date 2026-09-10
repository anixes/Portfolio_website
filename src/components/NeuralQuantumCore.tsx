import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface NeuralQuantumCoreProps {
  className?: string;
}

export const NeuralQuantumCore: React.FC<NeuralQuantumCoreProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Groups
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Group for mouse tilt
    const tiltGroup = new THREE.Group();
    coreGroup.add(tiltGroup);

    // 3. Central Glowing Polytope (Outer Geodesic Icosahedron)
    const outerGeo = new THREE.IcosahedronGeometry(5.2, 1);
    const wireGeo = new THREE.WireframeGeometry(outerGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x8B5CF6, // Purple
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const wireframeMesh = new THREE.LineSegments(wireGeo, wireMat);
    tiltGroup.add(wireframeMesh);

    // 4. Vertex Synapse Nodes (Points at geometry vertices)
    const vertexPositions = outerGeo.attributes.position.array;
    const vertexPointsGeo = new THREE.BufferGeometry();
    vertexPointsGeo.setAttribute('position', new THREE.BufferAttribute(vertexPositions, 3));

    const vertexMat = new THREE.PointsMaterial({
      color: 0x38BDF8, // Cyan
      size: 0.35,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexMat);
    tiltGroup.add(vertexPoints);

    // 5. Inner Rotating Octahedron / Core Crystal
    const innerGeo = new THREE.OctahedronGeometry(2.8, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xEC4899, // Neon Pink
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    tiltGroup.add(innerMesh);

    // 6. Deep Dense Core Sphere (Pulsing Energy Hub)
    const hubGeo = new THREE.SphereGeometry(1.2, 24, 24);
    const hubMat = new THREE.MeshBasicMaterial({
      color: 0xA855F7,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const hubMesh = new THREE.Mesh(hubGeo, hubMat);
    tiltGroup.add(hubMesh);

    // 7. Three Quantum Orbital Rings (Gimbal Rotation)
    const createRing = (radius: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.04, radius + 0.04, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;
      return ring;
    };

    const ring1 = createRing(6.8, 0x38BDF8, Math.PI / 3, 0);
    const ring2 = createRing(7.3, 0xA855F7, -Math.PI / 4, Math.PI / 5);
    const ring3 = createRing(7.8, 0xEC4899, Math.PI / 6, -Math.PI / 3);
    tiltGroup.add(ring1);
    tiltGroup.add(ring2);
    tiltGroup.add(ring3);

    // 8. Orbiting Electron Particles on Rings
    const orbitCount = 48;
    const orbitPositions = new Float32Array(orbitCount * 3);
    const orbitColors = new Float32Array(orbitCount * 3);
    const orbitAngles: number[] = [];
    const orbitSpeeds: number[] = [];
    const orbitRadii: number[] = [];

    const ringPalette = [new THREE.Color(0x38BDF8), new THREE.Color(0xA855F7), new THREE.Color(0xEC4899)];

    for (let i = 0; i < orbitCount; i++) {
      orbitAngles.push(Math.random() * Math.PI * 2);
      orbitSpeeds.push(0.01 + Math.random() * 0.02);
      orbitRadii.push(6.6 + Math.random() * 1.4);

      const color = ringPalette[i % ringPalette.length];
      orbitColors[i * 3] = color.r;
      orbitColors[i * 3 + 1] = color.g;
      orbitColors[i * 3 + 2] = color.b;
    }

    const orbitGeo = new THREE.BufferGeometry();
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPositions, 3));
    orbitGeo.setAttribute('color', new THREE.BufferAttribute(orbitColors, 3));

    const orbitMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const orbitPoints = new THREE.Points(orbitGeo, orbitMat);
    tiltGroup.add(orbitPoints);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = x / (rect.width / 2);
      mouseY = y / (rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth tilt towards cursor
      targetRotY = mouseX * 0.7;
      targetRotX = -mouseY * 0.7;
      tiltGroup.rotation.y += (targetRotY - tiltGroup.rotation.y) * 0.05;
      tiltGroup.rotation.x += (targetRotX - tiltGroup.rotation.x) * 0.05;

      // Base auto rotation
      wireframeMesh.rotation.y += 0.006;
      wireframeMesh.rotation.x += 0.003;
      vertexPoints.rotation.y += 0.006;
      vertexPoints.rotation.x += 0.003;

      innerMesh.rotation.y -= 0.012;
      innerMesh.rotation.z += 0.008;

      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;
      ring3.rotation.z += 0.005;

      // Core pulse scale
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.12;
      hubMesh.scale.set(pulse, pulse, pulse);

      // Update orbiting particles
      const positions = orbitGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < orbitCount; i++) {
        orbitAngles[i] += orbitSpeeds[i];
        const rad = orbitRadii[i];
        const ang = orbitAngles[i];

        positions[i * 3] = Math.cos(ang) * rad;
        positions[i * 3 + 1] = Math.sin(ang) * rad * 0.45;
        positions[i * 3 + 2] = Math.sin(ang) * rad;
      }
      orbitGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      outerGeo.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      vertexPointsGeo.dispose();
      vertexMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      hubGeo.dispose();
      hubMat.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setPulseCount((prev) => prev + 1)}
    >
      {/* Glow Backdrop */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-cyan-500/30 blur-3xl pointer-events-none animate-pulse" />

      {/* WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="relative z-10 w-[300px] h-[300px] xs:w-[340px] xs:h-[340px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] pointer-events-auto"
      />

      {/* Floating Holographic Telemetry HUD Badges */}
      <div className="absolute -top-3 -right-2 sm:top-2 sm:right-0 z-20 pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg border border-purple-500/30 bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-mono text-purple-300 shadow-lg shadow-purple-500/10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span>NEURAL MANIFOLD // 1024-D</span>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-2 sm:bottom-4 sm:left-0 z-20 pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>60 FPS // ZERO LATENCY</span>
        </div>
      </div>

      {hovered && (
        <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="text-[10px] font-mono tracking-widest text-purple-300/80 uppercase">
            [ Interactive: Move cursor to tilt ]
          </span>
        </div>
      )}
    </div>
  );
};
