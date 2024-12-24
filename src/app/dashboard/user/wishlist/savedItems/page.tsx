import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";

interface Product {
    id: string;
    name: string;
    image: string;
    weight: string;
    price: string;
}

export default function SavedItemsList({session}:any) {
    const [savedItems, setSavedItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // get email from session
    const userEmail = session?.user?.email;

    useEffect(() => {
        const fetchSavedItems = async () => {
            try {
                const response = await fetch(`/api/savedItems?email=${userEmail}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch saved items");
                }
                const data = await response.json();
                setSavedItems(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSavedItems();
    }, []);

    // const handleItemClick = (id: string) => {



    //     return (
    //         <ProductCard product={} key={}/>
    //     )
    // };

    if (loading) {
        return <div className="text-center py-4">Loading saved items...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-4">Error: {error}</div>;
    }

    if (savedItems.length === 0) {
        return <div className="text-center py-4">No saved items found.</div>;
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Your Saved Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedItems.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => handleItemClick(item.id)}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
                        <p className="text-gray-500">Weight: {item.weight}</p>
                        <p className="text-gray-700 font-bold">Price: {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
