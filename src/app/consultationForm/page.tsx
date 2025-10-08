

"use client"

import React, { useState } from 'react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const captchaQuestion = {
    num1: 14,
    num2: 4,
    answer: 18
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (parseInt(captchaAnswer) !== captchaQuestion.answer) {
      newErrors.captcha = 'Incorrect answer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you shortly.');
      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
      setCaptchaAnswer('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Information */}
          <div>
            <h2 
              style={{
                fontFamily: '"Segoe UI", Sans-serif',
                fontSize: '36px',
                fontWeight: 700,
                color: '#0033CC'
              }}
              className="mb-6"
            >
              Book Free Consultation
            </h2>

            <p className="text-gray-700 text-lg mb-8">
              Guaranteed response within 8 business hours.
            </p>

            {/* Step 1 */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="w-0.5 h-16 bg-blue-200 ml-5 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fill up your details
                </h3>
                <p className="text-gray-600">
                  Get custom solutions, recommendations, estimates.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What's next?
                </h3>
                <p className="text-gray-600">
                  One of our account managers will contact you shortly
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {/* Name and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Custom Captcha */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Custom Captcha <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 text-lg">
                    {captchaQuestion.num1} + {captchaQuestion.num2} =
                  </span>
                  <input
                    type="text"
                    value={captchaAnswer}
                    onChange={(e) => {
                      setCaptchaAnswer(e.target.value);
                      if (errors.captcha) {
                        setErrors(prev => ({ ...prev, captcha: '' }));
                      }
                    }}
                    className={`w-24 px-4 py-2 border ${
                      errors.captcha ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                {errors.captcha && (
                  <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 rounded-lg transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}