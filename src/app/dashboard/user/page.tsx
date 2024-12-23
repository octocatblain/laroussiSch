"use client";

import { useSession } from "@/contexts/SessionContext";
import Image from "next/image";
import { useState } from "react";
import { BsGear, BsHouse, BsHouseAdd, BsPerson, BsPersonFillGear, BsPersonVcardFill } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdBookmark, MdFavorite, MdFormatListBulletedAdd, MdNotificationsActive } from "react-icons/md";
import { RiBubbleChartFill } from "react-icons/ri";
import AccountPage from "./account/page";
import OrdersPage from "./orders/page";
import Overview from "./overview/page";
import UserBookings from "./storage/bookings/page";
import StorageBookingForm from "./storage/page";


interface MenuItem {
    id: string;
    label: string;
    icon: JSX.Element;
    content?: JSX.Element; // Made optional by using `?`
    subMenu?: MenuItem[];  // `subMenu` is an array of `MenuItem` objects
}

export default function UserHomePage() {

    const session = useSession();

    const hour = new Date().getHours();
    const greeting =
        hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

    const menuItems: MenuItem[] = [
        {
            id: "overview",
            label: "Overview",
            icon: <RiBubbleChartFill />,
            content: <Overview/>,
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
            subMenu: [
                {
                    id: "favorite-products",
                    label: "Favorite Products",
                    icon: <MdFavorite />,
                    content: <div className="p-6">Here are your favorite products.</div>,
                },
                {
                    id: "saved-items",
                    label: "Saved Items",
                    icon: <MdBookmark />,
                    content: <div className="p-6">These are your saved items.</div>,
                },
            ],
        },
        {
            id: "orders",
            label: "Orders",
            icon: <FaCartShopping />,
            content: <OrdersPage/>,
        },
        {
            id: "storage",
            label: "Storage",
            icon: <FaWarehouse />,
           
            subMenu: [
                {
                    id: "book-storage",
                    label: "Book Storage",
                    icon: <BsHouseAdd />,
                    content: <StorageBookingForm />,
                },
                {
                    id: "my-storage",
                    label: "My Storage",
                    icon: <BsHouse />,
                    content: <UserBookings session={session} />,
                },
            ],
        },
        {
            id: "account",
            label: "Account",
            icon: <BsPersonFillGear />,
            subMenu: [
                {
                    id: "profile",
                    label: "Profile",
                    icon: <BsPerson />,
                    content: <AccountPage session={session} />,
                },
                {
                    id: "settings",
                    label: "Settings",
                    icon: <BsGear />,
                    content: <div className="p-6">Update your settings here.</div>,
                },
            ],
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
    const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]?.id || null);
    const [activeSubMenuItem, setActiveSubMenuItem] = useState<string | null>(null);
    const [expandedMenuItem, setExpandedMenuItem] = useState<string | null>(null); // Track expanded menu for submenus

    // Determine active content
    const activeContent = activeSubMenuItem
        ? menuItems
            .find((item: any) => item.id === activeMenuItem)
            ?.subMenu?.find((subItem: any) => subItem.id === activeSubMenuItem)?.content
        : menuItems.find((item: any) => item.id === activeMenuItem)?.content;

    return (
        <>
            <div
                className={`bg-black text-white h-full flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-56"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="text-white flex justify-center flex-col focus:outline-none"
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
                            <p className="text-sm pt-3 font-semibold">{session?.user?.email}</p>
                        )}
                    </button>
                </div>

                <nav className="flex flex-col mt-4">
                    {menuItems.map((item: any) => (
                        <div key={item.id} className="flex flex-col">
                            <button
                                className={`flex p-4 hover:bg-gray-700 rounded-r-lg ${activeMenuItem === item.id && !activeSubMenuItem
                                        ? "bg-gray-700"
                                        : ""
                                    } ${isCollapsed ? "justify-center items-center" : "!items-center"}`}
                                onClick={() => {
                                    if (item.content) {
                                        setActiveMenuItem(item.id);
                                        setActiveSubMenuItem(null);
                                        setExpandedMenuItem(null); // Collapse submenu if any
                                    } else {
                                        setExpandedMenuItem((prev) =>
                                            prev === item.id ? null : item.id
                                        );
                                    }
                                }}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {!isCollapsed && <span className="ml-4">{item.label}</span>}
                            </button>

                            {/* Render submenu if it exists */}
                            {item.subMenu &&
                                expandedMenuItem === item.id &&
                                !isCollapsed && (
                                    <div className="ml-8 mt-2">
                                        {item.subMenu.map((subItem: any) => (
                                            <button
                                                key={subItem.id}
                                                className={`flex p-3 text-sm hover:bg-gray-600 rounded-r-lg ${activeSubMenuItem === subItem.id
                                                        ? "bg-gray-600"
                                                        : ""
                                                    }`}
                                                onClick={() => {
                                                    setActiveMenuItem(item.id);
                                                    setActiveSubMenuItem(subItem.id);
                                                }}
                                            >
                                                <span className="text-lg">{subItem.icon}</span>
                                                <span className="ml-3">{subItem.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                        </div>
                    ))}
                </nav>
            </div>

            <div className="flex-1 bg-gray-100 p-6 overflow-auto">
                <div className="bg-white border-y shadow-md rounded-full p-3">
                    <h1 className="text-2xl px-3 font-semibold text-gray-800">
                        {greeting}, {session?.user?.name || "Guest"}!
                    </h1>
                </div>

                <div>{activeContent}</div>
            </div>
        </>
    );
}
