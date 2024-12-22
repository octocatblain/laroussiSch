// src/app/dashboard/user/account.js
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AccountPage({ session }: any) {
    const { register, handleSubmit, reset, formState: { errors } }: any = useForm();
    const [profileImage, setProfileImage] = useState(session?.user?.image || "");
    const [isLoading, setIsLoading] = useState(false);
    const [imageError, setImageError] = useState<string | null>(null);

    // Upload profile image
    const handleProfileImageUpload = async (file: any) => {
        setIsLoading(true);
        setImageError(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            // Extract the image path (relative URL) from the server response
            const imagePath = response.data.imageUrl;

            // Update user profile with the image path
            await axios.put("/api/user", { profileImage: imagePath });

            setProfileImage(imagePath); // Update the profile image state
        } catch (error) {
            setImageError("Failed to upload image. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Form submission handler
    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            await axios.put("/api/user", {
                ...data,
                profileImage,
            });
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
                        <button className="bg-black text-sm rounded-lg text-gray-500 border px-2 py-3">Upload Picture</button>
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e: any) => handleProfileImageUpload(e.target.files[0])}
                        />
                    </label>
                </div>
                {imageError && <p className="text-red-500 text-sm">{imageError}</p>}

                {/* Account Information Section */}
                <div className="grid grid-cols-2 gap-2 items-center">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            defaultValue={session?.user?.name || ""}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            defaultValue={session?.user?.email || ""}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            {...register("username", { required: "Username is required" })}
                            defaultValue={session?.user?.email || ""}
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
