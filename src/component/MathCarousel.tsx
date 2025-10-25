"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const mathTopics = [
  {
    title: "Integration",
    symbol: "∫",
    description: "Master the art of finding areas, volumes, and solving complex accumulation problems",
    details: "From Riemann sums to advanced techniques like integration by parts and substitution",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Differentiation",
    symbol: "d/dx",
    description: "Understand rates of change, optimization, and the foundation of calculus",
    details: "Explore derivatives, chain rule, and applications in business analytics",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Vector Calculus",
    symbol: "∇",
    description: "Navigate through multidimensional spaces and gradient analysis",
    details: "Dive into vector fields, divergence, curl, and multivariable optimization",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Differential Equations",
    symbol: "dy/dx",
    description: "Model real-world phenomena through mathematical relationships",
    details: "From ODEs to PDEs, solving growth models and dynamic systems",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Probability",
    symbol: "P(A)",
    description: "Quantify uncertainty and make data-driven decisions",
    details: "Probability distributions, Bayes theorem, and statistical inference",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function MathCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="topics" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
            {mathTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                ref={index === 0 ? ref : null}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 sm:w-96 snap-center"
              >
                <div
                  className="relative h-full bg-card border border-border rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden group"
                  onClick={() =>
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Symbol */}
                  <div className="relative mb-6">
                    <div
                      className={`text-7xl font-bold bg-gradient-to-br ${topic.color} bg-clip-text text-transparent`}
                    >
                      {topic.symbol}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {topic.description}
                    </p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedCard === index ? "auto" : 0,
                        opacity: expandedCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          {topic.details}
                        </p>
                      </div>
                    </motion.div>

                    {/* Expand Indicator */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium text-primary">
                        {expandedCard === index ? "Show less" : "Learn more"}
                      </span>
                      <ChevronRight
                        className={`h-5 w-5 text-primary transition-transform duration-300 ${
                          expandedCard === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}