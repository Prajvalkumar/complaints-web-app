import React from 'react';
import { CreditCard, ShoppingCart, BarChart2 } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import LineChartComponent from '../components/charts/LineChart';
import BarChartComponent from '../components/charts/BarChart';
import Table from '../components/Table';
import { DashboardMetric } from '../types';

const Dashboard: React.FC = () => {
  const metrics: DashboardMetric[] = [
    { title: 'Earnings', value: '$340.5', icon: <CreditCard size={20} /> },
    { title: 'Spend this month', value: '$642.39', icon: <ShoppingCart size={20} /> },
    { title: 'Sales', value: '$574.34', icon: <BarChart2 size={20} /> },
    { title: 'Your Balance', value: '$1,000', icon: <CreditCard size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pl-64">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Main Dashboard</h1>
            <p className="text-gray-500">Monitor your business metrics</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LineChartComponent />
          <BarChartComponent />
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Dashboard;