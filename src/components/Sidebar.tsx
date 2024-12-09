import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, BarChart2, User, Lock, Settings } from 'lucide-react';
import { SidebarItem } from '../types';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const sidebarItems: SidebarItem[] = [
    { icon: <Home size={20} />, label: 'Main Dashboard', path: '/dashboard' },
    { icon: <ShoppingCart size={20} />, label: 'NFT Marketplace', path: '/marketplace' },
    { icon: <BarChart2 size={20} />, label: 'Data Tables', path: '/tables' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    { icon: <Lock size={20} />, label: 'Sign In', path: '/signin' },
    { icon: <Settings size={20} />, label: 'RTL Admin', path: '/rtl' },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold">HORIZON FREE</h1>
      </div>
      <nav className="mt-6">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 ${
              location.pathname === item.path ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;