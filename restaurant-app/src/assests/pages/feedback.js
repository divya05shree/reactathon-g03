import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or display a thank you message
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      rating: '',
    });
  };

  return (
    <div className='feed'>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='sec'>
        <div>
          <strong><label htmlFor="name">Name:</label></strong>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <strong> <label htmlFor="email">Email:</label></strong>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <strong> <label htmlFor="message">Message:</label></strong>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            
          ></textarea>
        </div>
        <div>
        <strong><label htmlFor="rating">Rating:</label></strong>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select rating</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </div>
        <button className='submitbutton' type="submit">Submit Feedback</button>
      </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
