"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Video,
  BarChart3,
  Shield,
  Smartphone,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  containerVariants,
  itemVariants,
  staggerContainer,
} from "@/lib/animations/variants";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description:
      "Advanced machine learning algorithms that assist healthcare professionals in accurate diagnosis and treatment planning.",
    features: [
      "Medical imaging analysis",
      "Pattern recognition",
      "Predictive modeling",
      "Clinical decision support",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Video,
    title: "Telemedicine Platform",
    description:
      "Comprehensive telehealth solutions enabling remote consultations, monitoring, and care delivery.",
    features: [
      "Video consultations",
      "Remote monitoring",
      "Digital prescriptions",
      "Patient portals",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Healthcare Analytics",
    description:
      "Data-driven insights and analytics to optimize healthcare operations and improve patient outcomes.",
    features: [
      "Performance metrics",
      "Predictive analytics",
      "Population health",
      "Cost optimization",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security ensuring HIPAA compliance and protecting sensitive healthcare data.",
    features: [
      "HIPAA compliance",
      "Data encryption",
      "Access controls",
      "Audit trails",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Health Apps",
    description:
      "Patient-centric mobile applications for health tracking, medication management, and care coordination.",
    features: [
      "Health tracking",
      "Medication reminders",
      "Appointment scheduling",
      "Care coordination",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Database,
    title: "EHR Integration",
    description:
      "Seamless integration with existing Electronic Health Record systems for unified healthcare data management.",
    features: [
      "System integration",
      "Data synchronization",
      "Workflow automation",
      "Interoperability",
    ],
    color: "from-cyan-500 to-blue-500",
  },
];

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" />

      {/* Floating Elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

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
              className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Services</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Comprehensive Healthcare
              </span>
              <br />
              <span className="gradient-text">Technology Solutions</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From AI-powered diagnostics to telemedicine platforms, we provide
              end-to-end healthcare technology solutions that transform patient
              care and operational efficiency.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card
                  variant="glass"
                  interactive
                  className="group h-full cursor-pointer overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            inView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{
                            delay: 0.5 + index * 0.1 + featureIndex * 0.05,
                          }}
                        >
                          <div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}
                          />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="pt-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto text-sm font-medium text-foreground hover:text-primary"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mt-20"
          >
            <Card variant="gradient" className="p-12 max-w-4xl mx-auto">
              <motion.div
                className="space-y-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Healthcare Operations?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join hundreds of healthcare organizations already using our
                  platform to improve patient outcomes and operational
                  efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    View Case Studies
                  </Button>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
