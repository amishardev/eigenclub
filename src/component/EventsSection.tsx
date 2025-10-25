"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/component/ui/button";

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting mathematical events and workshops
          </p>
        </motion.div>

        {/* Featured Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
            {/* Event Header with Gradient */}
            <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20" />
              <motion.h3
                className="relative text-4xl sm:text-5xl font-bold text-white z-10"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                The Roots of Infinity
              </motion.h3>
            </div>

            {/* Event Details */}
            <div className="p-8 sm:p-12">
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">Inaugural Meet</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join us for the inaugural meeting of The Eigen Society! 
                  This foundational event will set the tone for our mathematical 
                  journey ahead. Meet fellow members, discuss exciting plans, 
                  and explore the infinite possibilities of mathematical thinking.
                </p>
              </div>

              {/* Event Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="font-semibold">October 22, 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Time</p>
                    <p className="font-semibold">3:00 PM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Venue</p>
                    <p className="font-semibold">AT-Caffe, IIM Sambalpur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Audience</p>
                    <p className="font-semibold">All Members Welcome</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8"
              >
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
