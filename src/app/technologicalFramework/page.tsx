
"use client"

import React, { useState } from 'react';

export default function TechnologicalFramework() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    'All',
    'AI',
    'Framework',
    'Programming Languages',
    'Cloud',
    'Relational Databases',
    'NoSQL Databases',
    'Data Analysis',
    'Streaming Systems',
    'DevOps'
  ];

  const technologies = [
    { name: 'Angular', category: 'Framework', logo: '🅰️' },
    { name: 'Xamarin', category: 'Framework', logo: '✖️' },
    { name: 'Vue', category: 'Framework', logo: '🆅' },
    { name: 'Bootstrap', category: 'Framework', logo: '🅱️' },
    { name: 'Rails', category: 'Framework', logo: '🛤️' },
    { name: 'Spring', category: 'Framework', logo: '🍃' },
    { name: 'Flutter', category: 'Framework', logo: '🦋' },
    { name: 'gRPC', category: 'Framework', logo: '⚡' },
    { name: 'JavaScript', category: 'Programming Languages', logo: 'JS' },
    { name: 'Ruby', category: 'Programming Languages', logo: '💎' },
    { name: 'Python', category: 'Programming Languages', logo: '🐍' },
    { name: 'Java', category: 'Programming Languages', logo: '☕' },
    { name: 'Go', category: 'Programming Languages', logo: '🔷' },
    { name: 'C#', category: 'Programming Languages', logo: 'C#' },
    { name: 'GraphQL', category: 'Programming Languages', logo: '◆' },
    { name: 'TypeScript', category: 'Programming Languages', logo: 'TS' },
    { name: 'Kotlin', category: 'Programming Languages', logo: '🅺' },
    { name: 'AWS', category: 'Cloud', logo: '☁️' },
    { name: 'Google Cloud', category: 'Cloud', logo: '☁️' },
    { name: 'Azure', category: 'Cloud', logo: '☁️' },
    { name: 'Cisco', category: 'Cloud', logo: '🌐' },
    { name: 'SAP', category: 'Cloud', logo: '📊' },
    { name: 'SQL Server', category: 'Relational Databases', logo: '🗄️' },
    { name: 'SQL Azure', category: 'Relational Databases', logo: '☁️' },
    { name: 'Oracle', category: 'Relational Databases', logo: '🔴' },
    { name: 'MySQL', category: 'Relational Databases', logo: '🐬' },
    { name: 'PostgreSQL', category: 'Relational Databases', logo: '🐘' },
    { name: 'MongoDB', category: 'NoSQL Databases', logo: '🍃' },
    { name: 'DynamoDB', category: 'NoSQL Databases', logo: '⚡' },
    { name: 'Cosmos', category: 'NoSQL Databases', logo: '🌌' },
    { name: 'Cassandra', category: 'NoSQL Databases', logo: '⭐' },
    { name: 'RediSearch', category: 'NoSQL Databases', logo: '🔍' },
    { name: 'Power BI', category: 'Data Analysis', logo: '📊' },
    { name: 'Tableau', category: 'Data Analysis', logo: '📈' },
    { name: 'Terraform', category: 'DevOps', logo: '🏗️' },
    { name: 'Docker', category: 'DevOps', logo: '🐋' },
    { name: 'Kubernetes', category: 'DevOps', logo: '☸️' },
    { name: 'Azure DevOps', category: 'DevOps', logo: '🔷' },
    { name: 'Kafka', category: 'Streaming Systems', logo: '📨' },
    { name: 'AWS', category: 'Streaming Systems', logo: '☁️' },
    { name: 'AWS Stream', category: 'Streaming Systems', logo: '🌊' },
    { name: 'AWS Lambda', category: 'Streaming Systems', logo: 'λ' },
    { name: 'JMeter', category: 'DevOps', logo: '⚡' },
    { name: 'Excel', category: 'Data Analysis', logo: '📗' },
    { name: 'Jenkins', category: 'DevOps', logo: '🔧' },
    { name: 'JMeter', category: 'DevOps', logo: '⚖️' },
    { name: 'Playwright', category: 'DevOps', logo: '🎭' },
    { name: 'Tosca', category: 'DevOps', logo: '🔷' },
    { name: 'Bitbucket', category: 'DevOps', logo: '🪣' },
    { name: 'Windows', category: 'DevOps', logo: '🪟' },
    { name: 'Linux', category: 'DevOps', logo: '🐧' },
    { name: 'Unix', category: 'DevOps', logo: '⚙️' },
    { name: 'Android', category: 'Framework', logo: '🤖' },
    { name: 'iOS', category: 'Framework', logo: '🍎' },
    { name: 'WordPress', category: 'Framework', logo: '📝' },
    { name: 'Airflow', category: 'Streaming Systems', logo: '🌀' },
    { name: 'VANTIQ', category: 'AI', logo: '🤖' },
    { name: 'Palantir', category: 'Data Analysis', logo: '🔮' },
    { name: 'Redis', category: 'NoSQL Databases', logo: '🔴' },
    { name: 'Azure', category: 'Cloud', logo: '☁️' },
    { name: 'LoadRunner', category: 'DevOps', logo: '🏃' },
    { name: 'SonarQube', category: 'DevOps', logo: '📊' },
    { name: 'SonarCloud', category: 'DevOps', logo: '☁️' },
    { name: 'Jira', category: 'DevOps', logo: '📋' },
    { name: 'Confluence', category: 'DevOps', logo: '📄' },
    { name: 'ChatGPT', category: 'AI', logo: '🤖' },
    { name: 'Twilio', category: 'Framework', logo: '📱' },
    { name: 'Postman', category: 'DevOps', logo: '📬' },
    { name: 'Avalara', category: 'Framework', logo: '💼' }
  ];

  const filteredTechnologies = activeTab === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Technological Framework
          </h1>
          <p className="text-lg text-gray-600">
            Deploy all the latest tools to future-proof your business
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {tech.logo}
              </div>
              <p className="text-xs text-center text-gray-700 font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Showing {filteredTechnologies.length} technologies
        </div>
      </div>
    </div>
  );
}