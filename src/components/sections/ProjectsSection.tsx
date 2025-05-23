"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  containerVariants,
  itemVariants,
  staggerContainer,
} from "@/lib/animations/variants";

const projects = [
  {
    title: "AI Diagnostic Platform",
    description:
      "Advanced machine learning platform for medical image analysis and diagnosis assistance.",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    tags: ["AI/ML", "Medical Imaging", "React", "Python"],
    featured: true,
  },
  {
    title: "Telemedicine App",
    description:
      "Comprehensive telehealth solution with video consultations and remote monitoring.",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "Healthcare Analytics",
    description:
      "Real-time analytics dashboard for healthcare operations and patient insights.",
    image: "bg-gradient-to-br from-emerald-500 to-teal-500",
    tags: ["Analytics", "Dashboard", "D3.js", "PostgreSQL"],
    featured: false,
  },
  {
    title: "EHR Integration",
    description:
      "Seamless integration platform for Electronic Health Record systems.",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
    tags: ["Integration", "FHIR", "API", "Microservices"],
    featured: false,
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative healthcare solutions that are transforming patient care
              and medical operations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={project.featured ? "md:col-span-1" : "md:col-span-1"}
              >
                <Card
                  variant="glass"
                  interactive
                  className="group h-full overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <motion.div
                      className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="relative z-10 text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 justify-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                          >
                            <Github className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <CardTitle className="mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </CardTitle>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button variant="ghost" className="group/btn p-0 h-auto">
                        View Project
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
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
