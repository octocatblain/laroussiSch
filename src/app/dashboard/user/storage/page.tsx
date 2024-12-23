import axios from "axios";
import { useEffect, useState } from "react";

const StorageBookingForm: React.FC = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [idFile, setIdFile] = useState<string>(""); // File path after upload
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // File selected by user

    useEffect(() => {
        async function fetchStorageLocations() {
            try {
                const response = await axios.get('/api/storageLocations');
                setLocations(response.data);
            } catch (err: any) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchStorageLocations();
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        zipCodeCity: "",
        storageLocationId: "",
        message: "",
        idFile: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedFile) {
            alert("Please select a file to upload before submitting the form.");
            return;
        }

        try {
            // Upload file
            const fileData = new FormData();
            fileData.append("file", selectedFile);

            const uploadResponse = await fetch("/api/uploads/ids", {
                method: "POST",
                body: fileData,
            });

            if (!uploadResponse.ok) {
                throw new Error("Failed to upload the file.");
            }

            const uploadResult = await uploadResponse.json();
            const uploadedFilePath = uploadResult.filePath;

            console.log("Uploaded file path:", uploadedFilePath);

            // Use the uploaded file path in the form data
            const formDataToSend = {
                ...formData,
                idFile: uploadedFilePath,
            };

            console.log("Form data to send:", formDataToSend); // Debugging form payload

            // Submit form data
            const response: any = await axios.post("/api/storageBookings", formDataToSend, {
                headers: { "Content-Type": "application/json" },
            });

            alert("Booking successful!");
            console.log("Booking response:", response.data);

            // Reset form and clear states
            setFormData({
                name: "",
                email: "",
                phone: "",
                dateOfBirth: "",
                address: "",
                zipCodeCity: "",
                storageLocationId: "",
                message: "",
                idFile: "",
            });
            setIdFile("");
            setSelectedFile(null);

            // Clear the file input
            (document.getElementById("idFile") as HTMLInputElement).value = "";
        } catch (err: any) {
            const errorMessage =
                err.response?.data?.message || "Failed to submit the booking form.";
            setError(errorMessage);
            console.error("Error submitting form:", err);
        }
    };


    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-full mx-auto">
            <h1 className="text-2xl font-bold mb-4">Book a Storage Location</h1>
            {error && <p className="text-red-500 text-center">Error: {error}</p>}
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
                    <label className="block text-sm font-medium mb-1" htmlFor="dateOfBirth">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
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
                    <label className="block text-sm font-medium mb-1" htmlFor="zipCodeCity">
                        ZIP Code, City
                    </label>
                    <input
                        type="text"
                        id="zipCodeCity"
                        name="zipCodeCity"
                        value={formData.zipCodeCity}
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

                    {!loading && (
                        <select
                            id="storageLocation"
                            name="storageLocationId"
                            value={formData.storageLocationId}
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

                <div className="mb-4">
                    <label
                        htmlFor="idFile"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        ID Document (Upload File)
                    </label>
                    <input
                        type="file"
                        id="idFile"
                        name="idFile"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileSelection}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"                    />
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



{/* <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-full mx-auto">
    <h1 className="text-2xl font-bold mb-4 ">Book a Storage Location</h1>
    {error && <p className="text-red-500 text-center">Error: {error}</p>}
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 items-center">
       
        <div className="mb-4">
            <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="idFile"
            >
                ID Document (Upload File)
            </label>
            <input
                type="file"
                id="idFile"
                name="idFile"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
            Submit
        </button>
    </form>
</div> */}