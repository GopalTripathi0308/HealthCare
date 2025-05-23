import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Video, BarChart2, MessageCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center flex-1 py-2 ${
        isActive ? 'text-blue-600' : 'text-gray-500'
      }`}
    >
      <div className="relative">
        {icon}
        {isActive && (
          <motion.div 
            className="absolute -bottom-1 left-1/2 w-5 h-1 bg-blue-600 rounded-full -translate-x-1/2"
            layoutId="nav-indicator"
          />
        )}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="flex items-center justify-around">
        <NavItem 
          to="/video-consultation" 
          icon={<Video size={20} />} 
          label="Consult"
          isActive={location.pathname === '/video-consultation'}
        />
        <NavItem 
          to="/health-analysis" 
          icon={<BarChart2 size={20} />} 
          label="Analysis"
          isActive={location.pathname === '/health-analysis'}
        />
        <NavItem 
          to="/instant-help" 
          icon={<MessageCircle size={20} />} 
          label="Chat"
          isActive={location.pathname === '/instant-help'}
        />
        <NavItem 
          to="/profile" 
          icon={<User size={20} />} 
          label="Profile"
          isActive={location.pathname === '/profile'}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;