
import React, { useState } from 'react';
import { PageView } from '../App';

interface CTAProps {
  onNavigate: (page: PageView) => void;
}

const CTASection: React.FC<CTAProps> = ({ onNavigate }) => {
  const [hoveredSide, setHoveredSide] = useState<'careers' | 'partners' | null>(null);

  return (
    <section className="bg-white overflow-hidden relative">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[800px] relative w-full overflow-hidden">
        
        {/* Join CHROTA Panel */}
        <div 
          onMouseEnter={() => setHoveredSide('careers')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative h-[450px] lg:h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center overflow-hidden w-full
            ${hoveredSide === 'careers' ? 'lg:w-full z-20' : hoveredSide === 'partners' ? 'lg:w-0' : 'lg:w-1/2 z-10'}
          `}
        >
          <div className="absolute inset-0 lg:w-screen h-full pointer-events-none overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
              className={`w-full h-full object-cover transition-all duration-1000 transform
                ${hoveredSide === 'careers' ? 'scale-100 opacity-100' : 'scale-110 opacity-40 grayscale-[20%] lg:opacity-30 lg:grayscale-[50%]'}
              `}
              alt="Join our team"
              style={{ minWidth: '100vw' }}
            />
            <div className={`absolute inset-0 bg-[#1B3B5F] transition-opacity duration-1000 ${hoveredSide === 'careers' ? 'opacity-60' : 'opacity-80 lg:opacity-90'}`}></div>
          </div>

          <div className={`relative z-30 px-6 lg:px-12 text-center transition-all duration-700 delay-100 ${hoveredSide === 'partners' ? 'lg:opacity-0 lg:scale-90 lg:blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
            <div className="mb-4 lg:mb-6 inline-block">
               <span className="text-[#C5A07D] font-black tracking-[0.3em] lg:tracking-[0.5em] uppercase text-[10px] lg:text-xs">Opportunity</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[120px] font-black text-white leading-none tracking-tighter uppercase mb-6 lg:mb-8">
              Join <br/> CHROTA
            </h2>
            <div className={`transition-all duration-500 max-w-xl mx-auto lg:opacity-0 lg:translate-y-8 ${hoveredSide === 'careers' ? 'lg:opacity-100 lg:translate-y-0' : 'opacity-100'}`}>
              <p className="text-white/80 text-base lg:text-xl mb-8 lg:mb-12 font-medium leading-relaxed">
                Be part of a legacy focused on beneficence. We are seeking visionaries to help shape the future of health in Ethiopia.
              </p>
              <button 
                onClick={() => onNavigate('who-we-are')} 
                className="px-10 lg:px-12 py-4 lg:py-6 bg-white text-[#1B3B5F] font-black uppercase tracking-widest text-xs lg:text-sm rounded-full hover:bg-[#C5A07D] hover:text-white transition-all duration-300 shadow-2xl"
              >
                Careers ❯
              </button>
            </div>
          </div>
          <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-white/10 z-40"></div>
        </div>

        {/* Partner with us Panel */}
        <div 
          onMouseEnter={() => setHoveredSide('partners')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative h-[450px] lg:h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center overflow-hidden w-full
            ${hoveredSide === 'partners' ? 'lg:w-full z-20' : hoveredSide === 'careers' ? 'lg:w-0' : 'lg:w-1/2 z-10'}
          `}
        >
          <div className="absolute inset-0 lg:w-screen h-full pointer-events-none overflow-hidden right-0">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" 
              className={`w-full h-full object-cover transition-all duration-1000 transform
                ${hoveredSide === 'partners' ? 'scale-100 opacity-100' : 'scale-110 opacity-40 grayscale-[20%] lg:opacity-30 lg:grayscale-[50%]'}
              `}
              alt="Partner with us"
              style={{ minWidth: '100vw', position: 'absolute', right: 0 }}
            />
            <div className={`absolute inset-0 bg-[#C5A07D] transition-opacity duration-1000 ${hoveredSide === 'partners' ? 'opacity-60' : 'opacity-80 lg:opacity-90'}`}></div>
          </div>

          <div className={`relative z-30 px-6 lg:px-12 text-center transition-all duration-700 delay-100 ${hoveredSide === 'careers' ? 'lg:opacity-0 lg:scale-90 lg:blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
             <div className="mb-4 lg:mb-6 inline-block">
               <span className="text-[#1B3B5F] font-black tracking-[0.3em] lg:tracking-[0.5em] uppercase text-[10px] lg:text-xs">Collaboration</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[120px] font-black text-white leading-none tracking-tighter uppercase mb-6 lg:mb-8">
              Partner <br/> With Us
            </h2>
            <div className={`transition-all duration-500 max-w-xl mx-auto lg:opacity-0 lg:translate-y-8 ${hoveredSide === 'partners' ? 'lg:opacity-100 lg:translate-y-0' : 'opacity-100'}`}>
              <p className="text-white/90 text-base lg:text-xl mb-8 lg:mb-12 font-medium leading-relaxed">
                Strategic alliances are the backbone of sustainable development. Let's create measurable impact together.
              </p>
              <button 
                onClick={() => onNavigate('partners')} 
                className="px-10 lg:px-12 py-4 lg:py-6 bg-[#1B3B5F] text-white font-black uppercase tracking-widest text-xs lg:text-sm rounded-full hover:bg-white hover:text-[#1B3B5F] transition-all duration-300 shadow-2xl"
              >
                Inquire ❯
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Center marker - desktop only */}
      <div className={`hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-500 pointer-events-none ${hoveredSide ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-24 h-24 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="w-12 h-px bg-white/40"></div>
          <div className="w-1 h-1 bg-[#C5A07D] rounded-full mx-2"></div>
          <div className="w-12 h-px bg-white/40"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
