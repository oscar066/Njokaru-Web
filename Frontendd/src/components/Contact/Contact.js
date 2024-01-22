
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission to an email (in a real-world scenario, you'd need a server for this)
    // You can use a service like EmailJS or set up your own server to handle form submissions and send emails.
    // For now, we'll just log the data and display a confirmation message.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
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
