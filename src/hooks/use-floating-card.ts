"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { useIsMobile } from "./use-mobile";

interface Position {
  x: number;
  y: number;
}

export const useFloatingCard = <T extends HTMLElement>({
  moveIntensity = 30, // Increased for more noticeable movement
  floatIntensity = 0.1,
  moveOffset = 0,
  floatOffset = 0,
  syncFactor = 0.7, // Higher sync factor for more coordinated movement
}: {
  moveIntensity?: number;
  floatIntensity?: number;
  moveOffset?: number;
  floatOffset?: number;
  syncFactor?: number;
} = {}) => {
  const ref = useRef<T>(null);
  const isMobile = useIsMobile();
  const frameRef = useRef<number>();
  const currentPosition = useRef<Position>({ x: 0, y: 0 });
  const targetPosition = useRef<Position>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Global mouse position for synchronized movement
  const globalMousePosition = useRef<Position>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (isMobile) return;

    // Track global mouse position for all cards
    const handleGlobalMouseMove = (e: MouseEvent) => {
      globalMousePosition.current = {
        x: e.clientX / window.innerWidth,  // Normalized 0-1
        y: e.clientY / window.innerHeight  // Normalized 0-1
      };
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const animate = () => {
      if (!ref.current) return;

      // Base lerp factor - controls smoothness of movement
      const lerpFactor = isHovered ? 0.2 : 0.08;
      
      // Calculate movement based on mouse position
      // Move AGAINST the cursor direction (inverted x and y)
      const moveX = (0.5 - globalMousePosition.current.x) * moveIntensity;
      const moveY = (0.5 - globalMousePosition.current.y) * moveIntensity;
      
      // Set target position - cards move away from cursor
      targetPosition.current = {
        x: moveX,
        y: moveY
      };

      // Smoothly interpolate current position towards target position
      currentPosition.current = {
        x: currentPosition.current.x + (targetPosition.current.x - currentPosition.current.x) * lerpFactor,
        y: currentPosition.current.y + (targetPosition.current.y - currentPosition.current.y) * lerpFactor,
      };

      // Add subtle floating animation based on time
      const floatY = Math.sin(Date.now() * 0.001 * floatIntensity + floatOffset) * 3;
      const floatX = Math.sin(Date.now() * 0.002 * floatIntensity + floatOffset) * 2;

      // Apply transform - primarily translation with minimal rotation
      ref.current.style.transform = `
        perspective(1000px) 
        translateX(${currentPosition.current.x + floatX}px)
        translateY(${currentPosition.current.y + floatY}px)
        rotateX(${currentPosition.current.y * 0.05}deg) 
        rotateY(${-currentPosition.current.x * 0.05}deg)
        translateZ(0)`;

      frameRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    if (ref.current) {
      ref.current.addEventListener("mouseenter", handleMouseEnter);
      ref.current.addEventListener("mouseleave", handleMouseLeave);
    }
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", handleMouseEnter);
        ref.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isMobile, moveIntensity, moveOffset, floatIntensity, floatOffset, syncFactor, isHovered]);

  return { ref, isHovered };
};
