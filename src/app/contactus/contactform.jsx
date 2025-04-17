// ContactForm.jsx

"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    // Basic phone validation that accepts common formats
    if (!phone) return true; // Phone is optional
    
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Check if it has a valid length (adjust as needed for your region)
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Enquiry validation
    if (!formData.enquiry) {
      newErrors.enquiry = 'Please select an enquiry type';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const isValid = validate();
    if (isValid) {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          enquiry: '',
          message: ''
        });
        setSubmitted(false);
        setFormSubmitted(false);
      }, 3000);
      
      // Add your form submission logic here
    }
  };
  
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          {formSubmitted ? (
            <div className="alert alert-success" role="alert">
              Thank you! Your message has been submitted successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control border-danger-subtle rounded-3 ${submitted && errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {submitted && errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    type="email"
                    className={`form-control border-danger-subtle rounded-3 ${submitted && errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {submitted && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className={`form-control border-danger-subtle rounded-3 ${submitted && errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Enter Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {submitted && errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <select
                  className={`form-select border-danger-subtle rounded-3 ${submitted && errors.enquiry ? 'is-invalid' : ''}`}
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Enquiry</option>
                  <option value="general">General Enquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {submitted && errors.enquiry && (
                  <div className="invalid-feedback">{errors.enquiry}</div>
                )}
              </div>
              
              <div className="mb-4">
                <textarea
                  className={`form-control border-danger-subtle rounded-3 ${submitted && errors.message ? 'is-invalid' : ''}`}
                  placeholder="Your Message here"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {submitted && errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>
              
              <div className="d-grid mb-4">
                <button type="submit" className="btn btn-danger rounded-pill py-2">
                  Submit
                </button>
              </div>
            </form>
          )}
          
          <div className="row mt-4">
            <div className="col-md-6 col-6">
              <h3 className="text-danger">Call Us</h3>
              <p className="text-dark">+91 0078 0088 78</p>
            </div>
            <div className="col-md-6 col-6">
              <h3 className="text-danger">Email Us</h3>
              <p className="text-dark">Community@antara.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}