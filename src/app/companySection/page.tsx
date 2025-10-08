
"use client"

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function CompanySection() {
  return (
    <div className="bg-white py-20 px-3">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Forge Ahead with a Proven Software Development Company
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Softsmartz, we leverage the transformative power of technology to align 
              with your vision, serving a diverse clientele from startups to 
              governments. As a leader in custom software application development, 
              we deliver scalable, tailor-made solutions that drive innovation and 
              efficiency across all business sizes. Join us to redefine industry 
              standards and accelerate your growth with tangible results.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-700 text-lg mb-1">
                    Agile DevOps Delivery Framework
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-700 text-lg mb-1">
                    Onshore-Offshore Hybrid Delivery Model
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Successful Clients</div>
              </div>
            </div>

            {/* Large Number Display */}
            <div className="relative flex items-center justify-center mb-12">
              <div className="text-center">
                <div className="text-9xl font-bold text-blue-700 leading-none relative">
                  5
                  <div className="absolute -top-2 -right-16 bg-blue-700 text-white text-2xl font-bold px-4 py-2 rounded">
                    YEARS
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">600+</div>
                <div className="text-gray-600 font-medium">Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">2500+</div>
                <div className="text-gray-600 font-medium">Software Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}