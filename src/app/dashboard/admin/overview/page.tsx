import React from 'react';
import { FaUser } from 'react-icons/fa';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
      <div className="summary-card w-full rounded-lg bg-slate-100 p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="summary-card-icon mb-4 size-12 self-center">{icon}</div>
        <div className="summary-card-content">
          <h3 className="text-lg font-medium mb-2 ">{title}</h3>
          <p className="text-2xl text-blue-200 font-bold">{value}</p>
        </div>
      </div>
  );
};

const OverviewPage: React.FC = () => {
  const summaryData = [
    {
      id: 'users',
      title: 'Users',
      value: 1200,
      icon: <FaUser />,
    },
    {
      id: 'sales',
      title: 'Sales',
      value: '$34,000',
      icon: <i className="fas fa-dollar-sign" />,
    },
    {
      id: 'orders',
      title: 'Orders',
      value: 320,
      icon: <i className="fas fa-shopping-cart" />,
    },
    {
      id: 'feedback',
      title: 'Feedback',
      value: 85,
      icon: <i className="fas fa-comments" />,
    },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 px-4">
      {summaryData.map((data) => (
        <SummaryCard
          key={data.id}
          title={data.title}
          value={data.value}
          icon={data.icon}
        />
      ))}
    </section>
  );
};

export default OverviewPage;
