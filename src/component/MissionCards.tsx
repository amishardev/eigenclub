"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Target, TrendingUp } from "lucide-react";

const missions = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouraging creative problem-solving and mathematical innovation in business contexts",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building a strong community of mathematics enthusiasts and analytical thinkers",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for excellence in mathematical understanding and application",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous learning and development of quantitative skills for management",
  },
];

export default function MissionCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering future leaders with mathematical excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-primary/50">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <mission.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
