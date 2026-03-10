'use client';

import React, { useRef, useMemo } from 'react';
import { Environment, Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface FloatingSpheresProps {
    color?: string;
}

const FloatingPhysicsSphere = ({ position, size, outerMaterial, innerMaterial, speed = 1 }: {
    position: [number, number, number],
    size: [number, number, number],
    outerMaterial: THREE.Material,
    innerMaterial: THREE.Material,
    speed?: number
}) => {
    const meshRef = useRef<THREE.Group>(null!);
    const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);
    const velocity = useMemo(() => new THREE.Vector3(0, 0, 0), []);
    const tempVec = new THREE.Vector3();
    const dir = new THREE.Vector3();

    useFrame((state) => {
        const { pointer, viewport, clock } = state;
        const time = clock.getElapsedTime() * speed;

        const mousePos = tempVec.set(
            (pointer.x * viewport.width) / 2,
            (pointer.y * viewport.height) / 2,
            0
        );

        const floatX = Math.sin(time * 0.5) * 0.2;
        const floatY = Math.cos(time * 0.3) * 0.2;
        const targetPos = dir.copy(initialPos).add(new THREE.Vector3(floatX, floatY, 0));

        const dist = meshRef.current.position.distanceTo(mousePos);
        const repulsionRadius = 3.5;
        const repulsionStrength = 0.5;

        if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            const repelDir = new THREE.Vector3().subVectors(meshRef.current.position, mousePos).normalize();
            velocity.addScaledVector(repelDir, force * repulsionStrength);
        }

        const springForce = new THREE.Vector3().subVectors(targetPos, meshRef.current.position).multiplyScalar(0.08);
        velocity.add(springForce);
        velocity.multiplyScalar(0.92);

        meshRef.current.position.add(velocity);
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.1;
    });

    return (
        <group ref={meshRef} position={position}>
            {/* Outer Glass Shell */}
            <Sphere args={size} material={outerMaterial} />
            {/* Inner Sci-Fi Core */}
            <Sphere args={[size[0] * 0.85, 32, 32]} material={innerMaterial} />
        </group>
    );
};

export default function FloatingSpheres({ color = '#ffffff' }: FloatingSpheresProps) {
    const cyanLight = useRef<THREE.PointLight>(null!);
    const purpleLight = useRef<THREE.PointLight>(null!);

    // Load Sci-Fi Texture with unique filename to bypass any caching
    const texture = useTexture('/city_texture.png');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (cyanLight.current) {
            cyanLight.current.position.x = Math.sin(time * 0.5) * 5;
            cyanLight.current.position.y = Math.cos(time * 0.3) * 5;
        }
        if (purpleLight.current) {
            purpleLight.current.position.x = Math.cos(time * 0.4) * 5;
            purpleLight.current.position.y = Math.sin(time * 0.6) * 5;
        }
    });

    const outerMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: '#ffffff',
        metalness: 1.0,
        roughness: 0.05,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        envMapIntensity: 2.5,
    }), []);

    const innerMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#ffffff',
        metalness: 1.0,
        roughness: 0.0,
    }), []);

    // Generate 20 randomized spheres
    const spheresData = useMemo(() => {
        return Array.from({ length: 22 }).map((_, i) => ({
            pos: [
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 4
            ] as [number, number, number],
            size: [0.3 + Math.random() * 0.8, 64, 64] as [number, number, number],
            speed: 0.5 + Math.random() * 1.5
        }));
    }, []);

    return (
        <>
            <Environment preset="studio" />
            <ambientLight intensity={0.2} />

            <pointLight ref={cyanLight} color="#45A29E" intensity={150} distance={20} decay={2} />
            <pointLight ref={purpleLight} color="#7289DA" intensity={150} distance={20} decay={2} />

            {spheresData.map((data, i) => (
                <FloatingPhysicsSphere
                    key={i}
                    position={data.pos}
                    size={data.size}
                    outerMaterial={outerMaterial}
                    innerMaterial={innerMaterial}
                    speed={data.speed}
                />
            ))}
        </>
    );
}
