"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/component/ui/button";
import { ArrowRight } from "lucide-react";

export default function JoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl sm:text-2xl mb-4 opacity-90">
            Become part of The Eigen Society
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Whether you're a mathematics enthusiast or just curious about 
            quantitative thinking, there's a place for you in our community. 
            Join us today and unlock your mathematical potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium group w-full sm:w-auto"
            >
              Join Now
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium bg-transparent w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
