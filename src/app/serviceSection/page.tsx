
"use client"

import React, { useState } from 'react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState('Artificial Intelligence');

  const services = [
    {
      name: 'Application Services',
      title: 'Application Services',
      description: 'Build robust, scalable applications tailored to your business needs with cutting-edge technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      features: ['Custom App Development', 'Web Applications', 'Enterprise Solutions', 'Cloud-Native Apps']
    },
    {
      name: 'Artificial Intelligence',
      title: 'Artificial Intelligence',
      description: 'Improve decision-making and create smarter business models with our advanced AI engineering and large language model capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      features: ['AI Engineering', 'AI Development', 'ML Development', 'AI Chatbot Development', 'Generative AI Development', 'Large Language Model', 'ChatGPT Solutions']
    },
    {
      name: 'Automation Services',
      title: 'Automation Services',
      description: 'Streamline your operations and boost productivity with intelligent automation solutions that reduce manual effort.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
      features: ['Process Automation', 'RPA Solutions', 'Workflow Optimization', 'Test Automation']
    },
    {
      name: 'Data Analytics',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence solutions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Big Data Solutions']
    },
    {
      name: 'Dedicated Teams',
      title: 'Dedicated Teams',
      description: 'Scale your development capacity with our skilled dedicated teams that seamlessly integrate with your workflow.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      features: ['Dedicated Developers', 'Team Augmentation', 'Remote Teams', 'Flexible Engagement']
    },
    {
      name: 'DevOps Services',
      title: 'DevOps Services',
      description: 'Accelerate delivery and improve collaboration with our comprehensive DevOps solutions and CI/CD pipelines.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop',
      features: ['CI/CD Implementation', 'Cloud Infrastructure', 'Container Orchestration', 'Monitoring & Logging']
    },
    {
      name: 'IT Consulting',
      title: 'IT Consulting',
      description: 'Navigate complex technology decisions with expert guidance and strategic IT consulting services.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      features: ['Technology Strategy', 'Digital Transformation', 'IT Assessment', 'Solution Architecture']
    },
    {
      name: 'Internet of Things',
      title: 'Internet of Things',
      description: 'Connect and manage smart devices with our IoT solutions that enable real-time monitoring and control.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
      features: ['IoT Development', 'Smart Device Integration', 'IoT Analytics', 'Edge Computing']
    },
    {
      name: 'Migration Services',
      title: 'Migration Services',
      description: 'Seamlessly migrate your applications and data to modern platforms with minimal downtime and risk.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
      features: ['Cloud Migration', 'Database Migration', 'Legacy System Migration', 'Platform Modernization']
    },
    {
      name: 'Modernization Services',
      title: 'Modernization Services',
      description: 'Transform legacy systems into modern, agile applications that meet current business demands.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      features: ['Application Modernization', 'Architecture Redesign', 'Technology Upgrades', 'Performance Optimization']
    },
    {
      name: 'Software Development',
      title: 'Software Development',
      description: 'End-to-end software development services delivering high-quality, scalable solutions for your business.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      features: ['Custom Software', 'Full-Stack Development', 'API Development', 'Mobile Apps']
    }
  ];

  const currentService = services.find(s => s.name === activeService) || services[0];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Our Software Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Led by onshore and offshore software engineers, we provide secure, scalable, and future-proof software solutions to global clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Service Menu */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(service.name)}
                  className={`w-full text-left px-6 py-4 transition-all duration-300 border-b border-gray-100 ${
                    activeService === service.name
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">
                  {currentService.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {currentService.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}