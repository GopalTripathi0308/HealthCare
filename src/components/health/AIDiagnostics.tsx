"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Scan,
  Upload,
  CheckCircle,
  AlertTriangle,
  Eye,
  Heart,
  Zap,
  FileImage,
  Download,
  Share,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface DiagnosisResult {
  condition: string;
  confidence: number;
  severity: "low" | "medium" | "high";
  description: string;
  recommendations: string[];
}

interface ScanStep {
  id: string;
  label: string;
  status: "pending" | "processing" | "completed";
  duration: number;
}

export function AIDiagnostics() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState<DiagnosisResult[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scanSteps: ScanStep[] = [
    {
      id: "upload",
      label: "Image Processing",
      status: "pending",
      duration: 2000,
    },
    {
      id: "preprocess",
      label: "Preprocessing",
      status: "pending",
      duration: 1500,
    },
    { id: "analyze", label: "AI Analysis", status: "pending", duration: 3000 },
    { id: "validate", label: "Validation", status: "pending", duration: 1000 },
    {
      id: "results",
      label: "Generating Results",
      status: "pending",
      duration: 1500,
    },
  ];

  const [steps, setSteps] = useState(scanSteps);

  const mockResults: DiagnosisResult[] = [
    {
      condition: "Pneumonia",
      confidence: 94.2,
      severity: "high",
      description: "Bacterial pneumonia detected in the lower right lobe",
      recommendations: [
        "Immediate antibiotic treatment",
        "Follow-up chest X-ray in 48 hours",
        "Monitor oxygen saturation",
        "Consider hospitalization if symptoms worsen",
      ],
    },
    {
      condition: "Pleural Effusion",
      confidence: 78.5,
      severity: "medium",
      description: "Small pleural effusion observed",
      recommendations: [
        "Monitor with serial imaging",
        "Consider thoracentesis if symptomatic",
        "Investigate underlying cause",
      ],
    },
  ];

  const startScan = async () => {
    setIsScanning(true);
    setScanProgress(0);
    setCurrentStep(0);
    setResults([]);

    // Reset steps
    setSteps(scanSteps.map((step) => ({ ...step, status: "pending" })));

    // Simulate scanning process
    for (let i = 0; i < steps.length; i++) {
      // Update current step to processing
      setSteps((prev) =>
        prev.map((step, index) => ({
          ...step,
          status:
            index === i ? "processing" : index < i ? "completed" : "pending",
        }))
      );

      setCurrentStep(i);

      // Simulate progress for current step
      const stepDuration = scanSteps[i].duration;
      const progressIncrement = 100 / steps.length / (stepDuration / 50);

      for (let progress = 0; progress < stepDuration; progress += 50) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setScanProgress((prev) => Math.min(100, prev + progressIncrement));
      }

      // Mark step as completed
      setSteps((prev) =>
        prev.map((step, index) => ({
          ...step,
          status: index <= i ? "completed" : "pending",
        }))
      );
    }

    // Show results
    setTimeout(() => {
      setResults(mockResults);
      setIsScanning(false);
    }, 500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return AlertTriangle;
      case "medium":
        return Eye;
      case "low":
        return CheckCircle;
      default:
        return CheckCircle;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold gradient-text mb-2">
          AI-Powered Diagnostics
        </h2>
        <p className="text-muted-foreground">
          Advanced machine learning for medical image analysis
        </p>
      </motion.div>

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileImage className="w-5 h-5" />
              Medical Image Upload
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="space-y-4"
              >
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium">Upload Medical Image</p>
                  <p className="text-sm text-muted-foreground">
                    Supports X-rays, CT scans, MRI images (DICOM, PNG, JPG)
                  </p>
                </div>
                <Button
                  onClick={() => setSelectedImage("chest-xray.jpg")}
                  disabled={isScanning}
                  className="mt-4"
                >
                  Select Image
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Scanning Process */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Image Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Image Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <FileImage className="w-16 h-16 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Chest X-Ray
                      </p>
                    </div>
                  </div>

                  {/* Scanning Animation */}
                  {isScanning && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Analysis Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isScanning && results.length === 0 && (
                  <div className="text-center py-8">
                    <Button
                      onClick={startScan}
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <Scan className="w-5 h-5" />
                      Start Analysis
                    </Button>
                  </div>
                )}

                {isScanning && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Analysis Progress
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {Math.round(scanProgress)}%
                      </span>
                    </div>
                    <Progress value={scanProgress} className="h-2" />

                    <div className="space-y-3">
                      {steps.map((step, index) => (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-center gap-3 p-3 rounded-lg ${
                            step.status === "completed"
                              ? "bg-green-50 dark:bg-green-950/20"
                              : step.status === "processing"
                              ? "bg-blue-50 dark:bg-blue-950/20"
                              : "bg-gray-50 dark:bg-gray-950/20"
                          }`}
                        >
                          <div className="relative">
                            {step.status === "completed" && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            {step.status === "processing" && (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <Zap className="w-5 h-5 text-blue-600" />
                              </motion.div>
                            )}
                            {step.status === "pending" && (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                            )}
                          </div>
                          <span className="text-sm font-medium">
                            {step.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Diagnosis Results</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {results.map((result, index) => {
                const SeverityIcon = getSeverityIcon(result.severity);
                return (
                  <motion.div
                    key={result.condition}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-3">
                            <SeverityIcon
                              className={`w-6 h-6 ${
                                result.severity === "high"
                                  ? "text-red-600"
                                  : result.severity === "medium"
                                  ? "text-orange-600"
                                  : "text-green-600"
                              }`}
                            />
                            {result.condition}
                          </CardTitle>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(
                              result.severity
                            )}`}
                          >
                            {result.confidence}% confidence
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {result.description}
                        </p>

                        <div>
                          <h4 className="font-medium mb-2">Recommendations:</h4>
                          <ul className="space-y-1">
                            {result.recommendations.map((rec, recIndex) => (
                              <motion.li
                                key={recIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + recIndex * 0.1 }}
                                className="flex items-start gap-2 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {rec}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
