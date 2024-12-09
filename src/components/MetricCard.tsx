import React from 'react';
import { DashboardMetric } from '../types';

const MetricCard: React.FC<DashboardMetric> = ({ title, value, icon }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold mt-1">{value}</p>
      </div>
      <div className="text-indigo-600">{icon}</div>
    </div>
  </div>
);

export default MetricCard;