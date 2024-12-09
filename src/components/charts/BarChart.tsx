import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: '17', value: 400 },
  { name: '18', value: 300 },
  { name: '19', value: 200 },
  { name: '20', value: 278 },
  { name: '21', value: 189 },
  { name: '22', value: 239 },
  { name: '23', value: 349 },
  { name: '24', value: 269 },
  { name: '25', value: 349 },
];

const BarChartComponent: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold mb-4">Weekly Revenue</h3>
    <RechartsBarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#6366F1" />
    </RechartsBarChart>
  </div>
);

export default BarChartComponent;