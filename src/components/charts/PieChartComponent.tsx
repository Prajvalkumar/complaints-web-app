import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const PieChartComponent: React.FC = () => {
  // Data for the pie chart
  const data = [
    { name: 'Your Files', value: 63 },
    { name: 'System', value: 25 },
    { name: 'Others', value: 12 },
  ];

  // Colors for each slice
  const COLORS = ['#4F46E5', '#22C55E', '#F43F5E'];

  return (
    <div className="w-full h-64">
      {/* Responsive container to handle dynamic sizing */}
      <ResponsiveContainer>
        <PieChart>
          {/* Pie chart definition */}
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/* Tooltip for interactivity */}
          <Tooltip />

          {/* Legend for mapping colors to labels */}
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
