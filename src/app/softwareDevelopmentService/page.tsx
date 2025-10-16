import React from 'react';
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Calendar, MessageSquare, BarChart } from 'lucide-react';

export default function SoftwareDevelopmentService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Software Development As A Service Platform
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Transform your business with our comprehensive software development solutions. 
                From ideation to deployment, we deliver excellence.
              </p>
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What is Sufitur Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What is Sufitur? And How Does It Work?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sufitur is a comprehensive platform that connects businesses with top-tier development 
            talent and provides end-to-end project management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Team</h3>
            <p className="text-gray-600">
              Access a network of vetted software developers, designers, and project managers 
              with proven track records.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Agile Methodology</h3>
            <p className="text-gray-600">
              We follow industry best practices with sprint-based development, ensuring 
              transparency and timely delivery.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Scalable Solutions</h3>
            <p className="text-gray-600">
              Build applications that grow with your business, with architecture designed 
              for scalability and performance.
            </p>
          </div>
        </div>
      </div>

      {/* Software Development Challenge Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Overcome Software Development Challenges
            </h2>
            <p className="text-xl text-gray-600">
              We understand the complexities and help you navigate them
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <CheckCircle className="text-green-500" /> Traditional Challenges
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-gray-700">Long hiring processes and talent shortage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-gray-700">Budget overruns and timeline delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-gray-700">Poor communication and misaligned expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-gray-700">Technical debt and maintenance issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="text-green-400" /> Sufitur Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Pre-vetted talent ready to start immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Fixed-price projects with clear milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Daily updates and transparent project tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Clean, documented code with ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
          <p className="text-xl text-gray-600">
            Delivering tailored solutions across multiple industries
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'FinTech', icon: '💰' },
            { title: 'HealthTech', icon: '🏥' },
            { title: 'E-commerce', icon: '🛒' },
            { title: 'EdTech', icon: '📚' },
            { title: 'Real Estate', icon: '🏢' },
            { title: 'Logistics', icon: '📦' },
            { title: 'Entertainment', icon: '🎬' },
            { title: 'SaaS', icon: '☁️' }
          ].map((industry, idx) => (
            <div key={idx} className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="font-bold text-gray-900">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Sufitur */}
      <div className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Sufitur?</h2>
            <p className="text-xl text-indigo-100">
              Trusted by startups and enterprises worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-indigo-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-indigo-200">Expert Developers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Flexible Engagement Models */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-xl text-gray-600">
            Choose the model that fits your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-indigo-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Fixed Price</h3>
            <p className="text-gray-600 mb-6">
              Perfect for well-defined projects with clear requirements and scope.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Defined deliverables</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Fixed timeline</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Budget certainty</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>

          <div className="bg-indigo-900 text-white p-8 rounded-xl shadow-lg border-2 border-indigo-700 transform scale-105">
            <div className="bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4">Time & Material</h3>
            <p className="text-indigo-100 mb-6">
              Ideal for projects with evolving requirements and ongoing development needs.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>Flexible scope</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>Pay as you go</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>Adaptive approach</span>
              </li>
            </ul>
            <button className="w-full bg-white text-indigo-900 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Get Started
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-indigo-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Dedicated Team</h3>
            <p className="text-gray-600 mb-6">
              Best for long-term projects requiring a committed development team.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Full-time commitment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Team integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Scalable resources</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* People Processes Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">People Processes</h2>
            <p className="text-xl text-gray-600">
              Our structured approach to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-indigo-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understanding your vision and requirements
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-indigo-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Planning</h3>
              <p className="text-gray-600 text-sm">
                Creating detailed roadmap and architecture
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-indigo-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Development</h3>
              <p className="text-gray-600 text-sm">
                Agile sprints with continuous delivery
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-indigo-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Launch and ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore APIs Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore API Support With Sufitur
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive API development and integration services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">REST APIs</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Custom RESTful API development</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Third-party API integration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">API documentation and testing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">GraphQL</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">GraphQL API architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Schema design and optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Real-time data subscriptions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tech Stack We Master</h2>
            <p className="text-xl text-gray-300">
              Cutting-edge technologies for modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'React', 'Next.js', 'Node.js', 'Python',
              'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS',
              'Docker', 'Kubernetes', 'GraphQL', 'Redis'
            ].map((tech, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
                <div className="font-bold text-lg">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Ideas Into Reality?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition flex items-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}