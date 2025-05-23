import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import FeatureCard from '../components/ui/FeatureCard';
import Button from '../components/ui/Button';

// Icons
import { Video, BarChart2, MessageCircle } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Video size={24} />,
    title: 'Video Consultation',
    description: "Book a doctor's appointment online and get a video consultation from home.",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: '/video-consultation',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    icon: <BarChart2 size={24} />,
    title: 'Health Analysis',
    description: "Check your day to day health analysis at one place.",
    image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: '/health-analysis',
    color: 'bg-green-500'
  },
  {
    id: 3,
    icon: <MessageCircle size={24} />,
    title: 'Get Instant Help',
    description: "You can ask anything to our Doctor bot and get your answers immediately.",
    image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: '/instant-help',
    color: 'bg-purple-500'
  }
];

const Home: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleFeatureSelect = (index: number) => {
    setActiveFeature(index);
  };

  const handleGetStarted = () => {
    navigate(features[activeFeature].path);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center"
    >
      <section className="w-full max-w-4xl mx-auto mt-4 md:mt-8">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Healthcare at Your Fingertips
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Experience seamless medical care with virtual consultations, health analytics, and AI-powered assistance.
          </motion.p>
        </div>

        <div className="relative w-full aspect-[9/16] max-w-sm mx-auto mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: index === activeFeature ? 1 : 0,
                scale: index === activeFeature ? 1 : 0.8,
                zIndex: index === activeFeature ? 20 : 10
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl"
              style={{ display: index === activeFeature ? 'block' : 'none' }}
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90 mb-4">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mb-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleFeatureSelect(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFeature ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto mt-16 md:mt-24 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Explore Our Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              onClick={() => navigate(feature.path)}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;