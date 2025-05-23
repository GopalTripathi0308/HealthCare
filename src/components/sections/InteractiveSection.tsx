"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BarChart3,
  Brain,
  Activity,
  Zap,
  TrendingUp,
  Sparkles,
  Video,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnalyticsDashboard } from "@/components/health/AnalyticsDashboard";
import { AIDiagnostics } from "@/components/health/AIDiagnostics";
import { TelemedicineDemo } from "@/components/health/TelemedicineDemo";
import { containerVariants, itemVariants } from "@/lib/animations/variants";

export function InteractiveSection() {
  const [activeTab, setActiveTab] = useState("analytics");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    {
      id: "analytics",
      label: "Healthcare Analytics",
      icon: BarChart3,
      description: "Real-time data insights and performance metrics",
    },
    {
      id: "diagnostics",
      label: "AI Diagnostics",
      icon: Brain,
      description: "Advanced AI-powered medical image analysis",
    },
    {
      id: "telemedicine",
      label: "Telemedicine",
      icon: Video,
      description: "Virtual consultations with real-time monitoring",
    },
  ];

  return (
    <section
      id="interactive"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Interactive Features</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent">
                Experience the Future of
              </span>
              <br />
              <span className="gradient-text">Healthcare Technology</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our cutting-edge healthcare solutions with interactive
              demos. See how AI and analytics are transforming patient care and
              medical diagnostics.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-gray-700 text-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">{tab.label}</div>
                    <div className="text-xs opacity-70">{tab.description}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-0 shadow-2xl">
                  <CardContent className="p-8">
                    {activeTab === "analytics" && <AnalyticsDashboard />}
                    {activeTab === "diagnostics" && <AIDiagnostics />}
                    {activeTab === "telemedicine" && <TelemedicineDemo />}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: Activity,
                title: "Real-time Monitoring",
                description:
                  "Live patient data tracking and instant alerts for critical changes",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "AI-powered analysis delivers results in seconds, not hours",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description:
                  "Advanced algorithms predict health trends and outcomes",
                color: "from-blue-500 to-purple-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
            <Card className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 border-0 shadow-2xl">
              <CardContent className="p-12">
                <motion.div
                  className="space-y-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Experience the Future?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join thousands of healthcare professionals already using our
                    AI-powered platform to improve patient outcomes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                    >
                      Start Free Trial
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 font-semibold"
                    >
                      Request Demo
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
