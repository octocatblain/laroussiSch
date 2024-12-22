import axios from "axios";
import { useEffect, useState } from "react";

const StorageBookingForm: React.FC = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch storage locations
    useEffect(() => {
        async function fetchStorageLocations() {
            try {
                const response = await axios.get('/api/storageLocations');
                setLocations(response.data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchStorageLocations();
    }, []);

    // Form state management
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        zipCity: "",
        storageLocation: "",
        message: "",
        idFile: null as File | null,
    });


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prevData: any) => ({ ...prevData, idFile: e.target.files[0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare the data for submission
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("dateOfBirth", formData.dob);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("zipCodeCity", formData.zipCity);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("storageLocationId", formData.storageLocation); // Assuming this is the location's ID
        if (formData.idFile) {
            formDataToSend.append("idFile", formData.idFile); // Attach the file
        }

        try {
            const response = await axios.post("/api/storageBookings", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data", // Required for file uploads
                },
            });
            console.log("Booking successful:", response.data);
            // Handle success (e.g., show a success message, clear the form, etc.)
            alert("Booking successful!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                dob: "",
                address: "",
                zipCity: "",
                storageLocation: "",
                message: "",
                idFile: null,
            });
            setError(null);
        } catch (err: any) {
            const errorMessage =
                err.response?.data?.message || "Failed to submit the booking form.";
            setError(errorMessage);
            console.error("Error submitting form:", err);
        }
    };
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-full mx-auto">
            <h1 className="text-2xl font-bold mb-4 ">Book a Storage Location</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 items-center">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="dob">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">
                        Street, Apt. No.
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="zipCity">
                        ZIP Code, City
                    </label>
                    <input
                        type="text"
                        id="zipCity"
                        name="zipCity"
                        value={formData.zipCity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="storageLocation">
                        Storage Location
                    </label>
                    {loading && <p>Loading locations...</p>}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {!loading && !error && (
                        <select
                            id="storageLocation"
                            name="storageLocation"
                            value={formData.storageLocation}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                            required
                        >
                            <option value="">Choose a location</option>
                            {locations.map((location: any) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}, {location.address}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="idFile">
                        ID Document (Upload File)
                    </label>
                    <input
                        type="file"
                        id="idFile"
                        name="idFile"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default StorageBookingForm;
