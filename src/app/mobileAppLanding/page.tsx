"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, Users, Award, TrendingUp, Smartphone, Tablet, Monitor, Code2, Layers, Zap, Shield, Database, Cloud, GitBranch, CheckCircle, ChevronRight, PlayCircle } from 'lucide-react';

export default function MobileAppLanding() {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      title: "Native iOS App Development",
      description: "Build powerful iOS applications with Swift and Objective-C for optimal performance"
    },
    {
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=400&fit=crop",
      title: "Android App Development",
      description: "Create robust Android apps using Kotlin and Java for seamless user experience"
    },
    {
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop",
      title: "Cross-Platform Development",
      description: "Develop once, deploy everywhere with React Native and Flutter frameworks"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      title: "UI/UX Design Services",
      description: "Design stunning, user-friendly interfaces that engage and convert users"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      title: "Enterprise Mobile Solutions",
      description: "Scalable enterprise apps for workforce management and business operations"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      title: "App Consulting & Strategy",
      description: "Expert guidance for app ideation, market analysis, and growth strategy"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      title: "IoT App Development",
      description: "Connect devices and build smart IoT applications for modern needs"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      title: "Wearable App Development",
      description: "Create innovative apps for smartwatches and wearable technology"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      title: "App Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your applications"
    }
  ];

  const technologies = [
    { name: 'Swift', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Kotlin', icon: <Code2 className="w-8 h-8" /> },
    { name: 'React Native', icon: <Layers className="w-8 h-8" /> },
    { name: 'Flutter', icon: <Layers className="w-8 h-8" /> },
    { name: 'Firebase', icon: <Database className="w-8 h-8" /> },
    { name: 'AWS', icon: <Cloud className="w-8 h-8" /> },
    { name: 'Node.js', icon: <GitBranch className="w-8 h-8" /> },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" /> }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥' },
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Education', icon: '🎓' },
    { name: 'Finance', icon: '💰' },
    { name: 'Real Estate', icon: '🏘️' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Food & Restaurant', icon: '🍔' },
    { name: 'Entertainment', icon: '🎬' }
  ];

  const workflow = [
    { step: 1, title: 'Discovery & Planning', description: 'We analyze your requirements and create a detailed project roadmap' },
    { step: 2, title: 'Design & Prototype', description: 'Our designers create wireframes and interactive prototypes' },
    { step: 3, title: 'Development', description: 'Expert developers bring your app to life with clean code' },
    { step: 4, title: 'Testing & QA', description: 'Rigorous testing ensures bug-free, high-quality application' },
    { step: 5, title: 'Deployment & Launch', description: 'We handle app store submission and successful launch' },
    { step: 6, title: 'Support & Maintenance', description: 'Continuous support and updates to keep your app running smoothly' }
  ];

  const portfolio = [
    { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop', title: 'E-commerce App', category: 'Retail' },
    { image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=300&fit=crop', title: 'Healthcare Platform', category: 'Healthcare' },
    { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', title: 'Banking Solution', category: 'Finance' },
    { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', title: 'Analytics Dashboard', category: 'Business' },
    { image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop', title: 'Food Delivery App', category: 'Food' },
    { image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop', title: 'Fitness Tracker', category: 'Health' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 mr-2 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-medium">Trusted by 100+ Global Clients</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Custom Mobile App Development Services Built for Your Business
              </h1>
              
              <p className="text-xl mb-8 text-blue-50">
                Transform your ideas into powerful mobile applications. We deliver innovative iOS, Android, and cross-platform solutions that drive business growth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                  Get Started Today
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold">250+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
                alt="Mobile Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Full-Cycle Custom Mobile App Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we offer comprehensive mobile app development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Next-Gen Technologies Powering Innovation
            </h2>
            <p className="text-xl text-gray-600">
              We leverage cutting-edge technologies to build robust mobile applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all group">
                <div className="text-blue-600 flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h4 className="font-bold text-gray-900">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Transform Your Business in Any Industry
            </h2>
            <p className="text-xl text-blue-50">
              We serve diverse industries with tailored mobile app solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h4 className="font-semibold">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Streamlined App Development Workflow
            </h2>
            <p className="text-xl text-gray-600">
              Our proven 6-step process ensures project success from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories That Inspire Confidence
            </h2>
            <p className="text-xl text-gray-600">
              Explore our portfolio of successful mobile app projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-blue-400 text-sm font-semibold mb-1">{project.category}</div>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your App? Let's Bring It to Life!
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Get in touch with our experts and start your mobile app development journey today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}