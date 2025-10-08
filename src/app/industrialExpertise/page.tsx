"use client"


import React, { useState } from 'react';

export default function IndustrialExpertise() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const industries = [
    {
      id: 1,
      title: 'HEALTH CARE',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80'
    },
    {
      id: 2,
      title: 'BANKING',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
    },
    {
      id: 3,
      title: 'PUBLIC SECTOR',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80'
    },
    {
      id: 4,
      title: 'TECHNOLOGY SERVICES',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
    },
    {
      id: 5,
      title: 'FOOD & BEVERAGE',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
    },
    {
      id: 6,
      title: 'HOSPITALITY',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80'
    },
    {
      id: 7,
      title: 'MANUFACTURING',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      large: true
    },
    {
      id: 8,
      title: 'RETAIL DISTRIBUTION',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h1 style={{
              fontFamily: '"Segoe UI", Sans-serif',
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: '40px',
              color: '#0033CC'
            }} className="mb-6">
              Diverse Industrial Software Development Expertise
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tailoring emerging technological solutions to meet unique industrial demands
            </p>
          </div>

          {/* Right Side - Industry Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Row - 3 cards */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {industries.slice(0, 3).map((industry) => (
                  <div
                    key={industry.id}
                    className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setHoveredCard(industry.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-blue-900/70 transition-all duration-300 ${
                      hoveredCard === industry.id ? 'bg-blue-900/50' : ''
                    }`} />

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-white font-bold text-lg tracking-wide">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - 3 cards */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {industries.slice(3, 6).map((industry) => (
                  <div
                    key={industry.id}
                    className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setHoveredCard(industry.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-blue-900/70 transition-all duration-300 ${
                      hoveredCard === industry.id ? 'bg-blue-900/50' : ''
                    }`} />

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-white font-bold text-lg tracking-wide">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Third Row - 1 large + 1 normal */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Manufacturing - Large Card */}
                <div
                  className="sm:col-span-2 relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(7)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${industries[6].image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-blue-900/70 transition-all duration-300 ${
                    hoveredCard === 7 ? 'bg-blue-900/50' : ''
                  }`} />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white font-bold text-xl tracking-wide">
                      MANUFACTURING
                    </h3>
                  </div>
                </div>

                {/* Retail Distribution */}
                <div
                  className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(8)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${industries[7].image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-blue-900/70 transition-all duration-300 ${
                    hoveredCard === 8 ? 'bg-blue-900/50' : ''
                  }`} />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white font-bold text-lg tracking-wide">
                      RETAIL DISTRIBUTION
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}