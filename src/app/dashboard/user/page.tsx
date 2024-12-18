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
                className={`bg-black text-white h-full flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-56"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="text-white flex justify-center flex-col  focus:outline-none"
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

                        {!isCollapsed && (
                            <p className="text-sm pt-3 font-semibold">{session?.user?.email}</p>
                        )}

                    </button>
                </div>

                <nav className="flex flex-col mt-4">
                    {menuItems.map((item: any) => (
                        <button
                            key={item.id}
                            className={`flex p-4 hover:bg-gray-700 rounded-r-lg ${activeMenuItem === item.id ? "bg-gray-700" : ""
                                } ${isCollapsed ? "justify-center items-center" : "!items-center"}`}
                            onClick={() => setActiveMenuItem(item.id)}
                        >
                            <span className="text-xl">{item.icon}</span>
                            {!isCollapsed && <span className="ml-4">{item.label}</span>}
                        </button>
                    ))}
                </nav>

            </div>
            <div className="flex-1 bg-gray-100 p-6 overflow-auto">
                <div className="bg-white border-y shadow-md rounded-full p-3 ">
                    <h1 className="text-2xl px-3 font-semibold text-gray-800 ">
                        {greeting}, {session?.user?.name || "Guest"}!
                    </h1>
                </div>

                <div>{activeContent}</div>
            </div>
        </>
    );
}


