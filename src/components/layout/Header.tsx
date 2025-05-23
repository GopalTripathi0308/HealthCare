import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            HealthHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/video-consultation">Video Consultation</NavLink>
            <NavLink to="/health-analysis">Health Analysis</NavLink>
            <NavLink to="/instant-help">Instant Help</NavLink>
            <Link 
              to="/profile" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white"
            >
              <User size={20} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <MobileNavLink to="/video-consultation">Video Consultation</MobileNavLink>
            <MobileNavLink to="/health-analysis">Health Analysis</MobileNavLink>
            <MobileNavLink to="/instant-help">Instant Help</MobileNavLink>
            <MobileNavLink to="/profile">Profile</MobileNavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

// NavLink components
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`relative py-2 transition-colors ${
        isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {children}
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
          layoutId="navbar-indicator"
        />
      )}
    </Link>
  );
};

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`py-3 border-b border-gray-100 ${
        isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;