import React, { useState } from 'react';
import './Contact.css';

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
    <div className='contact-container'>
      <h2>Contact Us</h2>
      {!isSubmitted ? (
        <form className='contact-form' onSubmit={handleSubmit}>
          <label htmlFor='fullName'>Full Name:</label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor='serviceType'>Service Type:</label>
          <input
            type='text'
            id='serviceType'
            name='serviceType'
            value={formData.serviceType}
            onChange={handleChange}
            required
          />

          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div className='confirmation-message'>
          <p>Your message has been received. We'll get back to you soon!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;


