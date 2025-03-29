import React from 'react';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function GetStartedPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Get Started with Netguard
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Choose the right security package for your business and get protected today
            </p>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-[#1c2a3d] rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <h2 className="text-2xl font-bold mb-4">Basic Security</h2>
              <p className="text-gray-400 mb-6">Perfect for small websites and personal blogs</p>
              <div className="text-3xl font-bold mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <Feature text="Firewall Protection" />
                <Feature text="SSL Certificate" />
                <Feature text="Malware Scanning" />
                <Feature text="Basic Support" />
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Advanced Package */}
            <div className="bg-[#1c2a3d] rounded-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h2 className="text-2xl font-bold mb-4">Advanced Security</h2>
              <p className="text-gray-400 mb-6">Ideal for growing businesses and e-commerce</p>
              <div className="text-3xl font-bold mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <Feature text="DDoS Protection" />
                <Feature text="Real-time Monitoring" />
                <Feature text="Vulnerability Assessment" />
                <Feature text="24/7 Priority Support" />
                <Feature text="Performance Optimization" />
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-[#1c2a3d] rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <h2 className="text-2xl font-bold mb-4">Enterprise Security</h2>
              <p className="text-gray-400 mb-6">For large organizations requiring maximum security</p>
              <div className="text-3xl font-bold mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <Feature text="Custom Security Rules" />
                <Feature text="Advanced Threat Detection" />
                <Feature text="Dedicated Support Team" />
                <Feature text="Custom Integration" />
                <Feature text="Security Consultation" />
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                Contact Sales <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1c2a3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All Plans Include</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every security package comes with our core features to ensure your website's protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-[#243040] rounded-lg border border-blue-500/20">
                <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-gray-300">
      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
      {text}
    </li>
  );
}

const commonFeatures = [
  {
    icon: Shield,
    title: "24/7 Monitoring",
    description: "Continuous monitoring of your website's security status and instant alerts"
  },
  {
    icon: Shield,
    title: "Automatic Updates",
    description: "Regular security updates and patches to protect against new threats"
  },
  {
    icon: Shield,
    title: "Backup & Recovery",
    description: "Daily backups and quick recovery options to keep your data safe"
  },
  {
    icon: Shield,
    title: "Security Reports",
    description: "Detailed monthly reports on security status and threats blocked"
  },
  {
    icon: Shield,
    title: "Technical Support",
    description: "Expert support team available to help with any security issues"
  },
  {
    icon: Shield,
    title: "SSL Management",
    description: "Automated SSL certificate deployment and renewal"
  }
];