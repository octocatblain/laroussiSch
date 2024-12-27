/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */

import useFetchOptions from '@/components/CommonParams';
import Button from '@/shared/Button/Button';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


interface Product {
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
  shots: File[];
}

interface AddProductFormProps {
  onSubmit: (product: Product) => void;
}

const Step1: React.FC<{
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errors: any;
}> = ({ formData, handleChange, errors }) => (
  <div>
    <h2 className="mb-4 text-xl font-bold">Basic Details</h2>
    {/* Product Name */}
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="productName"
      >
        Product Name
      </label>
      <input
        type="text"
        name="productName"
        id="productName"
        value={formData.productName}
        onChange={handleChange}
        className={`w-full rounded-lg border px-4 py-2 ${
          errors.name ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.name && (
        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
      )}
    </div>
    {/* Slug */}
    <div className="mb-4">
      <label className="text-gray-700 mb-2 block font-medium" htmlFor="slug">
        Slug
      </label>
      <input
        type="text"
        name="slug"
        id="slug"
        value={formData.slug}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    {/* Product Type */}
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="productType"
      >
        Product Type
      </label>
      <input
        type="text"
        name="productType"
        id="productType"
        value={formData.productType}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    {/* Material */}
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="material"
      >
        Material
      </label>
      <select
        name="material"
        id="material"
        value={formData.material}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      >
        <option value="">Select Material</option>
        <option value="Gold">Gold</option>
        <option value="Silver">Silver</option>
      </select>
    </div>
    {/* Price */}
    <div className="mb-4">
      <label className="text-gray-700 mb-2 block font-medium" htmlFor="price">
        Price
      </label>
      <input
        type="number"
        name="price"
        id="price"
        value={formData.price}
        onChange={handleChange}
        className={`w-full rounded-lg border px-4 py-2 ${
          errors.price ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.price && (
        <p className="mt-1 text-sm text-red-500">{errors.price}</p>
      )}
    </div>
    <div className="mb-4">
      <label className="text-gray-700 mb-2 block font-medium" htmlFor="quality">
        Quality
      </label>
      <input
        name="quality"
        id="quality"
        value={formData.quality}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="packaging"
      >
        Packaging
      </label>
      <input
        name="packaging"
        id="packaging"
        value={formData.packaging}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
  </div>
);

const Step2: React.FC<{
  formData: any;
  handleChange: any;
  options: any[];
  loading: boolean;
  error: string | null;
}> = ({ formData, handleChange, options, loading, error }) => (
  <div>
    <h2 className="mb-4 text-xl font-bold">Product Other Details</h2>
    {/* Availability */}
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="availability"
      >
        Availability
      </label>
      <select
        name="availability"
        id="availability"
        value={formData.availability}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      >
        <option value="">Select Availability</option>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
    </div>
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="dimensions"
      >
        Dimensions
      </label>
      <input
        name="dimensions"
        id="dimensions"
        value={formData.dimensions}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    
    <div className="mb-4">
      <label className="text-gray-700 mb-2 block font-medium" htmlFor="kinebar">
        Kinebar
      </label>
      <input
        name="kinebar"
        id="kinebar"
        value={formData.kinebar}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="fineWeight"
      >
        Fine Weight
      </label>
      <select
        name="fineWeight"
        id="fineWeight"
        value={formData.fineWeight}
        onChange={handleChange}
        disabled={loading}
        className="w-full rounded-lg border px-4 py-2"
      >
        {error ? (
          <option disabled>{error}</option>
        ) : (
          options.map((option) => (
            <option key={option.textId} value={option.textId}>
              {`${option.weight} ${option.unit}`}
            </option>
          ))
        )}
      </select>
    </div>
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="fineness"
      >
        Fineness
      </label>
      <input
        name="fineness"
        id="fineness"
        value={formData.fineness}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    {/* Refiner */}
    <div className="mb-4">
      <label className="text-gray-700 mb-2 block font-medium" htmlFor="refiner">
        Refiner
      </label>
      <input
        type="text"
        name="refiner"
        id="refiner"
        value={formData.refiner}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    <div className="mb-4">
      <label
        className="text-gray-700 mb-2 block font-medium"
        htmlFor="description"
      >
        Description
      </label>
      <textarea
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
  </div>
);
const Step3: React.FC<{
  formData: any;
  handleFileSelected: any;
  handleShotsFileChange: any;
  handleRemoveFile: any;
}> = ({
  formData,
  handleFileSelected,
  handleShotsFileChange,
  handleRemoveFile,
}) => (
  <div>
    <h2 className="mb-6 text-xl font-bold">Media</h2>
    <div className="my-4">
      <label
        htmlFor="coverImage"
        className="text-gray-700 mb-2 block font-medium"
      >
        Cover Image URL <i className=" text-xs italic">(*size limit 5 mb)</i>
      </label>
      <input
        type="file"
        name="coverImage"
        id="coverImage"
        accept="image/*,.jpg,.jpeg,.png,"
        onChange={handleFileSelected}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    <div className="my-6">
      <label htmlFor="shots" className="text-gray-700 mb-2 block font-medium">
        Upload Shots
      </label>
      <input
        type="file"
        name="shots"
        id="shots"
        accept=".jpg,.jpeg,.png,"
        multiple
        onChange={handleShotsFileChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    <div className="mt-4">
      {formData.shots.length > 0 && (
        <ul className="list-disc pl-5">
          {formData.shots.map((file, index) => (
            <li key={index} className="flex items-center justify-between">
              {file.name}
              <button
                type="button"
                onClick={() => handleRemoveFile(index)}
                className="ml-4 text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { options, loading, error } = useFetchOptions("/api/productWeights/");
  const [formData, setFormData] = useState<Product>({
    slug: "",
    coverImage: "",
    productName: "",
    productType: "",
    availability: "",
    price: 0,
    refiner: "",
    material: "",
    fineness: "",
    fineWeight: "",
    dimensions: "",
    quality: "",
    packaging: "",
    kinebar: "",
    description: "",
    shots: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" || name === "stock" ? parseFloat(value) : value,
    }));
  };
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Please select an image file.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        // 5MB limit
        toast.error("File size must not exceed 5MB.");
        return;
      }
      setSelectedFile(e.target.files[0]);
    }
  };
  const handleShotsFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = event.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        shots: [...prevData.shots, ...Array.from(files)], // Append new files
      }));
    }
  };
  const handleRemoveFile = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      shots: prevData.shots.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const newErrors = { name: "", price: "" };

    if (!formData.productName.trim()) {
      newErrors.name = "Product name is required.";
    }

    const parsedPrice = parseFloat(formData.price.toString());
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      newErrors.price = "Price must be greater than zero.";
    }
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill all the required fields");
    }
    if (currentStep !== 3) {
      return;
    }

    try {
      const fileData = new FormData();
      if (selectedFile) {
        fileData.append("file", selectedFile);
      }

      // shots
      formData.shots.forEach((file: any) => {
        fileData.append("shots", file);
      });
      const shotsupload = await fetch("/api/uploads/shots", {
        method: "POST",
        body: fileData,
      });
      const uploadedShots = await shotsupload.json();
      const uploadedShotsPath = uploadedShots.filePaths;

      const coverRes = await fetch("/api/uploads/coverImage", {
        method: "POST",
        body: fileData,
      });
      const uploadedCover = await coverRes.json();
      const uploadedFilepath = uploadedCover.filePath;

      const formDataSubmit = {
        ...formData,
        coverImage: uploadedFilepath,
        shots: uploadedShotsPath,
      };

      if (!uploadedCover || !uploadedFilepath) {
        toast.error("Please upload cover image and shots");
      }

      const res: any = await axios.post("/api/products", formDataSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res);
      if (res.status === 201) {
        toast.success("Product added successfully");
        onSubmit(res);

        // reset form data
        setFormData({
          slug: "",
          coverImage: "",
          productName: "",
          productType: "",
          availability: "",
          price: 0,
          refiner: "",
          material: "",
          fineness: "",
          fineWeight: "",
          dimensions: "",
          quality: "",
          packaging: "",
          kinebar: "",
          description: "",
          shots: [],
        });
        // Reset file input
        setSelectedFile(null);
        // Clear the file input
        (document.getElementById("coverImage") as HTMLInputElement).value = "";
      } else {
        toast.error("Something went wrong, please try again");
      }
    } catch (error) {
      console.error("Error adding product:", error.response.data.message);
      toast.error("Error: ", error.response.data.message);
    }
  };

  return (
    <form className="mx-auto rounded-lg bg-white p-6" onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          options={options}
          loading={loading}
          error={error}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          handleFileSelected={handleFileSelected}
          handleShotsFileChange={handleShotsFileChange}
          handleRemoveFile={handleRemoveFile}
        />
      )}

      <div
        className={`mt-6 flex ${currentStep === 1 ? "w-full justify-end" : "w-full justify-between"}`}
      >
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-300 rounded-lg px-4 py-2 transition-all ease-in-out hover:outline hover:outline-1"
          >
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <Button
            type="button"
            onClick={nextStep}
            className="w-1/2 rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Next
          </Button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-1/2 rounded-lg bg-green-500 px-4 py-2 text-white"
          >
            Add Product
          </button>
        )}
      </div>
    </form>
  );
};

export default AddProductForm;
