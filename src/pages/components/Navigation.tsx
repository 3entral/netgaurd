import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-[#1c2a3d] border-b border-[#2f3b4c] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Netguard</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link>
          <Link to="/seo" className="text-gray-400 hover:text-white transition-colors">SEO</Link>
          <Link to="/development" className="text-gray-400 hover:text-white transition-colors">Development</Link>
          <Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            Get Protected
          </Link>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}