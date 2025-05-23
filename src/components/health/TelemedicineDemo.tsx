"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Monitor,
  Heart,
  Activity,
  Thermometer,
  User,
  Calendar,
  Clock,
  FileText,
  Camera,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface VitalSigns {
  heartRate: number;
  bloodPressure: string;
  temperature: number;
  oxygenSaturation: number;
}

interface Patient {
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
}

export function TelemedicineDemo() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [vitals, setVitals] = useState<VitalSigns>({
    heartRate: 72,
    bloodPressure: "120/80",
    temperature: 98.6,
    oxygenSaturation: 98,
  });

  const patient: Patient = {
    name: "Sarah Johnson",
    age: 45,
    condition: "Hypertension Follow-up",
    lastVisit: "2 weeks ago",
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);

        // Simulate changing vitals
        setVitals((prev) => ({
          heartRate: Math.max(
            60,
            Math.min(100, prev.heartRate + Math.floor(Math.random() * 6 - 3))
          ),
          bloodPressure: prev.bloodPressure,
          temperature: Math.max(
            97,
            Math.min(100, prev.temperature + (Math.random() * 0.4 - 0.2))
          ),
          oxygenSaturation: Math.max(
            95,
            Math.min(
              100,
              prev.oxygenSaturation + Math.floor(Math.random() * 3 - 1)
            )
          ),
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startCall = () => {
    setIsCallActive(true);
    setCallDuration(0);
  };

  const endCall = () => {
    setIsCallActive(false);
    setCallDuration(0);
  };

  const getVitalStatus = (vital: string, value: number | string) => {
    switch (vital) {
      case "heartRate":
        const hr = value as number;
        if (hr < 60 || hr > 100) return "text-red-500";
        if (hr < 70 || hr > 90) return "text-yellow-500";
        return "text-green-500";
      case "temperature":
        const temp = value as number;
        if (temp < 97 || temp > 99.5) return "text-red-500";
        if (temp < 98 || temp > 99) return "text-yellow-500";
        return "text-green-500";
      case "oxygenSaturation":
        const oxygen = value as number;
        if (oxygen < 95) return "text-red-500";
        if (oxygen < 98) return "text-yellow-500";
        return "text-green-500";
      default:
        return "text-green-500";
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
          Telemedicine Platform
        </h2>
        <p className="text-muted-foreground">
          Virtual consultations with real-time patient monitoring
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Call Interface */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Video Consultation
                </div>
                {isCallActive && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    {formatTime(callDuration)}
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                {/* Doctor's Video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-12 h-12" />
                    </div>
                    <p className="text-lg font-medium">Dr. Michael Chen</p>
                    <p className="text-sm opacity-75">Cardiologist</p>
                  </div>
                </div>

                {/* Patient's Video (Picture-in-Picture) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isCallActive ? 1 : 0 }}
                  className="absolute top-4 right-4 w-32 h-24 bg-gray-700 rounded-lg overflow-hidden"
                >
                  <div className="flex items-center justify-center h-full text-white">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <User className="w-4 h-4" />
                      </div>
                      <p className="text-xs">{patient.name}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Call Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMicOn(!isMicOn)}
                      className={`rounded-full p-2 ${
                        isMicOn
                          ? "text-white hover:bg-white/20"
                          : "text-red-500 bg-red-500/20"
                      }`}
                    >
                      {isMicOn ? (
                        <Mic className="w-4 h-4" />
                      ) : (
                        <MicOff className="w-4 h-4" />
                      )}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsVideoOn(!isVideoOn)}
                      className={`rounded-full p-2 ${
                        isVideoOn
                          ? "text-white hover:bg-white/20"
                          : "text-red-500 bg-red-500/20"
                      }`}
                    >
                      {isVideoOn ? (
                        <Video className="w-4 h-4" />
                      ) : (
                        <VideoOff className="w-4 h-4" />
                      )}
                    </Button>

                    {!isCallActive ? (
                      <Button
                        onClick={startCall}
                        className="rounded-full p-2 bg-green-500 hover:bg-green-600 text-white"
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        onClick={endCall}
                        className="rounded-full p-2 bg-red-500 hover:bg-red-600 text-white"
                      >
                        <PhoneOff className="w-4 h-4" />
                      </Button>
                    )}

                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full p-2 text-white hover:bg-white/20"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Connection Status */}
                <AnimatePresence>
                  {isCallActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1"
                    >
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Connected
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patient Information & Vitals */}
        <div className="space-y-6">
          {/* Patient Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Patient Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-lg">{patient.name}</p>
                <p className="text-sm text-muted-foreground">
                  Age: {patient.age}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Condition</p>
                <p className="text-sm text-muted-foreground">
                  {patient.condition}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Last Visit</p>
                <p className="text-sm text-muted-foreground">
                  {patient.lastVisit}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <FileText className="w-4 h-4 mr-2" />
                  Records
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Vitals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Real-time Vitals
                {isCallActive && (
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div
                className="space-y-3"
                animate={isCallActive ? { opacity: 1 } : { opacity: 0.5 }}
              >
                {/* Heart Rate */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Heart
                      className={`w-4 h-4 ${getVitalStatus(
                        "heartRate",
                        vitals.heartRate
                      )}`}
                    />
                    <span className="text-sm font-medium">Heart Rate</span>
                  </div>
                  <span
                    className={`font-bold ${getVitalStatus(
                      "heartRate",
                      vitals.heartRate
                    )}`}
                  >
                    {vitals.heartRate} BPM
                  </span>
                </div>

                {/* Blood Pressure */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Blood Pressure</span>
                  </div>
                  <span className="font-bold text-blue-500">
                    {vitals.bloodPressure}
                  </span>
                </div>

                {/* Temperature */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Thermometer
                      className={`w-4 h-4 ${getVitalStatus(
                        "temperature",
                        vitals.temperature
                      )}`}
                    />
                    <span className="text-sm font-medium">Temperature</span>
                  </div>
                  <span
                    className={`font-bold ${getVitalStatus(
                      "temperature",
                      vitals.temperature
                    )}`}
                  >
                    {vitals.temperature.toFixed(1)}°F
                  </span>
                </div>

                {/* Oxygen Saturation */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Activity
                      className={`w-4 h-4 ${getVitalStatus(
                        "oxygenSaturation",
                        vitals.oxygenSaturation
                      )}`}
                    />
                    <span className="text-sm font-medium">O2 Saturation</span>
                  </div>
                  <span
                    className={`font-bold ${getVitalStatus(
                      "oxygenSaturation",
                      vitals.oxygenSaturation
                    )}`}
                  >
                    {vitals.oxygenSaturation}%
                  </span>
                </div>
              </motion.div>

              {!isCallActive && (
                <p className="text-xs text-muted-foreground text-center">
                  Start call to view live vitals
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileText, label: "Prescribe", color: "text-blue-500" },
              { icon: Calendar, label: "Follow-up", color: "text-green-500" },
              { icon: Camera, label: "Capture", color: "text-purple-500" },
              { icon: Monitor, label: "Monitor", color: "text-orange-500" },
            ].map((action, index) => (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <action.icon className={`w-6 h-6 ${action.color}`} />
                <span className="text-sm font-medium">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
