import React, { useState } from 'react';
import landscapeImage from '../../Assets/devon.jpg'; 

const InputField = ({ label, name, type, value, onChange, required }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: "Your message has been received. We'll get back to you soon!" });
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          serviceType: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative flex items-center justify-center bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${landscapeImage})` }}>
          <div className="absolute inset-0 bg-green-700 bg-opacity-50 flex items-center justify-center rounded-lg">
            <div className="text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-4">NJOKARU</h2>
              <p className="mb-4">NJOKARU provides professional landscaping services, ensuring your lawn looks its best all year round. From grass trimming to soil treatment, our experts have you covered.</p>
              <p className="mb-4">Contact us today to schedule an appointment and transform your outdoor space into a beautiful and serene environment.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Contact Us</h2>
          {submitStatus && (
            <div 
              className={`mb-6 p-4 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Full Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <div className="mb-4">
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type
              </label>
              <div className="relative">
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select a service type</option>
                  <option value="Grass Trimming">Grass Trimming</option>
                  <option value="Lawn Mowing">Lawn Mowing</option>
                  <option value="Soil Treatment">Soil Treatment</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
