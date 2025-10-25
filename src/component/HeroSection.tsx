"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/component/ui/button";
import { FloatingCard } from "@/component/FloatingCard";
import { motion } from "framer-motion";

const mathCards = [
  {
    title: "Integration",
    label: "TOPIC",
    symbol: "∫",
    gradient: "from-pink-500 to-rose-500",
    position: "top-[10%] left-[5%]",
    animation: { x: -100, rotate: -15 },
    final: { rotate: -12 },
    delay: 0.2
  },
  {
    title: "Differentiation",
    label: "TOPIC",
    symbol: "∂",
    gradient: "from-yellow-400 to-orange-500",
    position: "top-[15%] right-[8%]",
    animation: { x: 100, rotate: 15 },
    final: { rotate: 10 },
    delay: 0.3
  },
  {
    title: "Vector Calculus",
    label: "TOPIC",
    symbol: "∇",
    gradient: "from-green-500 to-emerald-600",
    position: "top-[45%] left-[8%]",
    animation: { x: -100, rotate: -10 },
    final: { rotate: -8 },
    delay: 0.4
  },
  {
    title: "Line Integrals",
    label: "TOPIC",
    symbol: "∮",
    gradient: "from-cyan-500 to-blue-600",
    position: "top-[50%] right-[5%]",
    animation: { x: 100, rotate: 12 },
    final: { rotate: 8 },
    delay: 0.5
  },
  {
    title: "Eigenvalues",
    label: "TOPIC",
    symbol: "λ",
    gradient: "from-red-500 to-pink-600",
    position: "bottom-[12%] left-[12%]",
    animation: { y: 100, rotate: -8 },
    final: { rotate: -5 },
    delay: 0.6
  },
  {
    title: "Series",
    label: "TOPIC",
    symbol: "∑",
    gradient: "from-orange-500 to-red-600",
    position: "bottom-[15%] right-[10%]",
    animation: { y: 100, rotate: 10 },
    final: { rotate: 6 },
    delay: 0.7
  },
  {
    title: "Matrices",
    label: "TOPIC",
    symbol: "⊞",
    gradient: "from-purple-500 to-indigo-600",
    position: "top-[30%] left-[20%]",
    animation: { y: -100, rotate: -5 },
    final: { rotate: -3 },
    delay: 0.8
  },
  {
    title: "Probability",
    label: "TOPIC",
    symbol: "P",
    gradient: "from-blue-500 to-teal-600",
    position: "top-[25%] right-[25%]",
    animation: { y: -100, rotate: 7 },
    final: { rotate: 4 },
    delay: 0.9
  },
  {
    title: "Limits",
    label: "TOPIC",
    symbol: "lim",
    gradient: "from-teal-500 to-green-600",
    position: "bottom-[30%] left-[25%]",
    animation: { x: -100, y: 50, rotate: -9 },
    final: { rotate: -6 },
    delay: 1.0
  },
  {
    title: "Transforms",
    label: "TOPIC",
    symbol: "ℱ",
    gradient: "from-amber-500 to-yellow-600",
    position: "bottom-[25%] right-[20%]",
    animation: { x: 100, y: 50, rotate: 11 },
    final: { rotate: 7 },
    delay: 1.1
  }
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 text-white">
            The Eigen
            <br />
            <span className="text-white">Society</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 font-light"
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
            className="rounded-full px-8 py-6 text-lg font-medium bg-white text-purple-600 hover:bg-purple/90 group shadow-xl"
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
            className="rounded-full px-8 py-6 text-lg font-medium border-2 border-white text-white hover:bg-purple/90 hover:text-purple-600 shadow-xl"
            asChild
          >
            <a href="#about" className="text-white hover:text-purple-600">Learn More</a>
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
