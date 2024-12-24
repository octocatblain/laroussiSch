"use client";

import ProductCard from "@/components/ProductCard";
import SidebarFilters from "@/components/SideBarFilter";
import SortBy from "@/components/SortBy";
import { useEffect, useState } from "react";
import SectionProductsHeader from "./SectionProductsHeader";

const ITEMS_PER_PAGE = 9; // Set the number of items per page

const Page = () => {
  const [products, setProducts] = useState<any[]>([]); // Initialize state for products
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch products on page load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Relative URL
        if (response.ok) {
          const data = await response.json();

          setProducts(data); // Set fetched products in state
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProducts();
  }, []);

  // Calculate the indices of the products to display on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Handler for changing pages
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-xl font-semibold">Loading...</span>
      </div>
    ); 
  }


  return (
    <div className="container mb-20">
      <div className="mb-10">
        <SectionProductsHeader />
      </div>
      <div className="relative flex flex-col lg:flex-row" id="body">
        <div className="pr-4 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters />
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <div className="mb-5 flex items-center justify-between">
            <SortBy />
            <span className="text-sm">{products.length} items</span>
          </div>
          <div className="grid flex-1 gap-10 sm:grid-cols-3 xl:grid-cols-3 2xl:gap-12 ">
            {currentItems.map((item) => (
              <ProductCard product={item} key={item.id} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-full ${currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
