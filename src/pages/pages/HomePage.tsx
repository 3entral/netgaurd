import React, { useState } from 'react';
import { Shield, Code2, Search, Lock, ArrowRight, ShieldCheck, CheckCircle2, Terminal, Zap, Globe, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard, SolutionCard } from '../components/Cards';
import InteractiveGrid from '../components/InteractiveGrid';
import ThemeToggle from '../components/ThemeToggle';

export default function HomePage() {
  const [theme, setTheme] = useState<'v1' | 'v2'>('v2');

  return (
    <>
      <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'v1' ? 'v2' : 'v1')} />
      <main className={theme === 'v2' ? 'bg-gradient-to-b from-[#111c2d] to-[#0c1421]' : 'bg-[#111c2d]'}>
        {/* Hero Section - Version 2 Style */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Enterprise Security
                  </span>
                  <br />
                  <span className="text-white">&</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Development
                  </span>
                </h1>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
                  Secure your digital presence with enterprise-grade protection. Build, deploy, and scale with confidence using our comprehensive security solutions.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <Link
                    to="/get-started"
                    className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/solutions"
                    className="px-8 py-4 bg-[#1c2a3d] rounded-xl font-semibold hover:bg-[#243040] transition-colors border border-blue-500/20 text-lg"
                  >
                    View Solutions
                  </Link>
                </div>
              </div>

              {/* Terminal-like Feature Display - Moved to right side */}
              <div className="relative">
                <div className="bg-[#1c2a3d]/80 backdrop-blur-xl rounded-xl border border-blue-500/20 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-sm">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Terminal className="w-4 h-4" />
                      <span>Initializing security protocols...</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Firewall activated</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-purple-400">
                      <Shield className="w-4 h-4" />
                      <span>DDoS protection enabled</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-blue-400">
                      <Lock className="w-4 h-4" />
                      <span>SSL certificates verified</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-green-400">
                      <Zap className="w-4 h-4" />
                      <span>Performance optimization complete</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 inset-0 blur-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          </div>
        </div>

        {/* Rest of the sections remain the same */}
        {/* Features Grid with Animation */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive security and development solutions for modern businesses
              </p>
            </div>
            <InteractiveGrid />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#1c2a3d]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-8 border border-blue-500/20 rounded-xl bg-[#1c2a3d]">
                <Zap className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-500 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center p-8 border border-purple-500/20 rounded-xl bg-[#1c2a3d]">
                <Globe className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-500 mb-2">150+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center p-8 border border-green-500/20 rounded-xl bg-[#1c2a3d]">
                <Database className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-500 mb-2">10PB+</div>
                <div className="text-gray-400">Data Protected</div>
              </div>
              <div className="text-center p-8 border border-yellow-500/20 rounded-xl bg-[#1c2a3d]">
                <Server className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </section>

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
    </>
  );
}