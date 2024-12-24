import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AddProductForm from './forms/AddProductFrm';

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  stock: number;
  description: string;
}
interface Products {
  id: number;
  name: string;
  price: string;
  stock: number;
  category: string;
  image: string;
}
interface ProductsTableProps {
  products: Products[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  stock,
  description,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="mb-4 size-32 rounded-full object-cover"
        />
        <h2 className="mb-2 text-lg font-bold">{name}</h2>
        <p className="text-gray-500 mb-4 text-center text-sm">{description}</p>
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-blue-500">${price}</p>
          <p
            className={`text-sm font-semibold ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}
          >
            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
          </p>
        </div>
      </div>
    </div>
  );
};

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
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Stock</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={`border-b ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-gray-100 transition`}
            >
              <td className="text-gray-900 px-6 py-4">{product.id}</td>
              <td className="px-6 py-4 font-medium">{product.name}</td>
              <td className="px-6 py-4 font-semibold text-blue-600">
                ${product.price}
              </td>
              <td
                className={`px-6 py-4 ${
                  product.stock > 0 ? 'text-green-600' : 'text-red-600'
                } font-semibold`}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : 'Out of stock'}
              </td>
              <td className="text-gray-700 px-6 py-4">{product.category}</td>
              <td className="text-gray-700 px-6 py-4">
                <Image
                  src={product.image}
                  alt={product.name}
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
      name: product.productName,
      price: product.price,
      stock: product.stock,
      category: product.material,
      image: product.coverImage,
      description: product.description,
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
      const allproducts = await fetchProducts();
      setProducts(allproducts);
      setIsLoading(false);
    };

    loadproducts();
  }, []);

  const handleEdit = (id: number) => {
    console.log(`Edit product with ID: ${id}`);
    // Navigate to edit product page or open a modal
  };

  const handleDelete = (id: number) => {
    console.log(`Delete product with ID: ${id}`);
    // Add logic to delete the product
  };
  // handle add product
  const handleAddProduct = (product: {
    name: string;
    price: number;
    stock: number;
    category: string;
    image: string;
  }) => {
    console.log('New Product:', product);
    setIsModalOpen(false); // Close modal after submitting
    // Add logic to update the products list or send data to the backend
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <section className="p-6">
        <div className="flex items-center justify-between">
          <h1 className="mb-6 text-2xl font-bold">Products</h1>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
            <div className="w-full max-w-3xl  rounded-lg bg-white shadow-lg">
              <div className="flex items-center justify-between border-b p-2 px-4">
                <h2 className="text-xl font-bold">Add Product</h2>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-600 hover:text-gray-900 pr-2 text-4xl font-bold text-blue-500"
                >
                  &times;
                </button>
              </div>
              <div className=" mx-auto p-6">
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
