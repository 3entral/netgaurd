import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1c2a3d] border-t border-[#2f3b4c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">Netguard</span>
            </Link>
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
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/security" className="hover:text-white">Security</Link></li>
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
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/security" className="hover:text-white">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}