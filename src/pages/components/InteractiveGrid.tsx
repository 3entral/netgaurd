import React, { useState } from 'react';
import { Shield, Lock, Search, Code2, Globe, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InteractiveGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      icon: Shield,
      label: 'Security',
      color: 'blue',
      description: 'Advanced threat protection and real-time monitoring for your digital assets',
      link: '/security'
    },
    {
      icon: Lock,
      label: 'Protection',
      color: 'indigo',
      description: 'Enterprise-grade DDoS protection and firewall solutions',
      link: '/solutions#protection'
    },
    {
      icon: Search,
      label: 'SEO',
      color: 'purple',
      description: 'Boost your online visibility with data-driven SEO strategies',
      link: '/seo'
    },
    {
      icon: Code2,
      label: 'Development',
      color: 'green',
      description: 'Custom web development with security-first approach',
      link: '/development'
    },
    {
      icon: Globe,
      label: 'Global CDN',
      color: 'cyan',
      description: 'Lightning-fast content delivery across worldwide network',
      link: '/solutions#cdn'
    },
    {
      icon: Database,
      label: 'Storage',
      color: 'teal',
      description: 'Secure cloud storage with automated backup solutions',
      link: '/solutions#storage'
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="relative group"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="p-8 bg-[#1c2a3d] rounded-xl border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 relative z-10 h-full">
            <item.icon className={`w-8 h-8 mb-4 text-${item.color}-500`} />
            <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
            <p className="text-gray-400 text-sm mb-4">{item.description}</p>
            <div className="flex items-center text-blue-500 text-sm group-hover:translate-x-1 transition-transform">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
          {activeIndex === index && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10 animate-pulse" />
          )}
          {activeIndex === index && (
            <div className="absolute inset-0 border-2 border-blue-500/40 rounded-xl -z-5 animate-border-flow" />
          )}
        </Link>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
    </div>
  );
}