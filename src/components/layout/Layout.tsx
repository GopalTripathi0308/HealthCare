import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 pb-20 pt-16 md:pt-20 md:pb-12">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;