import { useEffect, useRef, useCallback } from 'react';

/**
 * Detects phone shake using DeviceMotion API.
 * Returns a ref whose `.current` is the current shake intensity (0-1).
 * Also fires an optional callback on each shake burst.
 */
export function useShakeDetection(onShake?: () => void) {
  const intensity = useRef(0);
  const lastAccel = useRef({ x: 0, y: 0, z: 0 });
  const shakeThreshold = 15; // m/s² — fairly vigorous shake

  useEffect(() => {
    const handler = (e: DeviceMotionEvent) => {
      const accel = e.accelerationIncludingGravity;
      if (!accel || accel.x === null || accel.y === null || accel.z === null) return;

      const dx = accel.x! - lastAccel.current.x;
      const dy = accel.y! - lastAccel.current.y;
      const dz = accel.z! - lastAccel.current.z;
      const magnitude = Math.sqrt(dx * dx + dy * dy + dz * dz);

      lastAccel.current = { x: accel.x!, y: accel.y!, z: accel.z! };

      if (magnitude > shakeThreshold) {
        intensity.current = Math.min(1, magnitude / 40);
        onShake?.();
      } else {
        // Decay intensity
        intensity.current *= 0.9;
      }
    };

    // Request permission on iOS 13+
    const requestAndListen = async () => {
      if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
        try {
          const res = await (DeviceMotionEvent as any).requestPermission();
          if (res === 'granted') {
            window.addEventListener('devicemotion', handler);
          }
        } catch {
          // Permission denied or unavailable
        }
      } else {
        window.addEventListener('devicemotion', handler);
      }
    };

    requestAndListen();
    return () => window.removeEventListener('devicemotion', handler);
  }, [onShake]);

  return intensity;
}
