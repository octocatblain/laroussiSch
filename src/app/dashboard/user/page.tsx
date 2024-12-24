'use client';

import { useSession } from "@/contexts/SessionContext";
import Image from "next/image";
import { useState } from "react";
import { BsPersonFillGear, BsPersonVcardFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { MdFormatListBulletedAdd, MdNotificationsActive } from "react-icons/md";
import { RiBubbleChartFill } from "react-icons/ri";
import AccountPage from "./account/page";
import StorageBookingForm from "./storage/page";
import { FaWarehouse } from "react-icons/fa";


interface MenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
  content: JSX.Element;
}

export default function UserHomePage() {
  const session = useSession();

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

    const menuItems: MenuItem[] = [
        {
            id: "overview",
            label: "Overview",
            icon: <RiBubbleChartFill />,
            content: <div className="p-6">Welcome to the Overview Dashboard!</div>,
        },
        {
            id: "notifications",
            label: "Notifications",
            icon: <MdNotificationsActive />,
            content: <div className="p-6">Here are your Products.</div>,
        },
        {
            id: "wishlist",
            label: "Wishlist",
            icon: <MdFormatListBulletedAdd />,
            content: <div className="p-6">Manage your Customers here.</div>,
        },
        {
            id: "orders",
            label: "Orders",
            icon: <FaCartShopping />,
            content: <div className="p-6">You have new Messages.</div>,
        },
        {
            id: "storage",
            label: "Storage",
            icon: <FaWarehouse/>,
            content: <StorageBookingForm/>,
        },
        {
            id: "account",
            label: "Account",
            icon: <BsPersonFillGear />,
            content: <AccountPage session={session} />,
        },
    ];

  return (
    <div className="flex h-screen">
      <Sidebar menuItems={menuItems} session={session} greeting={greeting} />
    </div>
  );
}

function Sidebar({ menuItems, session, greeting }: any) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0].id);

  const activeContent = menuItems.find(
    (item: any) => item.id === activeMenuItem,
  )?.content;

  return (
    <>
      <div
        className={`flex h-full flex-col bg-black text-white transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-56'
        }`}
      >
        <div className="border-gray-700 flex items-center justify-between border-b p-4">
          <button
            type='button'
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex flex-col justify-center text-white  focus:outline-none"
          >
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full border-2 border-yellow-500"
              />
            ) : (
              <BsPersonVcardFill className="size-12 self-center" />
            )}

            {!isCollapsed && (
              <p className="pt-3 text-sm font-semibold">
                {session?.user?.email}
              </p>
            )}
          </button>
        </div>

        <nav className="mt-4 flex flex-col">
          {menuItems.map((item: any) => (
            <button
              type='button'  
              key={item.id}
              className={`hover:bg-gray-700 flex rounded-r-lg p-4 ${
                activeMenuItem === item.id ? 'bg-gray-700' : ''
              } ${isCollapsed ? 'items-center justify-center' : '!items-center'}`}
              onClick={() => setActiveMenuItem(item.id)}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span className="ml-4">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
      <div className="bg-gray-100 flex-1 overflow-auto p-6">
        <div className="rounded-full border-y bg-white p-3 shadow-md ">
          <h1 className="text-gray-800 px-3 text-2xl font-semibold ">
            {greeting}, {session?.user?.name || 'Guest'}!
          </h1>
        </div>

        <div>{activeContent}</div>
      </div>
    </>
  );
}
