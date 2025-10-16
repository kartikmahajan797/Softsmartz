import React from 'react';
import { ArrowRight, Users, TrendingUp, Target, Sparkles, Code, Smartphone, TestTube, Layers, Zap, CheckCircle, Building2, ShoppingCart, Factory, Laptop } from 'lucide-react';

export default function UIUXLandingPage() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "UX Design (User Experience)",
      description: "Optimizing the flow and usability of your product",
      gradient: "from-orange-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UI Design (User Interface)",
      description: "Pixel-perfect designs tailored to your brand identity",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research & Analysis",
      description: "Understanding your audience's behavior and needs",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Wireframing & Prototyping",
      description: "Interactive mockups to visualize user journeys",
      gradient: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile UI/UX Design Services",
      description: "Responsive and mobile-friendly interfaces",
      gradient: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Usability Testing",
      description: "Ensuring seamless interaction with real user feedback",
      gradient: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop"
    }
  ];

  const stats = [
    { number: "88%", label: "Users abandon websites due to poor usability", icon: <Target className="w-6 h-6" /> },
    { number: "200-400%", label: "ROI potential for UX/UI well-designed sites", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "70%", label: "Buyers quit due to poor experience or 70% of users browse on mobile", icon: <Smartphone className="w-6 h-6" /> }
  ];

  const strategies = [
    { title: "User-Centric Design", desc: "Prioritizing user needs to improve usability" },
    { title: "Consistent Design", desc: "Maintaining visual harmony across all touchpoints" },
    { title: "Responsive Design", desc: "Ensuring seamless experiences across devices" },
    { title: "Accessibility Compliance", desc: "Designing for inclusivity and usability" },
    { title: "Intuitive Navigation", desc: "Making it easy for users to find what they need" }
  ];

  const industries = [
    { icon: <Building2 className="w-6 h-6" />, name: "Healthcare", desc: "Secure and compliant UX for telehealth & EMR platforms" },
    { icon: <TrendingUp className="w-6 h-6" />, name: "Finance & Banking", desc: "Secure and streamlined user interfaces" },
    { icon: <ShoppingCart className="w-6 h-6" />, name: "E-commerce & Retail", desc: "Optimized UI for better conversions" },
    { icon: <Factory className="w-6 h-6" />, name: "Manufacturing", desc: "Streamlining operations and IoT systems" },
    { icon: <Sparkles className="w-6 h-6" />, name: "Edtech", desc: "Intuitive and engaging learning platforms" },
    { icon: <Laptop className="w-6 h-6" />, name: "Software & SaaS", desc: "Scalable UI/UX for web and mobile applications" }
  ];

  const achievements = [
    { number: "28+", label: "Years' software product development experience" },
    { number: "2500+", label: "Application projects have delivered" },
    { number: "1000+", label: "Enterprises customers actively using" },
    { number: "600+", label: "Software development professionals" }
  ];

  const clients = [
    "University of Michigan",
    "Hamburg Clark", 
    "KOMATSU",
    "Beaumont"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Elevate User Experience
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/80 mb-6 max-w-3xl mx-auto leading-relaxed">
              with Expert UI/UX Design Services
            </p>
            
            <p className="text-lg text-blue-200/60 mb-12 max-w-2xl mx-auto">
              Softsmartz blends creativity, psychology, and technology to craft memorable experiences across web and mobile platforms
            </p>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                GET A FREE CONSULTATION
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

           
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">UI/UX Design Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We focus on delivering intuitive, visually stunning, and functional designs that elevate your digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                    <div className={`bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              LET'S DISCUSS YOUR PROJECT
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why UI/UX Design Matters for Your Business</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <p className="text-slate-600 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Delivering UX Designs with Proven Strategies</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{strategy.title}</h3>
                    <p className="text-slate-600">{strategy.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop"
                  alt="UX Strategy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              GET A FREE CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Custom UI/UX Design Solutions for Various Industries</h2>
            <p className="text-xl text-slate-600">We provide tailored UI/UX design services across multiple domains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-slate-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Why Softsmartz for UI/UX Design Services?</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              For more than 28+ years, our team of engineers designed and developed highly scalable and efficient UI/UX services that address the needs of our enterprise customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <p className="text-slate-600 leading-relaxed">{achievement.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-300">
              <span className="text-slate-700 font-semibold">Outsource Offshore Hybrid Delivery Model</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-300">
              <span className="text-slate-700 font-semibold">CMMI Level 3 and ISO 27001 Certified</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-300">
              <span className="text-slate-700 font-semibold">Agile DevOps Delivery Framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Get Started with Softsmartz's UI/UX Design Services</h2>
            <p className="text-xl text-blue-200/80 mb-10">Ready to build a visually stunning and user-friendly digital product? Let's work together!</p>
            
            <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-blue-200/70">
              <span>✓ Free initial consultation</span>
              <span>✓ No obligation quote</span>
              <span>✓ Expert design team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}