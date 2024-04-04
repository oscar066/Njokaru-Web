import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [isExpanded, setIsExpanded] = useState(false); // Track if the contact form is expanded
  const [setIsSubmitted] = useState(false); // Track if the form is submitted

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '', 
    message: '',
  });

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

  const toggleContactForm = () => {
    setIsExpanded(!isExpanded); // Toggle the expansion state
    setIsSubmitted(false); // Reset isSubmitted state when form is closed
  };

  return (
    <div className='contact-container'>
      {!isExpanded ? (
        <button className='reach-out-button btn btn-primary' onClick={toggleContactForm}>
          Reach Out
        </button>
      ) : (
        <>
          <h2>Contact Us</h2>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='fullName' className='form-label'>Full Name:</label>
              <input
                type='text'
                className='form-control'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='serviceType' className='form-label'>Service Type:</label>
              <select
                className='form-select'
                id='serviceType'
                name='serviceType'
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value=''>Select a service type</option>
                <option value='Lawn Mowing and Trimming'>Lawn Mowing and Trimming</option>
                <option value='Garden Maintenance and Cleanup'>Garden Maintenance and Cleanup</option>
                <option value='Hedge Trimming and Pruning'>Hedge Trimming and Pruning</option>
              </select>
            </div>

            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>Message:</label>
              <textarea
                className='form-control'
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit' className='btn btn-primary'>Submit</button>
            <button type='button' className='btn btn-secondary' onClick={toggleContactForm}>
              Close
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Contact;

