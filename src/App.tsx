import React from 'react';
import { Shield, Code2, Search, Lock, ArrowRight, Github, TrendingUp, Zap, Target, Award, Play, CheckCircle2, Star, ChevronRight, Clock, Globe, ShieldCheck, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#111c2d] text-white">
      {/* Navigation */}
      <nav className="bg-[#1c2a3d] border-b border-[#2f3b4c] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Netguard</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors">Security</button>
            <button className="text-gray-400 hover:text-white transition-colors">SEO</button>
            <button className="text-gray-400 hover:text-white transition-colors">Development</button>
            <button className="text-gray-400 hover:text-white transition-colors">Solutions</button>
            <button className="text-gray-400 hover:text-white transition-colors">Contact</button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              Get Protected
            </button>
          </div>
          <button className="md:hidden text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
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
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-[#111c2d] hover:bg-[#1a2942] px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                    Security Audit <Shield className="w-5 h-5" />
                  </button>
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
              <button className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400">
                View All Solutions <ChevronRight className="w-4 h-4" />
              </button>
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
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg font-semibold">
                Get Protected Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

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
                <li className="hover:text-white cursor-pointer">Web Security</li>
                <li className="hover:text-white cursor-pointer">SEO Services</li>
                <li className="hover:text-white cursor-pointer">Development</li>
                <li className="hover:text-white cursor-pointer">Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Security</li>
                <li className="hover:text-white cursor-pointer">Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2f3b4c] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2024 Netguard.com. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#1c2a3d] p-8 rounded-xl hover:bg-[#243040] transition-colors border border-blue-500/20 hover:border-blue-500/40">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function SolutionCard({ icon, title, description, features, price }) {
  return (
    <div className="bg-[#243040] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all h-full flex flex-col border border-blue-500/20 hover:border-blue-500/40">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-500/10 rounded-full">
              {React.cloneElement(icon, { className: "w-8 h-8 text-blue-500" })}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
          <p className="text-gray-400 mb-6 text-center">{description}</p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-400">/month</span>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;