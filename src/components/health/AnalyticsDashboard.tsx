"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  Activity,
  Users,
  TrendingUp,
  Heart,
  Brain,
  Stethoscope,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
  trend: "up" | "down";
}

const MetricCard = ({
  title,
  value,
  change,
  icon: Icon,
  color,
  trend,
}: MetricCardProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const targetValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = targetValue / 50;
      const counter = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setAnimatedValue(targetValue);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(counter);
    }, 200);

    return () => clearTimeout(timer);
  }, [targetValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="relative overflow-hidden group">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-5 group-hover:opacity-10 transition-opacity`}
        />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className={`h-4 w-4 text-${color.split("-")[1]}-500`} />
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {value.includes("%")
              ? `${animatedValue}%`
              : animatedValue.toLocaleString()}
          </div>
          <motion.p
            className={`text-xs ${
              trend === "up" ? "text-green-600" : "text-red-600"
            } flex items-center gap-1`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TrendingUp
              className={`h-3 w-3 ${trend === "down" ? "rotate-180" : ""}`}
            />
            {change} from last month
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isRealTime, setIsRealTime] = useState(false);

  // Sample data that updates in real-time
  const [patientData, setPatientData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patient Visits",
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
      },
    ],
  });

  const diagnosticsData = {
    labels: ["AI Diagnostics", "Manual Review", "Pending", "Completed"],
    datasets: [
      {
        data: [45, 25, 15, 15],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(139, 69, 19, 0.8)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const performanceData = {
    labels: ["Accuracy", "Speed", "Efficiency", "Satisfaction"],
    datasets: [
      {
        label: "Performance Metrics",
        data: [95, 88, 92, 96],
        backgroundColor: "rgba(139, 92, 246, 0.6)",
        borderColor: "rgba(139, 92, 246, 1)",
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    if (isRealTime) {
      const interval = setInterval(() => {
        setPatientData((prev) => ({
          ...prev,
          datasets: [
            {
              ...prev.datasets[0],
              data: prev.datasets[0].data.map((value) =>
                Math.max(0, value + Math.floor(Math.random() * 200 - 100))
              ),
            },
          ],
        }));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isRealTime]);

  const metrics = [
    {
      title: "Total Patients",
      value: "12,847",
      change: "+12.5%",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      trend: "up" as const,
    },
    {
      title: "AI Diagnoses",
      value: "3,247",
      change: "+18.2%",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      trend: "up" as const,
    },
    {
      title: "Success Rate",
      value: "96%",
      change: "+2.1%",
      icon: Activity,
      color: "from-green-500 to-emerald-500",
      trend: "up" as const,
    },
    {
      title: "Response Time",
      value: "1.2s",
      change: "-15.3%",
      icon: Heart,
      color: "from-red-500 to-orange-500",
      trend: "up" as const,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "diagnostics", label: "AI Diagnostics", icon: Brain },
    { id: "patients", label: "Patients", icon: Users },
    { id: "performance", label: "Performance", icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h2 className="text-3xl font-bold gradient-text">
            Healthcare Analytics
          </h2>
          <p className="text-muted-foreground">
            Real-time insights and performance metrics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant={isRealTime ? "default" : "outline"}
            onClick={() => setIsRealTime(!isRealTime)}
            className="flex items-center gap-2"
          >
            <div
              className={`w-2 h-2 rounded-full ${
                isRealTime ? "bg-green-500 animate-pulse" : "bg-gray-400"
              }`}
            />
            {isRealTime ? "Live Data" : "Static Data"}
          </Button>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Charts */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {activeTab === "overview" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Patient Visits Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Line
                    data={patientData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        y: { beginAtZero: true },
                      },
                    }}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Diagnostic Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Doughnut
                    data={diagnosticsData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { position: "bottom" },
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </>
          )}

          {activeTab === "performance" && (
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  System Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Bar
                  data={performanceData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      y: { beginAtZero: true, max: 100 },
                    },
                  }}
                />
              </CardContent>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Alert Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20">
          <CardContent className="flex items-center gap-3 pt-6">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-medium text-orange-800 dark:text-orange-200">
                System Alert
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-300">
                High patient volume detected. Consider scaling resources.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
