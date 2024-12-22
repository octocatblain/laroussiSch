import Link from "next/link";
import React from "react";

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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover rounded-full mb-4"
        />
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-500 text-sm text-center mb-4">{description}</p>
        <div className="flex justify-between items-center w-full">
          <p className="text-blue-500 text-lg font-semibold">${price}</p>
          <p
            className={`text-sm font-semibold ${stock > 0 ? "text-green-600" : "text-red-600"}`}
          >
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductTable:React.FC<ProductsTableProps> = ({products,onEdit,onDelete}) => {
   
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase text-left">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index} 
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-6 py-4 text-gray-900">{product.id}</td>
                <td className="px-6 py-4 font-medium">{product.name}</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">
                  ${product.price}
                </td>
                <td
                  className={`px-6 py-4 ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  } font-semibold`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </td>
                <td className="px-6 py-4 text-gray-700">{product.category}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="text-blue-500 hover:text-blue-600 font-medium mr-4"
                    onClick={() => onEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 font-medium"
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

const ProductPage: React.FC = ()=> {
  const products = [
    {
      id: "1",
      name: "Gold Bar",
      image: "https://via.placeholder.com/150",
      price: "1,800",
      stock: 20,
      description: "24K pure gold bar.",
    },
    {
      id: "2",
      name: "Silver Bar",
      image: "https://via.placeholder.com/150",
      price: "25",
      stock: 50,
      description: "999.9 fine silver bar.",
    },
    {
      id: "3",
      name: "Platinum Bar",
      image: "https://via.placeholder.com/150",
      price: "980",
      stock: 0,
      description: "High-quality platinum bar.",
    },
  ];
  const productslist = [
    {
      id: 1,
      name: "Gold Bar",
      price: "1,800",
      stock: 20,
      category: "Precious Metal",
    },
    {
      id: 2,
      name: "Silver Bar",
      price: "25",
      stock: 50,
      category: "Precious Metal",
    },
    {
      id: 3,
      name: "Platinum Bar",
      price: "980",
      stock: 0,
      category: "Precious Metal",
    },
    {
      id: 4,
      name: "Copper Bar",
      price: "5",
      stock: 120,
      category: "Base Metal",
    },
  ];

   const handleEdit = (id: number) => {
     console.log(`Edit product with ID: ${id}`);
     // Navigate to edit product page or open a modal
   };

   const handleDelete = (id: number) => {
     console.log(`Delete product with ID: ${id}`);
     // Add logic to delete the product
   };

  return (
    <>
        <section className="p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold mb-6">Products</h1>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Add Product
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                stock={product.stock}
                description={product.description}
              />
            </Link>
            ))}
          </div>
        </section>
        <section className="p-6">
            <ProductTable products={productslist} onEdit={handleEdit} onDelete={handleDelete} />        
        </section>
    </>
  );
}


export default ProductPage;
