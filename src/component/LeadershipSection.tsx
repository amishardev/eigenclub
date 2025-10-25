"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Amartya Bhattacharya",
    position: "President",
    image: "https://github.com/amishardev/nitk/blob/main/2025BSDSAI014_Amartya%20Bhattacharya.png?raw=true",
    bio: "Leading The Eigen Society with a vision to make mathematics accessible and exciting for all members.",
    linkedin: "#",
    email: "amartya@example.com",
  },
  {
    name: "Amish Sharma",
    position: "Vice President",
    image: "https://github.com/amishardev/nitk/blob/main/u%20(1).jpg?raw=true",
    bio: "Driving innovation and fostering collaboration within our mathematical community.",
    linkedin: "#",
    email: "amish@example.com",
  },
];

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the minds steering The Eigen Society forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Position Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="glassmorphic px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-white">
                        {leader.position}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-primary font-semibold mb-4">
                    {leader.position}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
