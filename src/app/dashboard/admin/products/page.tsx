import axios from 'axios';
import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AddProductForm from './forms/AddProductFrm';
import { FaSearch } from 'react-icons/fa';

// to be used later, do not remove
// interface ProductCardProps {
//   name: string;
//   image: string;
//   price: string;
//   stock: number;
//   description: string;
// }
interface Products {
  id: number;
  slug: string;
  coverImage: string;
  productName: string;
  productType: string;
  availability: string;
  price: number;
  refiner: string;
  material: string;
  fineness: string;
  fineWeight: string;
  dimensions: string;
  quality: string;
  packaging: string;
  kinebar: string;
  description: string;
  shots: [];
}
interface ProductsTableProps {
  products: Products[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

// const ProductCard: React.FC<ProductCardProps> = ({
//   name,
//   image,
//   price,
//   stock,
//   description,
// }) => {
//   return (
//     <div className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
//       <div className="flex flex-col items-center">
//         <Image
//           src={image}
//           alt={name}
//           width={150}
//           height={150}
//           className="mb-4 size-32 rounded-full object-cover"
//         />
//         <h2 className="mb-2 text-lg font-bold">{name}</h2>
//         <p className="text-gray-500 mb-4 text-center text-sm">{description}</p>
//         <div className="flex w-full items-center justify-between">
//           <p className="text-lg font-semibold text-blue-500">${price}</p>
//           <p
//             className={`text-sm font-semibold ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}
//           >
//             {stock > 0 ? `${stock} in stock` : 'Out of stock'}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProductTable: React.FC<ProductsTableProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg bg-white shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Availability</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Cover Image</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition`}
            >
              <td className="px-6 py-4 font-medium">{product.productName}</td>
              <td className="px-6 py-4 font-semibold text-blue-600">
                ${product.price}
              </td>
              <td className="px-6 py-4 font-medium text-teal-800">
                {product.availability}
              </td>
              <td className="text-teal-900 px-6 py-4">{product.material}</td>
              <td className="px-6 py-4">
                <Image
                  src={product?.coverImage}
                  alt={product?.productName}
                  height={40}
                  width={40}
                  className="mb-4 size-10 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  type="button"
                  className="mr-4 font-medium text-blue-500 hover:text-blue-600"
                  onClick={() => onEdit(product.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="font-medium text-red-500 hover:text-red-600"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const fetchProducts = async () => {
  try {
    const res = await axios.get('/api/products');
    return res.data.map((product: any) => ({
      id: product.id,
      productName: product.productName,
      price: product.price,
      stock: product.stock,
      material: product.material,
      coverImage: product.coverImage ? product.coverImage : '/images/placeholder.png',
      description: product.description,
      availability: product.availability,
    }));
  } catch (error) {
    toast.error('Error fetching products:', error);
    return [];
  }
};

const ProductPage: React.FC = async () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadproducts = async () => {
      try {
        setIsLoading(true);

        const allproducts = await fetchProducts();
        setProducts(allproducts);
        setIsLoading(false);

        return allproducts;

      } catch (error) {
        console.error("Error loading products:", error.message);
        toast.error("Failed to load products. Please try again.");
        
      } finally {
        setIsLoading(false);
      }
      
    };

    loadproducts();
  }, []);

  const handleEdit = async (id: number) => {
    setIsModalOpen(true);
    console.log(`Edit product with ID: ${id}`);
    // Navigate to edit product page or open a modal
  };

  const handleDelete = async (id: number) => {
    console.log(`Delete product with ID: ${id}`);
    // Add logic to delete the product
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        // Send a request to the backend to delete the product
        await axios.delete(`/api/products/`,{
          data: { id },
        });
        // Update the local state to remove the deleted product
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        // Provide feedback to the user
        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error.message);
        toast.error("Failed to delete product. Please try again.");
      }
    }
  };
  // handle add product
  const handleAddProduct = async (res:any) => {
    // setIsModalOpen(false); // Close modal after submitting
    // Add logic to update the products list or send data to the backend

    try {
      // Send the product to the backend
      // const response = await axios.post("/api/products", product);

      // Add the new product to the local state (if applicable)
      // setProducts((prevProducts) => [...prevProducts, response.data]);

      // Close the modal
      if (res.status === 201) {
        setIsModalOpen(false);
        toast.success("Product added successfully! on product page");
      }
      
    } catch (error) {
      console.error("Error adding product:", error.message);
      toast.error("Failed to add product. Please try again.");
    }
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <section className="p-6 relative">
        <div className="flex items-center justify-between">
          <h1 className="mb-6 text-2xl font-bold">Products</h1>
          <div className="end flex items-center gap-5">
            <div className="search relative min-w-96 ">
              <input
                type="text"
                placeholder="Search products"
                className="rounded-lg   w-full px-4 py-2 border border-gray-300"
              />
              <button className=" absolute right-0 h-full rounded-r-lg bg-blue-500 px-8 py-2 text-white">
                <FaSearch />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`/dashboard/admin/products/${product.id}`}
              key={product.id}
            >
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                stock={product.stock}
                description={product.description}
              />
            </Link>
          ))}
        </div> */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] min-h-full flex items-center justify-center bg-black/50">
            <div className="w-full max-w-4xl  rounded-lg bg-white shadow-lg">
              <div className="flex items-center justify-between border-b px-4">
                <h2 className="text-xl font-bold">Add Product</h2>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-600 hover:text-gray-900 pr-2 text-4xl font-bold text-blue-500"
                >
                  &times;
                </button>
              </div>
              <div className=" mx-auto px-6">
                <AddProductForm onSubmit={handleAddProduct} />
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="p-6">
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>
    </>
  );
};

export default ProductPage;
