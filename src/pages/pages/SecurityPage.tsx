import React from 'react';
import { Shield, Lock, ArrowRight, AlertTriangle, Zap, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/Cards';

export default function SecurityPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Enterprise-Grade Web Security
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Protect your website from cyber threats with our advanced security solutions. We offer comprehensive protection against malware, DDoS attacks, and data breaches.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Get Protected <ArrowRight className="w-5 h-5" />
                </Link>
                
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
                alt="Web Security"
                className="rounded-xl w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Security Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our security solutions provide complete protection for your website
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Firewall Protection"
              description="Advanced WAF with real-time threat detection and blocking"
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-purple-500" />}
              title="DDoS Protection"
              description="Enterprise-grade DDoS mitigation and traffic filtering"
            />
            <FeatureCard
              icon={<AlertTriangle className="w-8 h-8 text-yellow-500" />}
              title="Malware Detection"
              description="Continuous scanning and removal of malicious code"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-green-500" />}
              title="SSL Management"
              description="Automated SSL certificate deployment and renewal"
            />
            <FeatureCard
              icon={<Server className="w-8 h-8 text-red-500" />}
              title="Backup & Recovery"
              description="Automated backups and quick disaster recovery"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-indigo-500" />}
              title="Access Control"
              description="Advanced user authentication and authorization"
            />
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-[#1c2a3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 border border-blue-500/20 rounded-xl">
              <div className="text-4xl font-bold text-blue-500 mb-2">10M+</div>
              <div className="text-gray-400">Threats Blocked</div>
            </div>
            <div className="text-center p-8 border border-purple-500/20 rounded-xl">
              <div className="text-4xl font-bold text-purple-500 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center p-8 border border-green-500/20 rounded-xl">
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
            <div className="text-center p-8 border border-yellow-500/20 rounded-xl">
              <div className="text-4xl font-bold text-yellow-500 mb-2">5000+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Website?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Get started with our security solutions and protect your digital assets from cyber threats
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