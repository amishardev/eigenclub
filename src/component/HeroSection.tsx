"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/component/ui/button";
import { FloatingCard } from "@/component/FloatingCard";
import { motion } from "framer-motion";

const mathCards = [
  // Left column (4 cards)
  {
    title: "Integration",
    label: "TOPIC",
    symbol: "∫",
    gradient: "from-pink-500 to-rose-500",
    position: "top-[8%] left-[6%]",
    animation: { x: -120, rotate: -12 },
    final: { rotate: -8 },
    delay: 0.15,
  },
  {
    title: "Eigenvalues",
    label: "TOPIC",
    symbol: "λ",
    gradient: "from-red-500 to-pink-600",
    position: "top-[34%] left-[4%]",
    animation: { x: -80, rotate: -8 },
    final: { rotate: -6 },
    delay: 0.25,
  },
  {
    title: "Vector Calculus",
    label: "TOPIC",
    symbol: "∇",
    gradient: "from-green-500 to-emerald-600",
    position: "top-[58%] left-[8%]",
    animation: { x: -100, rotate: -10 },
    final: { rotate: -7 },
    delay: 0.35,
  },
  {
    title: "Probability",
    label: "TOPIC",
    symbol: "P",
    gradient: "from-cyan-400 to-sky-500",
    position: "bottom-[10%] left-[12%]",
    animation: { y: 100, rotate: -6 },
    final: { rotate: -3 },
    delay: 0.45,
  },

  // Right column (4 cards)
  {
    title: "Differentiation",
    label: "TOPIC",
    symbol: "∂",
    gradient: "from-yellow-400 to-orange-500",
    position: "top-[8%] right-[6%]",
    animation: { x: 120, rotate: 12 },
    final: { rotate: 8 },
    delay: 0.2,
  },
  {
    title: "Series",
    label: "TOPIC",
    symbol: "∑",
    gradient: "from-orange-500 to-red-600",
    position: "top-[34%] right-[4%]",
    animation: { x: 80, rotate: 8 },
    final: { rotate: 6 },
    delay: 0.3,
  },
  {
    title: "Line Integrals",
    label: "TOPIC",
    symbol: "∮",
    gradient: "from-blue-400 to-indigo-500",
    position: "top-[58%] right-[8%]",
    animation: { x: 100, rotate: 10 },
    final: { rotate: 7 },
    delay: 0.4,
  },
  {
    title: "Geometry",
    label: "TOPIC",
    symbol: "Δ",
    gradient: "from-violet-500 to-fuchsia-500",
    position: "bottom-[10%] right-[12%]",
    animation: { y: 100, rotate: 6 },
    final: { rotate: 3 },
    delay: 0.5,
  },
];

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="absolute inset-0 overflow-hidden">
        {mathCards.map((card) => (
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-white">
            The Eigen
            <br />
            <span className="text-white">Society</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mathematics Club of IIM Sambalpur
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Exploring the beauty of mathematics through innovation, collaboration, and analytical thinking
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-medium bg-white text-purple-600 hover:bg-white/90 group shadow-xl"
            asChild
          >
            <a href="#join">
              Join The Society
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-medium bg-white text-purple-600 hover:bg-white/90 group shadow-xl"
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
