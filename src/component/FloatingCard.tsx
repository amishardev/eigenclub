"use client";

import { motion } from "framer-motion";
import { useFloatingCard } from "@/hooks/use-floating-card";
import { cn } from "@/lib/utils";

export interface FloatingCardProps {
  className?: string;
  title: string;
  label: string;
  symbol?: string;
  gradient: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  initialAnimation?: { x?: number; y?: number; rotate?: number };
  animate?: { rotate?: number };
  delay?: number;
}

export const FloatingCard = ({
  className,
  title,
  label,
  symbol,
  gradient,
  position,
  initialAnimation,
  animate,
  delay = 0,
}: FloatingCardProps) => {
  // Configure each card with slightly different parameters for natural movement
  const { ref, isHovered } = useFloatingCard<HTMLDivElement>({
    moveIntensity: 25 + Math.random() * 10, // Varied movement intensity
    floatIntensity: 0.1 + Math.random() * 0.05, // Slight randomness for natural movement
    floatOffset: delay * 2, // Use delay to offset floating animation
    syncFactor: 0.7, // Higher sync factor for coordinated movement against cursor
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "absolute w-48 h-64 rounded-2xl shadow-2xl cursor-pointer select-none transition-all duration-300 hidden md:block",
        className
      )}
      style={{
        ...position,
        transformStyle: "preserve-3d",
        boxShadow: isHovered 
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
          : "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
        zIndex: isHovered ? 50 : 10,
      }}
      initial={{
        opacity: 0,
        ...initialAnimation,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        ...animate,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-br transition-all duration-300",
          gradient
        )}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <span className="text-sm font-medium tracking-wider opacity-60">
            {label}
          </span>
          {symbol && <span className="text-6xl font-bold my-2">{symbol}</span>}
          <span className="text-lg font-semibold text-center">{title}</span>
        </div>
      </div>
    </motion.div>
  );
};
