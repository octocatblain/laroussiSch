'use client';

import 'react-toastify/dist/ReactToastify.css';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaBox,
  FaChartLine,
  FaCog,
  FaEnvelope,
  FaHourglass,
  FaSignOutAlt,
  FaUser,
  FaUserAlt,
} from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';

import { useSession } from '@/contexts/SessionContext';

import OverviewPage from './overview/page';
import ProductPage from './products/page';
import CustomersPage from './customers/page';

interface MenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
  content: JSX.Element;
}
const menuItems: MenuItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: <FaChartLine />,
    content: <OverviewPage />,
  },
  {
    id: 'products',
    label: 'Products',
    icon: <FaBox />,
    content: <ProductPage />,
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: <FaUser />,
    content: <CustomersPage />,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <FaEnvelope />,
    content: <div className="p-6">You have new Messages.</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <FaCog />,
    content: <div className="p-6">Adjust your Settings here.</div>,
  },
];

const AdminPage = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0].id);

  const activeContent = menuItems.find(
    (item: any) => item.id === activeMenuItem,
  )?.content;

  return (
    <div>
      <ToastContainer />
      <header
        className={`top_menu z-50 ${isCollapsed ? 'ml-[160px]' : 'ml-[270px]'} block bg-teal-100 shadow-lg transition-all duration-200 ease-in-out`}
      >
        <div className="navbar_header m-0 flex max-w-[90%] items-center justify-between px-0 py-3">
          <div className="flex px-5">
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className=" block h-20 cursor-pointer border-0 px-3 text-2xl font-normal  "
            >
              <FaHourglass className=" inline-block text-center font-normal leading-tight  " />
            </button>
            <div className="page_title self-center p-2 md:block   ">
              <h4 className="title m-0 text-2xl text-slate-500">
                LaRoucci Mining SCH
              </h4>
            </div>
          </div>
          <div className="flex">
            <div className="dropdown relative inline-block">
              <button
                type="button"
                className="flex items-center gap-4 space-x-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className=" flex size-12 items-center justify-center rounded-full border bg-slate-400">
                  <span className="font-bold text-white">
                    {session?.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt="User Avatar"
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-yellow-500"
                      />
                    ) : (
                      <div className="size-7 rounded-full text-lg">
                        <FaUser className=" size-full" />
                      </div>
                    )}
                  </span>
                  {/* Placeholder Avatar */}
                </div>
                <span className="font-medium text-blue-600">
                  {session?.user?.name}
                </span>
              </button>
              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-7 rounded-lg border bg-white px-6 py-2 shadow-lg transition-all duration-500">
                  <div className="border-b p-4">
                    <h4 className="text-gray-800 font-medium">
                      {session?.user?.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {session?.user?.email}
                    </p>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="http://profile"
                        className="hover:bg-gray-100 clear-both flex w-full items-center gap-2 bg-transparent px-4 py-3 text-left font-medium text-slate-400"
                      >
                        <span className="material-icons text-gray-300 mr-2">
                          <FaUserAlt />
                        </span>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="htpps://logout"
                        className="hover:bg-gray-100 clear-both flex w-full items-center gap-2 bg-transparent px-4 py-3 text-left font-medium text-slate-400"
                      >
                        <span className="material-icons text-gray-300 mr-2">
                          <FaSignOutAlt />
                        </span>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div
        className={`vertical_menu fixed inset-y-0 z-[1000] min-h-dvh shadow-md ${isCollapsed ? 'w-[160px]' : 'w-[270px]'} bg-teal-100 shadow-lg transition-all duration-200 ease-in-out `}
      >
        <button
          type="button"
          className="btn btn-sm font-size-24 header-item waves-effect vertical-menu-btn absolute right-0 top-0 z-[2] px-3 "
        >
          <i className="bx" />
        </button>
        <div className="sidebar_menu_scroll z-10 mb-10 mt-[40px]">
          <div className="sidebar_mask">
            <div className="content_wrapper relative block size-full overflow-hidden">
              <div id="sidebar-menu pb-20 ">
                <ul className=" list-style-none m-0 p-0 ">
                  <li className="menu-title px-5 py-10 text-center text-lg font-semibold uppercase opacity-80">
                    DashBoard
                  </li>
                  {menuItems.map((item: any) => (
                    <li
                      className={`active block w-full py-4 ${activeMenuItem === item.id ? 'bg-slate-400' : ''} hover:bg-slate-400 `}
                      key={item.id}
                    >
                      <button
                        type="button"
                        className=" relative mx-5 block size-full text-pretty px-4 py-2 text-center text-base font-medium text-black text-opacity-50 transition-all hover:text-slate-50 "
                        onClick={() => setActiveMenuItem(item.id)}
                      >
                        <i className=" m-auto block size-5">{item.icon}</i>
                        {!isCollapsed && (
                          <span className="ml-0 leading-relaxed tracking-widest">
                            {item.label}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`main_content ${isCollapsed ? 'ml-[160px]' : 'ml-[270px]'} min-h-dvh`}
      >
        <div className="page px-6 py-12">
          <div className="container max-w-[90%] !px-0">
            <div className="">{activeContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminPage.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>; // No wrapper layout here
};

export default AdminPage;
