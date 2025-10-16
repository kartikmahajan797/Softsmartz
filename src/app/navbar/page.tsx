"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";


const navigation = [
  {
    name: "Services",
    href: "#",
    current: false,
    hasDropdown: true,
    type: "mega",
  },

  { name: "About", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Technologies", href: "#", current: false },
  {
    name: "Industries",
    href: "#",
    current: false,
    hasDropdown: true,
    type: "simple",
  },
  { name: "Career", href: "#", current: false },
];

const industriesMenu = [
  "Manufacturing",
  "Healthcare",
  "Education",
  "Retail",
  "Fintech",
  "Logistics",
];

const servicesMenu = {
  sections: [
    {
      title: "Software Services",
      subtitle: "Software Development. Done Right. First Time..",
      items: [],
    },
    {
      title: "Softsmartz POD",
      subtitle: "Build Your Custom IT Teams",
      items: [],
    },
  ],
  categories: [
    {
      title: "Application Services",
      links: [
        { name: "Application Development", href: "/softwareDevelopmentPage" },
        { name: "Application Modernization", href: "/applicationModernization" },
        { name: "Mobile App Development", href: "/mobileAppLanding" },
        { name: "Software Development as a Service", href: "/softwareDevelopmentService" },
        { name: "UI/UX Services", href: "/ui/UIUXLandingPage" },
      ],
    },
    {
      title: "Data Analytics and AI",
      links: [
        "BI and Analytics",
        "AI/ML Development",
        "Adaptive Automation",
        "RPA",
        "Modernize With ChatGPT",
        "IoT",
      ],
    },
    {
      title: "Cloud Computing",
      links: [
        "Cloud Enablement",
        "SharePoint Consulting Services",
        "O365 and M365 Services",
      ],
    },
    {
      title: "Consulting Services",
      links: [
        "Digital Transformation Consulting",
        "Industry 4.0/5.0",
        "Recently Funded Companies",
        "Virtual and Augmented Reality (VR/AR)",
      ],
    },
  ],
};

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo and Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <span className="text-xl font-semibold text-white">
                Softsmartz
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:items-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasDropdown && item.type === "mega")
                        setServicesOpen(true);
                      if (item.hasDropdown && item.type === "simple")
                        setIndustriesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown && item.type === "mega")
                        setServicesOpen(false);
                      if (item.hasDropdown && item.type === "simple")
                        setIndustriesOpen(false);
                    }}
                  >
                    <a
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-blue-800 text-white"
                          : "text-white hover:bg-blue-800 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      )}
                    >
                      {item.name}
                    </a>

                    {/* Services Mega Menu */}
                    {item.name === "Services" && servicesOpen && (
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl z-50"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                          {/* Top Section */}
                          <div className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-b border-gray-200">
                            {servicesMenu.sections.map((section, idx) => (
                              <div key={idx}>
                                <h3 className="text-xl font-bold text-indigo-900 mb-1">
                                  {section.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {section.subtitle}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Categories Grid */}
                          <div className="grid grid-cols-4 gap-6 p-8">
                            {servicesMenu.categories.map((category, idx) => (
                              <div key={idx}>
                                <h4 className="text-base font-bold text-indigo-900 mb-4">
                                  {category.title}
                                </h4>
                                <ul className="space-y-2">
                                  {category.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                      <Link
                                        href={typeof link === 'object' ? link.href : '#'}
                                        className="text-sm text-gray-700 hover:text-indigo-600 transition-colors block"
                                      >
                                        {typeof link === 'object' ? link.name : link}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Industries Simple Dropdown */}
                    {item.name === "Industries" && industriesOpen && (
                      <div
                        className="absolute left-0 mt-2 w-56 z-50"
                        onMouseEnter={() => setIndustriesOpen(true)}
                        onMouseLeave={() => setIndustriesOpen(false)}
                      >
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                          <div className="py-2">
                            {industriesMenu.map((industry, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                              >
                                {industry}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-blue-800 text-white"
                    : "text-white hover:bg-blue-800 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
