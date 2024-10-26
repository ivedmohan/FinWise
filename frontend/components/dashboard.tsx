// frontend/components/Dashboard.tsx
import React from 'react';
import { Card } from "./ui/card"; // Adjust import based on your setup
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Sample stock data
  const stocks = [
    { name: 'AAPL', price: '$150.00', change: '+1.5%' },
    { name: 'GOOGL', price: '$2800.00', change: '+2.3%' },
    { name: 'AMZN', price: '$3400.00', change: '+1.2%' },
    { name: 'TSLA', price: '$750.00', change: '-0.5%' },
  ];

  const data = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
    { name: 'Jul', revenue: 3490 },
    { name: 'Aug', revenue: 2900 },
    { name: 'Sep', revenue: 3500 },
    { name: 'Oct', revenue: 3800 },
    { name: 'Nov', revenue: 4200 },
    { name: 'Dec', revenue: 4600 },
  ];

  return (
    <div className="p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Total Revenue</h2>
          <p className="text-2xl">$45,231.89</p>
          <p className="text-sm text-gray-600">+20.1% from last month</p>
        </Card>
        <Card className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Subscriptions</h2>
          <p className="text-2xl">+2350</p>
          <p className="text-sm text-gray-600">+180.1% from last month</p>
        </Card>
        <Card className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Sales</h2>
          <p className="text-2xl">+12,234</p>
          <p className="text-sm text-gray-600">+19% from last month</p>
        </Card>
        <Card className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Active Now</h2>
          <p className="text-2xl">+573</p>
          <p className="text-sm text-gray-600">+201 since last hour</p>
        </Card>
      </div>
      
      {/* Stocks Overview Section */}
      <div className="mt-6">
        <h2 className="text-lg mb-4">Stocks Overview</h2>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <ul>
            {stocks.map((stock) => (
              <li key={stock.name} className="flex justify-between my-2">
                <span>{stock.name}</span>
                <span>{stock.price} <span className={`text-${stock.change.startsWith('+') ? 'green' : 'red'}-500`}>{stock.change}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overview Chart Section Removed */}
      <div className="mt-6">
        <h2 className="text-lg mb-4">Recent Sales</h2>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">You made 265 sales this month.</p>
          <ul>
            {[
              { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
              { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
              { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
              { name: 'William Kim', email: 'willkim@email.com', amount: '+$99.00' },
              { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
            ].map((sale) => (
              <li key={sale.email} className="flex justify-between my-2">
                <span>{sale.name} ({sale.email})</span>
                <span>{sale.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
