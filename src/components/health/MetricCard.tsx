import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, MinusIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'same';
  trendValue: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  icon,
  trend,
  trendValue,
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-500" />;
      case 'down':
        return <TrendingDown size={16} className="text-red-500" />;
      case 'same':
        return <MinusIcon size={16} className="text-gray-400" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      case 'same':
        return 'text-gray-400';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-500 text-sm">{title}</span>
        {icon}
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold mr-1">{value}</span>
        <span className="text-gray-500 text-sm">{unit}</span>
      </div>
      <div className="flex items-center mt-2 text-sm">
        {getTrendIcon()}
        <span className={`ml-1 ${getTrendColor()}`}>{trendValue}</span>
      </div>
    </motion.div>
  );
};

export default MetricCard;