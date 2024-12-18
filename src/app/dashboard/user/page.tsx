"use client";

import { useSession } from "@/contexts/SessionContext";
import Image from "next/image";
import { useState } from "react";
import { FaBox, FaChartLine, FaCog, FaEnvelope, FaUser } from "react-icons/fa";

interface MenuItem {
    id: string;
    label: string;
    icon: JSX.Element;
    content: JSX.Element;
}

export default function UserHomePage() {

    const session = useSession() ;

    const hour = new Date().getHours();
    const greeting =
        hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

    const menuItems: MenuItem[] = [
        {
            id: "overview",
            label: "Overview",
            icon: <FaChartLine />,
            content: <div className="p-6">Welcome to the Overview Dashboard!</div>,
        },
        {
            id: "products",
            label: "Products",
            icon: <FaBox />,
            content: <div className="p-6">Here are your Products.</div>,
        },
        {
            id: "customers",
            label: "Customers",
            icon: <FaUser />,
            content: <div className="p-6">Manage your Customers here.</div>,
        },
        {
            id: "messages",
            label: "Messages",
            icon: <FaEnvelope />,
            content: <div className="p-6">You have new Messages.</div>,
        },
        {
            id: "settings",
            label: "Settings",
            icon: <FaCog />,
            content: <div className="p-6">Adjust your Settings here.</div>,
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

    const activeContent = menuItems.find((item:any) => item.id === activeMenuItem)?.content;

    return (
        <>
            <div
                className={`bg-black text-white h-full flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="text-white focus:outline-none"
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
                            <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                        )}
                    </button>
                </div>

                <nav className="flex flex-col mt-4">
                    {menuItems.map((item:any) => (
                        <button
                            key={item.id}
                            className={`flex items-center p-4 hover:bg-gray-700 rounded-r-lg ${activeMenuItem === item.id ? "bg-gray-700" : ""
                                }`}
                            onClick={() => setActiveMenuItem(item.id)}
                        >
                            <span className="text-xl">{item.icon}</span>
                            {!isCollapsed && <span className="ml-4">{item.label}</span>}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="flex-1 bg-gray-100 p-6 overflow-auto">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                        {greeting}, {session?.user?.name || "Guest"}!
                    </h1>
                    <p className="text-gray-600 italic mb-6">
                        {`"Your gateway to productivity - let's make today great!"`}
                    </p>
                    <div className="space-y-4">
                        <p className="text-lg font-semibold text-gray-700">
                            <span className="text-gray-500 font-medium">Name:</span>{" "}
                            {session?.user?.name || "N/A"}
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                            <span className="text-gray-500 font-medium">Email:</span>{" "}
                            {session?.user?.email || "N/A"}
                        </p>
                    </div>
                    <div>{activeContent}</div>
                </div>
            </div>
        </>
    );
}


