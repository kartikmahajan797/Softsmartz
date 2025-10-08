
"use client"


import React, { useState } from 'react';
import { Monitor, Users, Briefcase, ArrowRight, Check } from 'lucide-react';

export default function FlexibleEngagementModels() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      icon: Monitor,
      title: "Offshore Development Teams",
      description: "Softura's Offshore Development Teams provide certified professionals who work remotely to deliver cost-effective solutions, ensuring swift integration with your existing workflows.",
      details: "Scale the team size as per your project needs while leveraging their skillset for enhanced productivity and innovation.",
      benefits: [
        "Certified professionals",
        "Cost-effective solutions",
        "Swift integration",
        "Scalable team size"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Users,
      title: "IT Staff Augmentation",
      description: "Complement your in-house team with Softura's IT Staff Augmentation services, which offer on-demand access to top-tier tech engineers to meet critical project deadlines.",
      details: "This model suits companies that need specialized skills or extra manpower temporarily, without the long-term commitment.",
      benefits: [
        "On-demand access",
        "Top-tier engineers",
        "No long-term commitment",
        "Meet critical deadlines"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Briefcase,
      title: "IT Outsourcing",
      description: "Softura's IT outsourcing model allows you to confidently delegate entire projects, from initial design to final deployment, helping you focus on core business strategies.",
      details: "Minimize risks and maximize efficiency with this model as our professionals manage all your end-to-end solutions.",
      benefits: [
        "End-to-end solutions",
        "Focus on core business",
        "Risk minimization",
        "Maximum efficiency"
      ],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Flexible Engagement Models
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Augment your team capabilities with any of these models and focus on your core competencies.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {models.map((model, index) => (
            <div
              key={model.id}
              className="group relative"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
              onMouseEnter={() => setHoveredCard(model.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative h-full bg-white rounded-2xl shadow-lg overflow-hidden
                transition-all duration-500 ease-out
                ${hoveredCard === model.id ? 'shadow-2xl -translate-y-2 scale-105' : 'shadow-lg'}
              `}>
                {/* Gradient Background on Hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${model.color} opacity-0
                  transition-opacity duration-500
                  ${hoveredCard === model.id ? 'opacity-10' : ''}
                `} />

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-br ${model.color}
                    flex items-center justify-center mb-6
                    transition-transform duration-500
                    ${hoveredCard === model.id ? 'scale-110 rotate-6' : ''}
                  `}>
                    <model.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Details */}
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {model.details}
                  </p>

                  {/* Benefits List */}
                  <div className={`
                    space-y-2 mb-6 overflow-hidden transition-all duration-500
                    ${hoveredCard === model.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    {model.benefits.map((benefit, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center text-sm text-slate-700"
                        style={{
                          animation: hoveredCard === model.id 
                            ? `slideRight 0.3s ease-out ${idx * 0.1}s backwards` 
                            : 'none'
                        }}
                      >
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`
                    flex items-center text-sm font-semibold
                    bg-gradient-to-r ${model.color}
                    text-white px-6 py-3 rounded-lg
                    transition-all duration-300
                    ${hoveredCard === model.id ? 'gap-3' : 'gap-2'}
                  `}>
                    Learn More
                    <ArrowRight className={`
                      w-4 h-4 transition-transform duration-300
                      ${hoveredCard === model.id ? 'translate-x-1' : ''}
                    `} />
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r ${model.color}
                  transition-all duration-500
                  ${hoveredCard === model.id ? 'h-2' : 'h-1'}
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's discuss which engagement model fits your needs best
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}