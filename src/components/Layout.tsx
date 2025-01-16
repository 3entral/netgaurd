import React from 'react';
import { Shield } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#111c2d] text-white">
      {/* Navigation */}
      <nav className="bg-[#1c2a3d] border-b border-[#2f3b4c] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Netguard</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link>
            <Link to="/seo" className="text-gray-400 hover:text-white transition-colors">SEO</Link>
            <Link to="/development" className="text-gray-400 hover:text-white transition-colors">Development</Link>
            <Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link>
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

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-[#1c2a3d] border-t border-[#2f3b4c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold">Netguard</span>
              </div>
              <p className="text-gray-400">
                Protecting your digital presence with advanced security solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/security" className="hover:text-white">Web Security</Link></li>
                <li><Link to="/seo" className="hover:text-white">SEO Services</Link></li>
                <li><Link to="/development" className="hover:text-white">Development</Link></li>
                <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/security-policy" className="hover:text-white">Security</Link></li>
                <li><Link to="/compliance" className="hover:text-white">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2f3b4c] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2024 Netguard.com. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-400">
              <Link to="/terms" className="hover:text-white">Terms</Link>
              <Link to="/privacy" className="hover:text-white">Privacy</Link>
              <Link to="/security-policy" className="hover:text-white">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}