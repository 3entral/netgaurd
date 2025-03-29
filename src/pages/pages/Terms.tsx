import React from 'react';
import { Shield } from 'lucide-react';

export default function Terms() {
  return (
    <main>
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our services, you agree to be bound by these terms of service and all applicable laws and regulations.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access our services for personal, non-commercial use only.
            </p>

            <h2>3. Service Description</h2>
            <p>
              We provide web security, SEO optimization, and development services as described on our website.
            </p>

            <h2>4. Pricing and Payment</h2>
            <p>
              Prices for our services are as listed on our website. We reserve the right to modify pricing with notice.
            </p>

            <h2>5. User Responsibilities</h2>
            <p>
              Users must:
            </p>
            <ul>
              <li>Provide accurate account information</li>
              <li>Maintain the security of their account</li>
              <li>Comply with all applicable laws</li>
              <li>Use services as intended</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              Questions about these terms should be sent to legal@netguard.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}