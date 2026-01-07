import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, colSpan = "col-span-1" }) => {
  return (
    <div className={`${colSpan} group relative p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500`}>
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 text-white/80 group-hover:text-white group-hover:border-white/30 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="flex items-center text-xs font-medium text-white/50 group-hover:text-white transition-colors uppercase tracking-wider">
          자세히 보기
          <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;