"use client"

import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Our Locations - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
              Our Locations
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6">
              <div className="text-sm hover:text-blue-300 transition-colors cursor-pointer">
                Detroit (Farmington Hills)
              </div>
              <div className="text-sm hover:text-blue-300 transition-colors cursor-pointer">
                Toronto, Canada
              </div>
              <div className="text-sm hover:text-blue-300 transition-colors cursor-pointer">
                Dallas, TX
              </div>
              <div className="text-sm hover:text-blue-300 transition-colors cursor-pointer">
                Tokyo, Japan
              </div>
              <div className="text-sm hover:text-blue-300 transition-colors cursor-pointer">
                Chicago, IL
              </div>
              <div className="text-sm hover:text-blue-300 transition-colors cursor-pointer">
                Chennai, India
              </div>
              <div className="lg:col-span-2 text-sm hover:text-blue-300 transition-colors cursor-pointer">
                Ahmedabad, India
              </div>
            </div>
          </div>

          {/* Products & Services - 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
              Products & Services
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Enterprise Document Hub
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Application Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Application Modernization
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Cloud Enablement
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Industry 4.0/5.0
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  AI / ML Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Portals & Collaboration
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Digital Transformation Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Software Development as a Service
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Partner Program
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-300 transition-colors block">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-blue-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-blue-900" />
              </a>
            </div>
          </div>

          {/* Right Side - Scroll to Top Button - 2 columns */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end items-start pt-12 lg:pt-0">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-blue-300 transition-all hover:scale-110 shadow-lg"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-7 h-7 text-blue-900" />
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2025 SoftSmartz - All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-blue-300 transition-colors">
                ISMS Policy
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}