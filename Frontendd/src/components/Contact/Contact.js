import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-8'>
      <h2 className='text-2xl font-bold text-center mb-8'>Contact Us</h2>
      {!isSubmitted ? (
        <form className='grid gap-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>Full Name:</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>

          <div>
            <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-700'>Phone Number:</label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>

          <div>
            <label htmlFor='serviceType' className='block text-sm font-medium text-gray-700'>Service Type:</label>
            <select
              id='serviceType'
              name='serviceType'
              value={formData.serviceType}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            >
              <option value=''>Select a service type</option>
              <option value='Grass Triming'>Grass Triming</option>
              <option value='Lawn mowing'>Lawn mowing</option>
              <option value='Soil treatment'>Soil treatment</option>
            </select>
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message:</label>
            <textarea
              id='message'
              name='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          >
            Submit
          </button>
        </form>
      ) : (
        <div className='bg-green-100 border border-green-200 text-green-800 p-4 rounded-md'>
          <p>Your message has been received. We'll get back to you soon!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
