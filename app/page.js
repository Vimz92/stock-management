"use client"
import Image from 'next/image';
import Header from './components/Header';
import { useState, useEffect } from 'react';

export default function Home() {
  const [productForm, setProductForm] = useState({});

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productForm)
      });

      if (response.ok) {

        console.log('Product added successfully');
      } else {
        console.log('Failed to add product');
      }
    } catch (error) {

      console.error('Error adding product:', error);
    }
  };

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const stockData = [
    { id: 1, name: 'Product 1', quantity: 10, price: 19.99 },
    { id: 2, name: 'Product 2', quantity: 5, price: 9.99 },
    { id: 3, name: 'Product 3', quantity: 8, price: 14.99 },
  ];

  return (
    <>
      <Header />

      <div className='container bg-red-50 mx-auto'>
        <h1 className='text-3xl font-bold'>Search a Product</h1>
        <input
          type='text'
          id='searchProduct'
          name='searchProduct'
          placeholder='Search a product...'
          className='mt-2 p-2 border border-gray-300 rounded-md w-full'
        />
        <h1 className='text-3xl font-bold'>Add a Product</h1>

        <form className='mt-4'>
          <div className='mb-4'>
            <label htmlFor='productName' className='block text-lg font-medium'>
              Product Slug
            </label>
            <input
              onChange={handleChange}
              type='text'
              id='productName'
              name='productName'
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='quantity' className='block text-lg font-medium'>
              Quantity
            </label>
            <input
              onChange={handleChange}
              type='number'
              id='quantity'
              name='quantity'
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='price' className='block text-lg font-medium'>
              Price
            </label>
            <input
              onChange={handleChange}
              type='number'
              step='0.01'
              id='price'
              name='price'
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            />
          </div>

          <button
            onClick={addProduct}
            type='submit'
            className='py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          >
            Add Product
          </button>
        </form>

        <h1 className='text-3xl font-bold mt-8'>Current Stock</h1>

        <table className='table-auto w-full'>
          <thead>
            <tr className='mx-auto'>
              <th className='px-4 py-2'>ID</th>
              <th className='px-4 py-2'>Product Name</th>
              <th className='px-4 py-2'>Quantity</th>
              <th className='px-4 py-2'>Price</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((product) => (
              <tr key={product.id}>
                <td className='border px-4 py-2'>{product.id}</td>
                <td className='border px-4 py-2'>{product.name}</td>
                <td className='border px-4 py-2'>{product.quantity}</td>
                <td className='border px-4 py-2'>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
