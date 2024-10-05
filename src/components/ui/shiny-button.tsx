"use client";

import React from "react";
import { motion, type AnimationProps } from "framer-motion";

import { cn } from "@/lib/utils";

// Animation properties adjusted for smoother, continuous motion
const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    duration: 1.5, // Increased duration for smoother animation
    ease: "linear", // Changed to linear for consistent speed
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
} as AnimationProps;

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton = ({ children, className, ...props }: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:translate-y-[-2px]",
        // Custom purple colors for light and dark mode, with hover states
        "bg-[#8B5CF6] hover:bg-[#7C3AED] dark:bg-[#6D28D9] dark:hover:bg-[#5B21B6]",
        // Enhanced shadow effect for dark mode
        "dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]",
        className
      )}
    >
      <span className="relative z-10 block text-sm uppercase tracking-wider">
        {children}
      </span>
      {/* New shine effect using motion.span */}
      <motion.span
        className="absolute inset-0 z-0 opacity-70 mix-blend-soft-light"
        style={{
          // Gradient for the shine effect
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          // Skew and width for a diagonal shine
          transform: "skew(-20deg)",
          width: "50%",
          // Position controlled by animation
          left: "var(--x)",
        }}
      />
    </motion.button>
  );
};

export default ShinyButton;
