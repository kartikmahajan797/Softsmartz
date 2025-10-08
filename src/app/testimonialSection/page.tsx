
"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "SoftSmartz's innovative thoughts in approaching the delivery of our project, along with their application development methodology, have delivered a powerful AR tool that is revolutionizing the way nursing and medical students learn procedures and improve their skills. Their culture of innovation, expertise, and tightly controlled \"Sprints\" kept our team informed and involved throughout the process, ensuring rapid development with constant feedback and input. We are very excited to work on 2.0 of our system!",
      author: "Deb L, PhD",
      company: "University of Michigan School of Nursing"
    },
    {
      id: 2,
      text: "Working with SoftSmartz has been an exceptional experience. Their team's dedication to quality and attention to detail has exceeded our expectations. They delivered our project on time and within budget, while maintaining excellent communication throughout the entire process.",
      author: "John Smith",
      company: "Tech Solutions Inc."
    },
    {
      id: 3,
      text: "The expertise and professionalism demonstrated by SoftSmartz's team is outstanding. They transformed our complex requirements into an elegant, user-friendly solution that has significantly improved our business operations.",
      author: "Sarah Johnson",
      company: "Global Enterprises"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 
          style={{
            fontFamily: '"Segoe UI", Sans-serif',
            fontSize: '36px',
            fontWeight: 700,
            color: '#0033CC'
          }}
          className="mb-12"
        >
          What Our Clients Say
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Opening Quote */}
          <div className="absolute top-8 left-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M12 24C12 17.373 17.373 12 24 12V16C19.582 16 16 19.582 16 24H20V32H12V24Z" fill="#00BFFF"/>
              <path d="M28 24C28 17.373 33.373 12 40 12V16C35.582 16 32 19.582 32 24H36V32H28V24Z" fill="#00BFFF"/>
            </svg>
          </div>

          {/* Testimonial Text */}
          <div className="mt-12 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div>
              <p 
                style={{
                  fontFamily: '"Segoe UI", Sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#0033CC'
                }}
              >
                {testimonials[currentIndex].author}, {testimonials[currentIndex].company}
              </p>
            </div>

            {/* Closing Quote */}
            <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M36 24C36 30.627 30.627 36 24 36V32C28.418 32 32 28.418 32 24H28V16H36V24Z" fill="#00BFFF"/>
                <path d="M20 24C20 30.627 14.627 36 8 36V32C12.418 32 16 28.418 16 24H12V16H20V24Z" fill="#00BFFF"/>
              </svg>
            </div>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={previousTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          )}

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}