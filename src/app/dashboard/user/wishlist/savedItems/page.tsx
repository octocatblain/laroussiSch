import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsRobot } from "react-icons/bs";

interface Product {
    id: string;
    slug: string;
    productName: string;
    coverImage: string;
    price: number;
}

interface SavedItem {
    id: string;
    createdAt: string;
    product: Product;
}

export default function SavedItemsList({ session }: any) {
    const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Get email from session
    const email = session?.user?.email;

    useEffect(() => {
        if (!email) {
            setError("User not authenticated");
            setLoading(false);
            return;
        }

        const fetchSavedItems = async () => {
            try {
                setLoading(true);
                // const response = await fetch(`/api/savedItems?email=${email}`);

                // console.log(response)
                // if (!response.ok) {
                //     throw new Error("Failed to fetch saved items");
                // }
                // const data = await response.json();

                // // Ensure data is an array
                // if (!Array.isArray(response.json)) {
                //     //return message if data is not an array
                //     return response.message;
                // }

                const response = await fetch(`/api/savedItems?email=${email}`);

                console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch saved items");
                }

                const data = await response.json();

                // Ensure data is an array
                if (!Array.isArray(data)) {
                    // Return a message if data is not an array
                    return { message: "You have no saved items." };
                }

                setSavedItems(data);
                // Proceed with handling the array data
                return data;
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSavedItems();
    }, [email]);

    const handleItemClick = (slug: string) => {
        router.push(`/products/${slug}`);
    };

    if (loading) {
        return <div className="text-center py-4">Loading saved items...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-4">Error: {error}</div>;
    }

    if (!Array.isArray(savedItems) || savedItems.length === 0) {
        return (
            <div className="flex gap-3 max-w-full justify-start items-center py-4">
                <BsRobot className="text-4xl text-gray-500" />
                <p className="text-gray-500 text-xl whitespace-nowrap">
                    No saved items found. Visit the&nbsp;
                    <a href="/products" className="text-blue-500 hover:underline">
                        Products page
                    </a>
                    .
                </p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-full mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Your Saved Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedItems.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => handleItemClick(item.product.slug)}
                    >
                        <Image
                            src={item.product.coverImage}
                            alt={item.product.productName}
                            className="w-full h-40 object-cover rounded"
                            width={320}
                            height={160}
                        />
                        <h2 className="mt-4 text-lg font-semibold">{item.product.productName}</h2>
                        <p className="text-gray-700 font-bold">Price: $ {item.product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
