'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface Customers {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  username: string;
  location: string;
  orders: number;
  totalSpent: number;
}
const getCustomers = async () => {
  try {
    const res = await axios.get('/api/users');
    return res.data.users.map((customer: any) => ({
      id: customer.id,
      name: customer.name,
      username: customer.username,
      image: customer.image,
      email: customer.email,
      phone: customer.phone,
      location: customer.location,
      orders: customer.orders,
      totalSpent: customer.totalSpent,
    }));
  } catch (error) {
    toast.error('Error fetching customers:', error);
    return [];
  }
};

const CustomersPage: React.FC = async () => {
  const [customers, setCustomers] = useState<Customers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCustomers = async () => {
      const allCustomers = await getCustomers();
      setCustomers(allCustomers);
      setIsLoading(false);
    };
    loadCustomers();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6">
        <p>Loading customers...</p>
      </div>
    );
  }

  return (
    <div>
      <section className="p-6">
        <div className="pb-6">
          <h1 className="text-gray-800 text-2xl font-semibold ">Customers</h1>
          <p className="text-gray-500 mt-2">List of all customers</p>
        </div>
        <div className="mt-4">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-gray-500 px-4 py-2 text-left text-base  font-normal uppercase">
                    Cover Image
                  </th>
                  <th className="text-gray-500 px-4 py-2 text-left text-base  font-normal uppercase">
                    Name
                  </th>
                  <th className="text-gray-500 px-4 py-2 text-left text-base font-normal uppercase">
                    Email
                  </th>
                  <th className="text-gray-500 px-4 py-2 text-left text-base font-normal uppercase">
                    Phone
                  </th>
                  <th className="text-gray-500 px-4 py-2 text-left text-base font-normal uppercase">
                    Location
                  </th>
                  <th className="text-gray-500 px-4 py-2 text-left text-base font-normal uppercase">
                    Orders
                  </th>
                  <th className="text-gray-500 px-4 py-2 text-left text-base font-normal uppercase">
                    Total Spent
                  </th>
                  <th className="text-gray-500 px-4 py-2 text-left text-base font-normal uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td colSpan={7} className="py-4 text-center">
                      Loading customers...
                    </td>
                  </tr>
                )}
                {customers.length === 0 && !isLoading && (
                  <tr>
                    <td colSpan={7} className="py-4 text-center">
                      No customers found.
                    </td>
                  </tr>
                )}
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-black/20 hover:bg-gray"
                  >
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      <Image
                        src={customer.image}
                        alt={customer.name}
                        height={40}
                        width={40}
                        className="mb-4 size-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      {customer.name}
                    </td>
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      {customer.email}
                    </td>
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      {customer.phone}
                    </td>
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      {customer.location}
                    </td>
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      {customer.orders}
                      {customer.orders > 0 ? `${customer.orders}` : '0'}
                    </td>
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      {customer.totalSpent > 0
                        ? `$${customer.totalSpent}`
                        : '-'}
                    </td>
                    <td className="text-gray-800 px-4 py-3 text-sm font-normal">
                      <button type="button" className="text-blue-500">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-start gap-6">
          <button
            type="button"
            className="flex items-center gap-2 text-blue-600"
          >
            <FaAngleLeft />
            <span>Previous</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-blue-600"
          >
            <span>Next</span>
            <FaAngleRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomersPage;
