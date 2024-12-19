// pages/account.js
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AccountPage({ session }: any) {
    // const { data: session } = useSession();
    const { register, handleSubmit, reset }: any = useForm();
    const [profileImage, setProfileImage] = useState(session?.user?.image || "");

    // Upload profile image
    const handleProfileImageUpload = async (file: any) => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post("/api/upload", formData);
        setProfileImage(response.data.imageUrl);
    };

    // Form submission handler
    const onSubmit = async (data: any) => {
        await axios.put("/api/user", {
            ...data,
            profileImage,
        });
        alert("Account details updated successfully!");
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
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
                        <span className="text-sm text-gray-500">Upload New Profile Picture</span>
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e: any) => handleProfileImageUpload(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Account Information Section */}
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        defaultValue={session?.user?.name || ""}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        defaultValue={session?.user?.email || ""}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        type="text"
                        {...register("username")}
                        defaultValue={session?.user?.email || ""}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Change Password Section */}
                <div>
                    <label className="block text-sm font-medium">New Password</label>
                    <input
                        type="password"
                        {...register("password")}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
