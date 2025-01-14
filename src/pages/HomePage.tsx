import React from 'react';
import { Shield, Code2, Search, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the existing FeatureCard and SolutionCard components
import { FeatureCard, SolutionCard } from '../components/Cards';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-medium">Trusted by 10,000+ Websites</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Secure Your Digital Presence
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Comprehensive web security, SEO optimization, and development solutions to protect and grow your online business.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/security-audit" className="bg-[#111c2d] hover:bg-[#1a2942] px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Security Audit <Shield className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-blue-500">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">100%</div>
                  <div className="text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="Cybersecurity"
                className="rounded-xl w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for your website's security, visibility, and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Web Security"
              description="Advanced protection against cyber threats, malware, and DDoS attacks"
            />
            <FeatureCard
              icon={<Search className="w-8 h-8 text-purple-500" />}
              title="SEO Optimization"
              description="Boost your search rankings and increase organic traffic"
            />
            <FeatureCard
              icon={<Code2 className="w-8 h-8 text-green-500" />}
              title="Development"
              description="Custom web development solutions with security-first approach"
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-[#1c2a3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Security Solutions</h2>
              <p className="text-gray-400">Protect your business with our comprehensive security packages</p>
            </div>
            <Link to="/solutions" className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400">
              View All Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard
              icon={<Shield />}
              title="Basic Security"
              description="Essential protection for small websites"
              features={["Firewall Protection", "SSL Certificate", "Malware Scanning"]}
              price={99}
            />
            <SolutionCard
              icon={<ShieldCheck />}
              title="Advanced Security"
              description="Enhanced protection for growing businesses"
              features={["DDoS Protection", "Real-time Monitoring", "Vulnerability Assessment"]}
              price={199}
            />
            <SolutionCard
              icon={<Lock />}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Website?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Get started with our comprehensive security solutions and protect your digital assets
            </p>
            <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg font-semibold">
              Get Protected Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}