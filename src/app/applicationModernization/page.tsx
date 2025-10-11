
"use client";
import React from 'react';
import { ArrowRight, CheckCircle, Target, Zap, Shield, TrendingUp, Code, Cloud, Database, Cpu, RefreshCw, Lock, Gauge, Users } from 'lucide-react';

export default function ApplicationModernization() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const accelerators = [
    { 
      title: "Assessment", 
      description: "Comprehensive application portfolio analysis",
      icon: <Target className="w-8 h-8" />
    },
    { 
      title: "Strategy", 
      description: "Modernization roadmap and planning",
      icon: <Code className="w-8 h-8" />
    },
    { 
      title: "Migration", 
      description: "Cloud-native transformation",
      icon: <Cloud className="w-8 h-8" />
    },
    { 
      title: "Optimization", 
      description: "Performance and cost optimization",
      icon: <Gauge className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Accelerate time-to-market",
    "Reduce operational costs",
    "Improve scalability and performance",
    "Enhance security and compliance",
    "Enable DevOps and CI/CD",
    "Modernize legacy systems"
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Application Assessment",
      description: "Deep dive into your application portfolio to identify modernization opportunities",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless migration of applications to cloud platforms with minimal disruption",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Re-architecture",
      description: "Transform monolithic applications into microservices architecture",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Optimization",
      description: "Continuous improvement and performance optimization of modernized applications",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const caseStudies = [
    {
      title: "Financial Services",
      description: "Modernized legacy banking system, reducing costs by 40%",
      impact: "40% Cost Reduction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Healthcare",
      description: "Migrated patient management system to cloud platform",
      impact: "3x Performance Boost",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Retail",
      description: "Transformed e-commerce platform with microservices",
      impact: "60% Faster Deployment",
      color: "from-green-500 to-teal-500"
    }
  ];

  const processSteps = [
    { title: "Discover", icon: <Target className="w-6 h-6" />, color: "bg-red-500" },
    { title: "Assess", icon: <Database className="w-6 h-6" />, color: "bg-orange-500" },
    { title: "Design", icon: <Code className="w-6 h-6" />, color: "bg-green-500" },
    { title: "Build", icon: <Cpu className="w-6 h-6" />, color: "bg-blue-500" },
    { title: "Deploy", icon: <Cloud className="w-6 h-6" />, color: "bg-purple-500" },
    { title: "Operate", icon: <RefreshCw className="w-6 h-6" />, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Application Modernization Solution
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Transform your legacy applications into cloud-native, scalable, and efficient solutions
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden md:block">
              {/* Circular Diagram Illustration */}
              <div className="relative w-full h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-2xl">
                    <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-900">AMS</div>
                        <div className="text-sm text-gray-600">Application</div>
                        <div className="text-sm text-gray-600">Modernization</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Orbiting Icons */}
                {[
                  { icon: <Cloud className="w-6 h-6" />, angle: 0 },
                  { icon: <Code className="w-6 h-6" />, angle: 90 },
                  { icon: <Database className="w-6 h-6" />, angle: 180 },
                  { icon: <Lock className="w-6 h-6" />, angle: 270 }
                ].map((item, idx) => {
                  const radius = 150;
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                  return (
                    <div
                      key={idx}
                      className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      {item.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accelerators Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Application Modernization Accelerators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven framework accelerates your modernization journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {accelerators.map((acc, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition">
                  {acc.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{acc.title}</h3>
                <p className="text-gray-600">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Modernization Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to application transformation
            </p>
          </div>
          
          {/* Hexagonal Process Flow */}
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className={`w-32 h-32 ${step.color} rounded-2xl rotate-45 shadow-lg group-hover:scale-110 transition duration-300`}>
                    <div className="-rotate-45 flex flex-col items-center justify-center h-full text-white">
                      {step.icon}
                      <span className="text-sm font-bold mt-2">{step.title}</span>
                    </div>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Modernize Your Applications?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Application modernization enables organizations to leverage modern technologies, 
                improve operational efficiency, and deliver better customer experiences.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Stats Grid Illustration */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2 text-center">40%</div>
                    <div className="text-sm text-center">Cost Reduction</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                    <div className="flex items-center justify-center mb-3">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2 text-center">3x</div>
                    <div className="text-sm text-center">Faster Deployment</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                    <div className="flex items-center justify-center mb-3">
                      <Gauge className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2 text-center">60%</div>
                    <div className="text-sm text-center">Better Performance</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                    <div className="flex items-center justify-center mb-3">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2 text-center">99.9%</div>
                    <div className="text-sm text-center">Uptime SLA</div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive application modernization services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition`}></div>
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative">{service.title}</h3>
                <p className="text-gray-600 relative">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real-world success stories from our clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className={`h-48 bg-gradient-to-br ${study.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-24 h-24 text-white opacity-20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full opacity-10"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                    {study.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Modernize Your Applications?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your legacy applications into modern, cloud-native solutions
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-xl hover:shadow-2xl">
              Contact Us
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Find answers to common questions about application modernization
          </p>
          <div className="space-y-4">
            {[
              {
                q: "What is application modernization?",
                a: "Application modernization is the process of updating legacy applications to leverage modern technologies, architectures, and cloud platforms. This includes refactoring code, migrating to cloud infrastructure, containerizing applications, and adopting modern development practices like microservices and DevOps."
              },
              {
                q: "How long does the modernization process take?",
                a: "The timeline varies based on application complexity, size, and scope. Simple applications may take 3-6 months, while complex enterprise systems can take 12-18 months or more. We conduct a thorough assessment to provide accurate timelines for your specific situation."
              },
              {
                q: "What are the costs involved?",
                a: "Costs depend on multiple factors including application size, complexity, chosen technologies, and migration strategy. We provide detailed cost assessments and ROI analysis during the planning phase, helping you understand both immediate investment and long-term savings."
              },
              {
                q: "Will there be downtime during migration?",
                a: "We employ strategies like blue-green deployment, canary releases, and phased migrations to minimize or eliminate downtime. Our goal is to ensure business continuity throughout the modernization process with zero or near-zero downtime."
              },
              {
                q: "What cloud platforms do you support?",
                a: "We support all major cloud platforms including AWS, Azure, Google Cloud Platform, and hybrid/multi-cloud solutions. Our team has extensive expertise across these platforms and can help you choose the best fit for your needs."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </h3>
                  <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}