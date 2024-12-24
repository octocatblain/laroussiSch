// src/app/dashboard/user/account.js
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AccountPage({ session }: any) {
    const { register, handleSubmit, formState: { errors } }: any = useForm();
    const [profileImage, setProfileImage] = useState(session?.user?.image || "");
    const [isLoading, setIsLoading] = useState(false);
    const [imageError, setImageError] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [userData, setUserData] = useState<any>(session?.user);

    // fetch user details from the database using session.user.email or email from query parameters
    const fetchUserDetails = async () => {
        try {
            const email = session?.user?.email;

            // Prepare the API endpoint based on whether we have an email or not
            const apiUrl = email ? `/api/users?email=${email}` : '/api/users';

            // Fetch the user details
            const response = await axios.get(apiUrl);
            console.log("User details fetched:", response.data);
            setUserData(response.data.user);  // Update state with user data
        } catch (error) {
            console.error("Failed to fetch user details:", error);
        }
    };

    useEffect(() => {
        if (session?.user?.email) {
            fetchUserDetails();
        }
    }, [session]);

    // Upload profile image and associate with user account
    const uploadProfileImage = async () => {
        if (!selectedFile) return null;

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("/uploads/profilePictures", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Image upload response:", response.data);
            return response.data.filePath; // Return the file path after upload
        } catch (error) {
            setImageError("Failed to upload image. Please try again.");
            return null;
        }
    };

    // Form submission handler
    const onSubmit = async (data: any) => {
        setIsLoading(true);
        setImageError(null);

        try {
            let uploadedImagePath = profileImage;

            if (selectedFile) {
                const imagePath = await uploadProfileImage();
                if (imagePath) uploadedImagePath = imagePath;
            }

            await axios.put("/api/users", {
                ...data,
                profileImage: uploadedImagePath,
            });

            console.log("Account details updated:", data);

            setProfileImage(uploadedImagePath); // Update profile image state
            alert("Account details updated successfully!");
        } catch (error) {
            alert("Failed to update account details. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 container mx-auto">
            <h1 className="text-2xl font-bold mb-4">My Account</h1>
            {imageError && <p className="text-red-500 text-sm my-3 text-center">{imageError}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Profile Picture Section */}
                <div className="flex items-center space-x-4">
                    {profileImage ? (
                        <Image
                            src={profileImage}
                            alt="Profile Picture"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    ) : (
                        <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                    )}
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            onChange={(e: any) => setSelectedFile(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Account Information Section */}
                <div className="grid grid-cols-2 gap-2 items-center">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            defaultValue={userData?.name || ""}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            defaultValue={userData?.email || ""}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            {...register("username", { required: "Username is required" })}
                            defaultValue={userData?.username || ""}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>

                    {/* Change Password Section */}
                    <div>
                        <label className="block text-sm font-medium">New Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-1/2 py-2 px-4 rounded-md ${isLoading ? 'bg-gray-400' : 'bg-indigo-600'} text-white hover:bg-indigo-700`}
                    disabled={isLoading}
                >
                    {isLoading ? "Saving..." : "Save Changes"}
                </button>
            </form>
        </div>
    );
}
