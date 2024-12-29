import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  ArcElement,
  Legend,
  plugins,
} from "chart.js";

ChartJS.register(BarElement,ArcElement,Legend ,CategoryScale, LinearScale, Tooltip);

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

interface RecentInvoices {
  id: number;
  invoiceId: string;
  customerId: number;
  Customer: string;
  CustomerAddress: string;
  Date: string;
  PaymentMethod: string;
  Status: string;
  Amount: number;
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
const TotalSalesBar: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Sales',
        data: [1000, 2000, 3000, 4000, 5000, 6000],
        backgroundColor: '#2563EB',
        barThickness: 10,
        borderRadius: 10,
      },
      {
        label: 'Total Orders',
        data: [200, 300, 400, 500, 600, 5000],
        backgroundColor: '#10B981',
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      padding: 10,
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context:any) => `$ ${context.raw.toLocaleString()}`,
        },
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Total Sales Report",
          display: true,
          color: "#000",
          font: {
            size: 16,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: true,
        title: {
          display: false,
          text: "Amount",
          color: "#000",
          font: {
            size: 16,
          },
        },
      },
      x: {
        display: true,
        title: {
          display: true,
          text: "Last 6 Months",
          color: "#000",
          font: {
            size: 16,
          },
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        barPercentage: 0.5,
        categoryPercentage: 1.0,
      },
    },
  };

  return <Bar data={data} options={options} />;

};

const TotalSalesCircle: React.FC = () => {
  const data = {
    backgroudColor: [
      "rgba(2, 88, 255, 1)",
      "rgba(249, 151, 0, 1)",
      "rgba(32, 214, 152, 1)",
    ],
    labels: ["Gold", "Bronze", "Silver",],
    datasets:[
      {
        label: "Total Sales",
        data: [1000, 2000, 3000],
        backgroundColor: [
          "rgba(2, 88, 255, 1)",
          "rgba(249, 151, 0, 1)",
          "rgba(32, 214, 152, 1)",
        ],  
        hoverOffset: 4,
        borderWidth: 0,
      }
    ],
  };

  const options = {
    responsive: true,
    elements: {
      arc: {
        weight: 1,
        borderWidth: 0,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context:any) => `${context.label}: ${context.raw.toLocaleString()}`,
        },
        titleColor: "#fff",
        bodyColor: "#fff",
        backgroudColor: "#000",
      },
      position: "bottom",
    },
    cutout: "70%",
  };

  return <Doughnut data={data} height={300} options={options} />;
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

  const RecentInvoices: RecentInvoices[] = [
    {
      id: 1,
      invoiceId: "INV-001",
      customerId: 23232,
      Customer: "John Doe",
      CustomerAddress: "90 Kutch Green",
      Date: "12-08-2021",
      PaymentMethod: "Paypal",
      Status: "Complete",
      Amount: 120,
    },
    {
      id: 2,
      invoiceId: "INV-002",
      customerId: 23233,
      Customer: "Jane Doe",
      CustomerAddress: "90 Kutch Green",
      Date: "12-08-2021",
      PaymentMethod: "Paypal",
      Status: "Complete",
      Amount: 120,
    },
    {
      id: 3,
      invoiceId: "INV-003",
      customerId: 23234,
      Customer: "John Doe",
      CustomerAddress: "90 Kutch Green",
      Date: "12-08-2021",
      PaymentMethod: "Paypal",
      Status: "Complete",
      Amount: 120,
    },
    {
      id: 4,
      invoiceId: "INV-004",
      customerId: 23235,
      Customer: "John Doe",
      CustomerAddress: "90 Kutch Green",
      Date: "12-08-2021",
      PaymentMethod: "Paypal",
      Status: "Complete",
      Amount: 120,
    },
  ];
  return (
    <div>
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
      <section className="gap-6 mb-6 px-4">
        <div className="flex justify-between gap-4 w-full py-6 px-2 ">
          <div className="sales h-full w-full bg-slate-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <TotalSalesBar />
          </div>
          <div className="chart flex w-full justify-between gap-2 bg-slate-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 ">
            <div className="content">
              <h3 className="text-lg text- font-bold my-4">
                Sales By Category
              </h3>
              <ul>
                <li className="sales">
                  <span className=" text-lg py-3 text-blue-500">Gold</span>
                  <p className="text-black/50 text-xs font-bold py-2">
                    Total Sales: $34,000
                  </p>
                </li>
                <li className="sales">
                  <span className=" text-lg py-3 text-yellow-500">Silver</span>
                  <p className="text-black/50 text-xs font-bold py-2">
                    Total Sales: $24,000
                  </p>
                </li>
                <li className="sales">
                  <span className=" text-lg py-3 text-green-500">Bronze</span>
                  <p className="text-black/50 text-xs  font-bold py-2">
                    Total Sales: $14,000
                  </p>
                </li>
              </ul>
            </div>
            <div className="chart relative">
              <TotalSalesCircle />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#4C6FFF",
                }}
              >
                $6.8K
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center px-4 mb-4 justify-between">
            <h3 className="text-base py-4 font-medium">Recent Invoices</h3>
            <div className="search relative min-w-96 ">
              <input
                type="text"
                placeholder="Search products"
                className="rounded-lg   w-full px-4 py-1 border border-gray-300"
              />
              <button className=" absolute right-0 h-full rounded-r-lg bg-blue-500 px-8 py-2 text-white">
                <FaSearch />
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-slate-500 text-base italic font-medium ">
                <th className="text-left font-light text-sm">NO</th>
                <th className="text-left  font-light text-sm">Customer ID</th>
                <th className="text-left  font-light text-sm">Invoice ID</th>
                <th className="text-left  font-light text-sm">Customer</th>
                <th className="text-left  font-light text-sm">
                  Customer Address
                </th>
                <th className="text-left  font-light text-sm">Date</th>
                <th className="text-left  font-light text-sm">
                  Payment Method
                </th>
                <th className="text-left  font-light text-sm">Status</th>
                <th className="text-left  font-light text-sm">Amount</th>
              </tr>
            </thead>
            <tbody>
              {RecentInvoices.map((sales) => (
                <tr
                  key={sales.id}
                  className="text-slate-500 text-base font-light my-5"
                >
                  <td className="font-light text-sm">{sales.id}</td>
                  <td className="font-light text-sm">#{sales.customerId}</td>
                  <td className="font-light text-sm">{sales.invoiceId}</td>
                  <td className="font-light text-sm">{sales.Customer}</td>
                  <td className="font-light text-sm">
                    {sales.CustomerAddress}
                  </td>
                  <td className="font-light text-sm">{sales.Date}</td>
                  <td className="font-light text-sm">{sales.PaymentMethod}</td>
                  <td className="font-light text-sm py-2 ">
                    <span
                      className={` py-1 rounded-lg px-4 text-white ${sales.Status === "Complete" ? " bg-green-400 " : " bg-red-500"}`}
                    >
                      {sales.Status}
                    </span>
                  </td>
                  <td className="font-light text-sm">$ {sales.Amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OverviewPage;
