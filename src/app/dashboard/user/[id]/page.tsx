import { options } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function UserPage() {
    const session = await getServerSession(options);

    return (
        <div className="container mx-auto px-4 py-6">
            {/* User Page Heading */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Page</h1>

            {/* User Details Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
                {/* User Information */}
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-700">
                        <span className="text-gray-500 font-medium">Name:</span> {session?.user?.name || "N/A"}
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                        <span className="text-gray-500 font-medium">Email:</span> {session?.user?.email || "N/A"}
                    </p>
                </div>

                {/* User Avatar */}
                <div className="flex-shrink-0">
                    <Image
                        src={session?.user?.image || "/default-image.png"}
                        alt="User Image"
                        width={100}
                        height={100}
                        className="h-24 w-24 object-cover rounded-full border-2 border-yellow-500"
                    />
                </div>
            </div>
        </div>
    );
}
