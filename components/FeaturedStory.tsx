
import React from 'react';

const FeaturedStory: React.FC = () => {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-block px-4 py-1 bg-[#C5A07D]/10 text-[#C5A07D] rounded-full text-xs font-black tracking-widest uppercase">
              Major Public Health Threat
            </div>
            <h2 className="text-5xl font-black text-[#1B3B5F] leading-tight tracking-tight">
              Eliminating Avoidable Blindness in Ethiopia
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-[#C5A07D] pl-6">
              "Ethiopia accounts for the world’s largest burden of trachoma, with 61 million people living in endemic areas—59% of the global burden."
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              CHROTA aims to address the root causes of trachoma using the WHO SAFE strategy. We bridge the gap between wanting to be healthy and being capable of sustaining the requirements of hygiene and environmental standards.
            </p>
            <div className="pt-6">
               <a href="#" className="inline-flex items-center gap-2 text-[#1B3B5F] font-black text-lg group">
                  Learn about our clinical trials 
                  <span className="text-[#C5A07D] group-hover:translate-x-2 transition-transform duration-300">❯❯</span>
               </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C5A07D]/5 rounded-full blur-3xl"></div>
             <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden border-[15px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=800" 
                  alt="Health Professional with Patient" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
             </div>
             {/* Stats Overlay */}
             <div className="absolute -bottom-8 -left-8 bg-[#1B3B5F] p-10 rounded-2xl shadow-2xl z-20 max-w-[260px]">
                <div className="text-[#C5A07D] text-4xl font-black mb-1">59%</div>
                <div className="text-white/80 text-sm font-bold uppercase tracking-widest">Global Trachoma Burden</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
