"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { containerVariants, itemVariants } from "@/lib/animations/variants";

const timeline = [
  {
    year: "2024",
    title: "AI Revolution",
    description:
      "Launched advanced AI diagnostic platform serving 10M+ patients",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Expanded to 50+ countries with localized healthcare solutions",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description:
      "Received Healthcare Innovation Award for telemedicine platform",
    icon: Award,
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "2021",
    title: "Platform Launch",
    description: "Launched comprehensive healthcare technology platform",
    icon: Calendar,
    color: "from-orange-500 to-red-500",
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-purple-900/20" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Milestones in transforming healthcare technology
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative"
              >
                <Card variant="glass" interactive className="p-6">
                  <CardContent className="flex items-center gap-6 p-0">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold gradient-text">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
