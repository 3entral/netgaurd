import React from 'react';
import { Search, ArrowRight, TrendingUp, Globe, Target, ChevronRight, BarChart, Users, Award, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/Cards';

export default function SeoPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Top Rated SEO Agency 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Boost Your Online Visibility
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Improve your search engine rankings and drive more organic traffic with our comprehensive SEO solutions. Our data-driven approach ensures sustainable growth for your business.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Start Optimization <ArrowRight className="w-5 h-5" />
                </Link>
                
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#111c2d] rounded-lg">
                  <div className="text-2xl font-bold text-blue-500">300%</div>
                  <div className="text-sm text-gray-400">Traffic Increase</div>
                </div>
                <div className="text-center p-4 bg-[#111c2d] rounded-lg">
                  <div className="text-2xl font-bold text-purple-500">1000+</div>
                  <div className="text-sm text-gray-400">Keywords Ranked</div>
                </div>
                <div className="text-center p-4 bg-[#111c2d] rounded-lg">
                  <div className="text-2xl font-bold text-green-500">95%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="SEO Analytics"
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
            <h2 className="text-3xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive SEO solutions to improve your website's visibility and rankings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="w-8 h-8 text-blue-500" />}
              title="Keyword Optimization"
              description="Strategic keyword research and implementation to target high-value search terms"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-purple-500" />}
              title="Performance Analysis"
              description="In-depth analytics and performance tracking with monthly reports"
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-green-500" />}
              title="Content Strategy"
              description="SEO-optimized content creation and comprehensive content planning"
            />
            <FeatureCard
              icon={<BarChart className="w-8 h-8 text-yellow-500" />}
              title="Technical SEO"
              description="Website optimization for search engines including speed and structure"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-red-500" />}
              title="Local SEO"
              description="Boost your local presence and attract nearby customers"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-indigo-500" />}
              title="Link Building"
              description="High-quality backlink acquisition from authoritative sources"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1c2a3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative p-6 bg-[#243040] rounded-lg border border-blue-500/20">
              <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Audit & Analysis</h3>
              <p className="text-gray-400">Comprehensive website analysis and competitor research</p>
            </div>
            <div className="relative p-6 bg-[#243040] rounded-lg border border-blue-500/20">
              <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Strategy Development</h3>
              <p className="text-gray-400">Custom SEO strategy based on your goals and market</p>
            </div>
            <div className="relative p-6 bg-[#243040] rounded-lg border border-blue-500/20">
              <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Implementation</h3>
              <p className="text-gray-400">Executing optimizations and content strategies</p>
            </div>
            <div className="relative p-6 bg-[#243040] rounded-lg border border-blue-500/20">
              <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Monitor & Adjust</h3>
              <p className="text-gray-400">Continuous monitoring and strategy refinement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Real Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what our clients have achieved with our SEO services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1c2a3d] p-6 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-500 mb-2">+150%</div>
              <h3 className="text-xl font-semibold mb-2">Organic Traffic</h3>
              <p className="text-gray-400">E-commerce client achieved 150% increase in organic traffic within 6 months</p>
            </div>
            <div className="bg-[#1c2a3d] p-6 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-purple-500 mb-2">#1</div>
              <h3 className="text-xl font-semibold mb-2">Rankings</h3>
              <p className="text-gray-400">Tech startup reached #1 position for 50+ target keywords</p>
            </div>
            <div className="bg-[#1c2a3d] p-6 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-green-500 mb-2">200%</div>
              <h3 className="text-xl font-semibold mb-2">ROI</h3>
              <p className="text-gray-400">Average return on investment for our SEO clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Rankings?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Get started with our SEO solutions and boost your online presence. Schedule a free consultation today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg font-semibold">
                Start Optimization Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/case-studies" className="bg-[#111c2d] hover:bg-[#1a2942] px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg font-semibold">
                View Case Studies <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}