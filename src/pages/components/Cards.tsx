import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#1c2a3d] p-8 rounded-xl hover:bg-[#243040] transition-colors border border-blue-500/20 hover:border-blue-500/40">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export function SolutionCard({ icon, title, description, features, price }) {
  return (
    <div className="bg-[#243040] rounded-xl overflow-hidden transition-all h-full flex flex-col border border-blue-500/20 hover:border-blue-500/40">
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