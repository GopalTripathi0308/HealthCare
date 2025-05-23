"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { IAboutSection } from "../../core/types/landingTypes";

interface AboutSectionProps {
  data: IAboutSection;
}

export function AboutSection({ data }: AboutSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              >
                {data.title}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {data.description}
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4"
            >
              {data.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Healthcare Clients
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  99%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              {/* Placeholder for now - you can replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/40 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-primary/30 rounded-full"
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${10 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-secondary/20 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
