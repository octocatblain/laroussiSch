import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    interface Product {
      id: string;
      name: string;
      image: string;
      price: string;
      stock: number;
      description: string;
    }
    
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
        fetch(`/api/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
        }
    }, [id]);

  if (!id || !product) return <p>Loading...</p>;

  return (
    <section className="p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-lg mb-6 lg:mb-0 lg:mr-6"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-blue-500 text-xl font-semibold mb-2">
              ${product.price}
            </p>
            <p
              className={`text-sm font-medium ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </p>
          </div>
        </div>
        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={() => router.push("/products")}
        >
          Back to Products
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
