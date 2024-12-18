"use client";

import Image from "next/image";
import { useState } from "react";

export function Sidebar({ menuItems, session }: any) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`bg-black text-white h-full flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
                }`}
        >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-white focus:outline-none"
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
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
                    </div>
                    {/* {isCollapsed ? ">>" : "<<"} */}
                </button>
            </div>

            {/* Sidebar Menu */}
            <nav className="flex flex-col mt-4">
                {menuItems.map((item: any) => (
                    <button
                        key={item.id}
                        className="flex items-center p-4 hover:bg-gray-700 rounded-r-lg"
                    >
                        <span className="text-xl">{item.icon}</span>
                        {!isCollapsed && <span className="ml-4">{item.label}</span>}
                    </button>
                ))}
            </nav>
        </div>
    );
}
