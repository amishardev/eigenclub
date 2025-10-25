"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FloatingCard } from "./FloatingCard";

const aboutCards = [
  {
    title: "Workshops",
    label: "ACTIVITY",
    symbol: "W",
    gradient: "from-blue-500 to-indigo-600",
    position: "top-[10%] left-[5%]",
    animation: { x: -50, rotate: -8 },
    final: { rotate: -5 },
    delay: 0.2
  },
  {
    title: "Competitions",
    label: "ACTIVITY",
    symbol: "C",
    gradient: "from-emerald-500 to-green-600",
    position: "bottom-[10%] right-[5%]",
    animation: { x: 50, rotate: 8 },
    final: { rotate: 5 },
    delay: 0.3
  },
  {
    title: "Research",
    label: "FOCUS",
    symbol: "R",
    gradient: "from-purple-500 to-violet-600",
    position: "bottom-[15%] left-[10%]",
    animation: { y: 50, rotate: -10 },
    final: { rotate: -6 },
    delay: 0.4
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="relative h-full w-full">
        {isInView && aboutCards.map((card) => (
          <FloatingCard
            key={card.title}
            className={card.position}
            title={card.title}
            label={card.label}
            symbol={card.symbol}
            gradient={card.gradient}
            initialAnimation={card.animation}
            animate={card.final}
            delay={card.delay}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About The Society
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
            The Eigen Society is the premier mathematics club at IIM Sambalpur, 
            dedicated to fostering a deep appreciation for mathematical sciences. 
            We believe in the power of numbers to transform perspectives and solve 
            complex business challenges.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Through workshops, competitions, and collaborative projects, we create 
            a vibrant community where mathematical thinking meets real-world applications. 
            Our mission is to make mathematics accessible, engaging, and relevant to 
            management studies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
