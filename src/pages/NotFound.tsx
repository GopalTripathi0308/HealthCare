import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-lg mx-auto text-center flex flex-col items-center justify-center min-h-[70vh]"
    >
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button>
          <Home size={18} className="mr-2" />
          Back to Home
        </Button>
      </Link>
    </motion.div>
  );
};

export default NotFound;