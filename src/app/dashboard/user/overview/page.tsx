import axios from "axios";
import { useEffect, useState } from "react";
import { BsBookmarkCheck, BsCartCheck, BsHouseCheck, BsNewspaper, BsPersonCheck, BsPhoneVibrate, BsPinMap } from "react-icons/bs";

export default function Overview({ session }: any) {
    const [ordersCount, setOrdersCount] = useState(0);
    const [bookingsCount, setBookingsCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    // const [loading, setLoading] = useState(true);

    const userEmail = session?.user?.email;

    useEffect(() => {
        if (!userEmail) return;

        const fetchData = async () => {
            try {
                const [ordersResponse, bookingsResponse, wishlistResponse] = await Promise.all([
                    axios.get(`/api/orders?email=${userEmail}`),
                    axios.get(`/api/supplierBookings?email=${userEmail}`),
                    axios.get(`/api/wishlists?email=${userEmail}`),
                ]);

                setOrdersCount(ordersResponse.data.length);
                setBookingsCount(bookingsResponse.data.length);
                setWishlistCount(wishlistResponse.data.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, [userEmail]);

    // if (loading) {
    //     return <div className="text-center">Loading...</div>;
    // }

    return (
        <div className="max-w-full mx-auto p-6 bg-gray-50 mt-6  border border-slate-300 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">User Dashboard Overview</h1>

            <div className="grid grid-cols-3 mb-6 md:grid-cols-3 gap-6">
                {/* Orders Count */}
                <div className="p-4 bg-black flex  justify-between text-white border rounded-lg shadow">
                    <div className="flex flex-col gap-3 items-start justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Orders
                        </h2>
                        <p className="text-2xl mx-3 font-bold text-gray-900 ">{ordersCount}</p>
                    </div>
                    <BsCartCheck className="inline-block self-center mx-3 size-12 text-green-600" />
                </div>


                {/* Bookings Count */}
                <div className="p-4 bg-black flex  justify-between text-white border rounded-lg shadow">
                    <div className="flex flex-col gap-3 items-start justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Bookings
                        </h2>
                        <p className="text-2xl mx-3 font-bold text-gray-900 ">{bookingsCount}</p>
                    </div>
                    <BsHouseCheck className="inline-block self-center mx-3 size-12 text-purple-500" />
                </div>

                {/* Wishlist Count */}
                <div className="p-4 bg-black flex  justify-between text-white border rounded-lg shadow">
                    <div className="flex flex-col gap-3 items-start justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Wishlist
                        </h2>
                        <p className="text-2xl mx-3 font-bold text-gray-900 ">{wishlistCount}</p>
                    </div>
                    <BsBookmarkCheck className="inline-block self-center mx-3 size-12 text-yellow-500" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {/* Edit Profile */}
                <div className="p-4 bg-white border flex justify-between rounded-lg shadow">

                    <div className="flex flex-col gap-2">
                        <a
                            href="/profile/edit"
                            className="text-blue-500 hover:underline font-semibold"
                        >

                            Edit Profile Details
                        </a>
                        <a
                            href="/profile/location"
                            className="text-blue-500 hover:underline font-semibold"
                        >

                            Favorites List
                        </a>
                        <a
                            href="/profile/location"
                            className="text-blue-500 hover:underline font-semibold"
                        >

                            Saved Products
                        </a>

                    </div>
                    <h2 className="text-lg flex flex-col  items-end py-3 justify-between  font-semibold text-gray-700">
                        <BsPersonCheck className="inline-block mr-3 size-6" />
                        Profile Settings</h2>
                </div>

                {/* Edit Location */}
                <div className="p-4 bg-white border flex justify-between rounded-lg shadow">
                    <div className="flex flex-col gap-2">
                        <a
                            href="/profile/location"
                            className="text-blue-500 hover:underline font-semibold"
                        >

                            Update Location Details
                        </a>
                        <a
                            href="/profile/location"
                            className="text-blue-500 hover:underline font-semibold"
                        >

                            Update Primary Location
                        </a>
                        <a
                            href="/profile/location"
                            className="text-blue-500 hover:underline font-semibold"
                        >

                            Add Secondary Location
                        </a>
                    </div>
                    <h2 className="text-lg flex flex-col py-3 items-end justify-between  font-semibold text-gray-700">
                        <BsPinMap className="inline-block mr-3 size-6" />
                        Update Location Details</h2>
                </div>


                {/* Contact Details */}
                <div className="p-4 bg-white border  rounded-lg shadow md:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-700 flex items-center justify-start gap-3 ">
                        <BsPhoneVibrate className="inline-block" />
                        Contact Us</h2>
                    <hr className=" my-3" />
                    <p className="text-gray-600">Phone: +1 (234) 567-890</p>
                    <p className="text-gray-600">Email: support@laroucci.com</p>
                    <p className="text-gray-600">Address: 1234 Mining Street, Nairobi, Kenya</p>
                </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-white border rounded-lg shadow">
                <h2 className="text-lg font-semibold text-gray-700  flex items-center justify-start gap-3 ">
                    <BsNewspaper className="inline-block" />
                    Offers & Newsletters</h2>
                <hr className=" my-3" />
                <p className="text-gray-600">
                    Keep track of your activities and stay updated with the latest offers and
                    updates from our store.
                </p>
            </div>
        </div>
    );
}
