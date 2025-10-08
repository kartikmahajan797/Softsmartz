
"use client"

import React from 'react';

export default function DigitalTransformationHero() {
  return (
    <div className="relative min-h-[280px] bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[280px] px-4 py-12 text-center">
        {/* Title */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 tracking-tight"
        >
          Drive Digital Transformation
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-white max-w-4xl mb-8 leading-relaxed"
        >
          Explore our digital solutions tailored to maintain your business's
          competitive edge and technological leadership.
        </p>

        {/* CTA Button */}
        <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold text-base rounded transition-colors duration-200">
          GET STARTED
        </button>
      </div>
    </div>
  );
}