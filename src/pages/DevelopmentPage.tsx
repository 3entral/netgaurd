import React from 'react';
import { Code2, ArrowRight, Cpu, Zap, Server, Globe, Shield, Database, Smartphone, Cloud, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/Cards';

export default function DevelopmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">ISO 27001 Certified Development Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Custom Web Development Solutions
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Build secure, scalable, and high-performance web applications with our expert development team. We bring your ideas to life with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Start Project <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/consultation" className="bg-[#111c2d] hover:bg-[#1a2942] px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Free Consultation <Code2 className="w-5 h-5" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#111c2d] rounded-lg">
                  <div className="text-2xl font-bold text-blue-500">100+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-[#111c2d] rounded-lg">
                  <div className="text-2xl font-bold text-purple-500">50+</div>
                  <div className="text-sm text-gray-400">Expert Developers</div>
                </div>
                <div className="text-center p-4 bg-[#111c2d] rounded-lg">
                  <div className="text-2xl font-bold text-green-500">99%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200"
                alt="Web Development"
                className="rounded-xl w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use the latest technologies to build robust and scalable applications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-[#1c2a3d] rounded-lg text-center">
              <Code2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">React, Vue, Angular</p>
            </div>
            <div className="p-6 bg-[#1c2a3d] rounded-lg text-center">
              <Server className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">Node.js, Python, Java</p>
            </div>
            <div className="p-6 bg-[#1c2a3d] rounded-lg text-center">
              <Database className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-gray-400 text-sm">MongoDB, PostgreSQL</p>
            </div>
            <div className="p-6 bg-[#1c2a3d] rounded-lg text-center">
              <Cloud className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cloud</h3>
              <p className="text-gray-400 text-sm">AWS, Azure, GCP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#1c2a3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Development Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end web development solutions for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-500" />}
              title="Web Applications"
              description="Custom web apps with responsive design and optimal performance"
            />
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-purple-500" />}
              title="Mobile Development"
              description="Native and cross-platform mobile applications"
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-green-500" />}
              title="API Development"
              description="RESTful and GraphQL API design and implementation"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-yellow-500" />}
              title="Database Design"
              description="Scalable database architecture and optimization"
            />
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-red-500" />}
              title="Cloud Solutions"
              description="Cloud infrastructure setup and management"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-indigo-500" />}
              title="Security"
              description="Built-in security measures and best practices"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach to deliver high-quality solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#1c2a3d] p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Planning</h3>
              <p className="text-gray-400">Requirements gathering and project planning</p>
            </div>
            <div className="bg-[#1c2a3d] p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Development</h3>
              <p className="text-gray-400">Agile development with regular updates</p>
            </div>
            <div className="bg-[#1c2a3d] p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Testing</h3>
              <p className="text-gray-400">Comprehensive testing and quality assurance</p>
            </div>
            <div className="bg-[#1c2a3d] p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Deployment</h3>
              <p className="text-gray-400">Smooth deployment and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's turn your ideas into reality with our expert development team. Get in touch for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg font-semibold">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="bg-[#111c2d] hover:bg-[#1a2942] px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg font-semibold">
                View Portfolio <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}