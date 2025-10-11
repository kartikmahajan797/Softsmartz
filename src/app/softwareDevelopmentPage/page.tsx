

"use client";

import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Clock, DollarSign } from 'lucide-react';
import ConsultationForm from '../consultationForm/page';

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Custom Software Application Development Services</h1>
            <p className="text-xl mb-8 text-blue-100">
              We build innovative, scalable software solutions tailored to your business needs
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              Get Started Now <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
              alt="Professional developer" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                  <path d="M3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"/>
                  <path d="M14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Web Development</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Mobile Apps</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Cloud Solutions</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">API Integration</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-indigo-900 text-white rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Expertise in Software Development</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Development Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>Custom Software Development | 15+ Years Experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>Enterprise Application Development | 200+ Projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>SaaS Product Development | Scalable Solutions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Technologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>React, Angular, Vue.js | Modern Frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>Node.js, Python, Java | Backend Excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>AWS, Azure, Google Cloud | Cloud Native</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Proven Process for Designing Quality Software
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-indigo-900 text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-blue-200">We analyze your requirements and define project scope</p>
            </div>
            <div className="bg-purple-700 text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-purple-200">Creating intuitive UI/UX and system architecture</p>
            </div>
            <div className="bg-blue-700 text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-blue-200">Agile development with continuous integration</p>
            </div>
            <div className="bg-indigo-800 text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-4">04</div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-indigo-200">Testing, launch, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Software Tech Stack Delivery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">250+</div>
                <div className="text-blue-200">Expert Developers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            We Integrate with Leading Platforms
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Trusted by industry leaders worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-2xl font-bold text-blue-600">Microsoft</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-2xl font-bold text-red-600">Oracle</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-2xl font-bold text-blue-500">Salesforce</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-2xl font-bold text-orange-600">AWS</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-2xl font-bold text-purple-600">Shopify</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-2xl font-bold text-green-600">SAP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Full-Cycle Custom Software Development Solutions
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💻', title: 'Web Applications', desc: 'Responsive and scalable web solutions' },
              { icon: '📱', title: 'Mobile Apps', desc: 'iOS and Android native apps' },
              { icon: '☁️', title: 'Cloud Migration', desc: 'Seamless cloud transformation' },
              { icon: '🔧', title: 'API Development', desc: 'RESTful and GraphQL APIs' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered design approach' },
              { icon: '🔒', title: 'Security', desc: 'Enterprise-grade security' },
              { icon: '📊', title: 'Analytics', desc: 'Data-driven insights' },
              { icon: '🚀', title: 'DevOps', desc: 'CI/CD pipeline implementation' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Build Custom Applications with Top-Notch Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🏥 Healthcare & Medical</h3>
              <p className="text-blue-100">HIPAA compliant solutions for healthcare providers</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">💰 Finance & Banking</h3>
              <p className="text-blue-100">Secure fintech applications and payment systems</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🛒 E-commerce & Retail</h3>
              <p className="text-blue-100">End-to-end e-commerce platforms</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">📚 Education & E-learning</h3>
              <p className="text-blue-100">Interactive learning management systems</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🏭 Manufacturing & Logistics</h3>
              <p className="text-blue-100">Supply chain and inventory management</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🎮 Media & Entertainment</h3>
              <p className="text-blue-100">Streaming platforms and content management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Partner with Us for Software Development?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
                <p className="text-gray-600">Expert developers committed to your success with transparent communication</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Award className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous testing processes ensuring bug-free, high-performance software</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">Agile methodology ensuring milestones are met consistently</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <DollarSign className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                <p className="text-gray-600">Flexible engagement models that fit your budget and requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Case Studies</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Real-world success stories from our clients
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
                title: 'E-commerce Platform Redesign',
                desc: '300% increase in conversions',
                industry: 'Retail'
              },
              {
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
                title: 'Healthcare Management System',
                desc: 'Streamlined operations for 50+ clinics',
                industry: 'Healthcare'
              },
              {
                img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop',
                title: 'FinTech Mobile Application',
                desc: '1M+ downloads in 6 months',
                industry: 'Finance'
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={study.img} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.desc}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your project and turn your vision into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
          <ConsultationForm />
      
    
    </div>
  );
}