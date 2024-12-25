"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Booking {
    id: string;
    name: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: string | null;
    zipCodeCity: string | null;
    message: string | null;
    storageLocationId: string | null | any;
    idFile: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    // date: string;
    // time: string;
}

interface StorageLocation {
    id: string;
    name: string;  // Assuming the location has a name
}

interface UserBookingsProps {
    session: any;  // Define the session type as per your session structure
}

const UserBookings: React.FC<UserBookingsProps> = ({ session }) => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [storageLocations, setStorageLocations] = useState<StorageLocation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch bookings and storage locations data
    useEffect(() => {
        const fetchBookingsAndLocations = async () => {
            try {
                if (!session?.user?.email) {
                    throw new Error("User not authenticated or email not available.");
                }

                const userEmail = session.user.email;

                // Fetch bookings filtered by user email
                const bookingsResponse = await axios.get(`/api/storageBookings?email=${userEmail}`);
                setBookings(bookingsResponse.data);

                // Fetch storage locations
                const locationsResponse = await axios.get("/api/storageLocations");
                setStorageLocations(locationsResponse.data);
            } catch (err: any) {
                setError(err.message || "Error fetching data.");
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBookingsAndLocations();
    }, [session]);

    // Log bookings whenever they change
    useEffect(() => {
        console.log("Bookings updated:", bookings);
    }, [bookings]);

    // Delete a booking
    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this booking?")) {
            try {
                await axios.delete(`/api/storageBookings`, {
                    data: { id, email: session?.user?.email },
                });
                setBookings(bookings.filter((booking) => booking.id !== id));
            } catch (err) {
                console.error("Error deleting booking:", err);
            }
        }
    };

    // Format a date and time string
    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return `${formattedDate} at ${formattedTime}`;
    };

    // Find the location name by ID
    const getLocationNameById = (id: string) => {
        const location = storageLocations.find((location) => location.id === id);
        return location ? location.name : "Unknown Location";
    };

    if (loading) {
        return <div className="text-center p-4">Loading bookings...</div>;
    }

    if (error) {
        return <div className="text-center p-4 text-red-500">Error: {error}</div>;
    }
    
    // handle edit booking
    const handleEdit = (id: string) => {
        // Implement your edit logic here
        try {
            // Fetch the booking data by ID
            const booking = bookings.find((booking) => booking.id === id);
            if (!booking) {
                throw new Error("Booking not found.");
            }

            // Update the booking data
            console.log("Edit booking data:", booking);

            // Optionally, you can redirect to an edit page
            // router.push(`/edit-booking/${id}`);


        }catch (err) {
            console.error("Error editing booking:", err);
        }finally {
            // Optionally, you can redirect back to the bookings page
            // router.push("/bookings");
        }
        console.log("Edit booking with ID:", id);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Bookings</h1>
            {bookings.length === 0 ? (
                <div className="text-gray-600">No bookings found.</div>
            ) : (
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date & Time</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Location</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id} className="border-b">
                                <td className="py-3 px-4 text-gray-800">{formatDateTime(booking.createdAt)}</td>
                                <td className="py-3 px-4 text-gray-800">{getLocationNameById(booking.storageLocationId)}</td>
                                <td className="py-3 px-4 text-gray-800">{booking.status}</td>
                                <td className="py-3 px-4">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEdit(booking.id)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(booking.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};


export default UserBookings;

