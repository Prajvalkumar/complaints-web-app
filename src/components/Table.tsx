import React from 'react';
import { TableRow } from '../types';

const tableData: TableRow[] = [
  { name: 'Marketplace', progress: 75.5, quantity: 2458, date: 'Apr 26, 2022' },
  { name: 'Venus DB PRO', progress: 35.4, quantity: 1485, date: 'Jul 20, 2022' },
];

const Table: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Check Table</h3>
      <button className="text-gray-400 hover:text-gray-600">•••</button>
    </div>
    <table className="w-full">
      <thead>
        <tr className="text-left text-sm text-gray-500">
          <th className="pb-4">NAME</th>
          <th className="pb-4">PROGRESS</th>
          <th className="pb-4">QUANTITY</th>
          <th className="pb-4">DATE</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className="border-t">
            <td className="py-4">{row.name}</td>
            <td className="py-4">{row.progress}%</td>
            <td className="py-4">{row.quantity}</td>
            <td className="py-4">{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
