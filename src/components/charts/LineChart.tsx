import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'SEP', value1: 400, value2: 240 },
  { name: 'OCT', value1: 300, value2: 139 },
  { name: 'NOV', value1: 200, value2: 980 },
  { name: 'DEC', value1: 278, value2: 390 },
  { name: 'JAN', value1: 189, value2: 480 },
  { name: 'FEB', value1: 239, value2: 380 },
];

const LineChartComponent: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Monthly Overview</h3>
      <span className="text-sm text-green-500">+2.45%</span>
    </div>
    <RechartsLineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value1" stroke="#6366F1" strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="value2" stroke="#60A5FA" strokeWidth={2} dot={false} />
    </RechartsLineChart>
  </div>
);

export default LineChartComponent;