/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

interface Product {
  id: string;
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
  category: string;
  stock: number;
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
          errors.name ? 'border-red-500' : 'border-gray-300'
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
          errors.price ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {errors.price && (
        <p className="mt-1 text-sm text-red-500">{errors.price}</p>
      )}
    </div>
  </div>
);

const Step2: React.FC<{ formData: any; handleChange: any }> = ({
  formData,
  handleChange,
}) => (
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
  </div>
);
const Step3: React.FC<{
  formData: any;
  handleChange: any;
  handleFileChange: any;
}> = ({ formData, handleChange, handleFileChange }) => (
  <div>
    <h2 className="mb-4 text-xl font-bold">Media</h2>
    <div className="mb-4">
      <label
        htmlFor="coverImage"
        className="text-gray-700 mb-2 block font-medium"
      >
        Cover Image URL
      </label>
      <input
        type="text"
        name="coverImage"
        id="coverImage"
        value={formData.coverImage}
        onChange={handleChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="shots" className="text-gray-700 mb-2 block font-medium">
        Upload Shots
      </label>
      <input
        type="file"
        name="shots"
        id="shots"
        multiple
        onChange={handleFileChange}
        className="w-full rounded-lg border px-4 py-2"
      />
    </div>
  </div>
);

const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Product>({
    id: '',
    slug: '',
    coverImage: '',
    productName: '',
    productType: '',
    availability: '',
    price: 0,
    refiner: '',
    material: '',
    fineness: '',
    fineWeight: '',
    dimensions: '',
    quality: '',
    category: '',
    stock: 0,
    packaging: '',
    kinebar: '',
    description: '',
    shots: [],
  });

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData({ ...formData, shots: filesArray });
    }
  };

  const validate = () => {
    const newErrors = { name: '', price: '', stock: '', category: '' };

    if (!formData.productName.trim())
      newErrors.name = 'Product name is required.';
    if (formData.price <= 0)
      newErrors.price = 'Price must be greater than zero.';
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(formData);
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
        <Step2 formData={formData} handleChange={handleChange} />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
        />
      )}

      <div
        className={`mt-6 flex ${currentStep === 1 ? 'w-full justify-end' : 'w-full justify-between'}`}
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
          <button
            type="button"
            onClick={nextStep}
            className="w-1/2 rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
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
