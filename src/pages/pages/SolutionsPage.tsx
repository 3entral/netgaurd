import React from 'react';
import { Shield, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SolutionCard } from '../components/Cards';

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Comprehensive security, SEO, and development solutions tailored to your needs
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard
              icon={<Shield />}
              title="Basic Security"
              description="Essential protection for small websites"
              features={["Firewall Protection", "SSL Certificate", "Malware Scanning"]}
              price={99}
            />
            <SolutionCard
              icon={<Lock />}
              title="Advanced Security"
              description="Enhanced protection for growing businesses"
              features={["DDoS Protection", "Real-time Monitoring", "Vulnerability Assessment"]}
              price={199}
            />
            <SolutionCard
              icon={<Shield />}
              title="Enterprise Security"
              description="Complete protection for large organizations"
              features={["Custom Security Rules", "24/7 Support", "Advanced Threat Detection"]}
              price={499}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-6">Find Your Perfect Solution</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Not sure which solution is right for you? Contact us for a personalized recommendation
            </p>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg font-semibold">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}