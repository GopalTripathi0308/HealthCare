"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  containerVariants,
  itemVariants,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations/variants";

const stats = [
  {
    icon: Heart,
    number: "10M+",
    label: "Lives Improved",
    description:
      "Patients worldwide have benefited from our healthcare solutions",
  },
  {
    icon: Users,
    number: "500+",
    label: "Healthcare Partners",
    description: "Hospitals and clinics trust our technology",
  },
  {
    icon: Award,
    number: "50+",
    label: "Industry Awards",
    description: "Recognition for innovation in healthcare technology",
  },
  {
    icon: TrendingUp,
    number: "99.9%",
    label: "System Uptime",
    description: "Reliable, always-available healthcare solutions",
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-purple-900/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">About HealthTech</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Revolutionizing Healthcare
              </span>
              <br />
              <span className="gradient-text">Through Innovation</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform healthcare delivery through
              cutting-edge technology, making quality care accessible,
              efficient, and personalized for everyone.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Leading the Digital Health Revolution
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our founding, we've been at the forefront of healthcare
                  innovation, developing AI-powered solutions that enhance
                  patient outcomes and streamline medical processes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our comprehensive platform integrates seamlessly with existing
                  healthcare infrastructure, providing real-time insights,
                  predictive analytics, and personalized treatment
                  recommendations.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "AI-powered diagnostic assistance",
                  "Real-time patient monitoring",
                  "Predictive health analytics",
                  "Seamless EHR integration",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <span className="text-foreground font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="relative">
                {/* Main Image Placeholder */}
                <motion.div
                  className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Heart className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">
                        Healthcare Innovation
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Award className="w-6 h-6 text-purple-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card
                  variant="glass"
                  interactive
                  className="text-center group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="text-3xl font-bold gradient-text mb-2"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      {stat.number}
                    </motion.div>

                    <h4 className="font-semibold text-foreground mb-2">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
