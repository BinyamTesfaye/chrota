
import React, { useEffect, useState } from 'react';
import { PageView } from '../App';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-[0.06] pointer-events-none overflow-hidden">
           <svg viewBox="0 0 800 800" className="w-full h-full text-[#C5A07D]">
              <circle cx="600" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="600" cy="200" r="250" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="600" cy="200" r="350" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="600" cy="200" r="450" fill="none" stroke="currentColor" strokeWidth="1" />
           </svg>
        </div>
        <div className="absolute top-0 right-0 w-3/5 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1400" 
            alt="Community Support" 
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-[0.12]' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 py-12 lg:py-20 w-full">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          {/* Tagline */}
          <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-10">
            <span className="h-1 w-8 lg:w-10 bg-[#C5A07D] rounded-full"></span>
            <span className="text-[#C5A07D] font-black tracking-[0.2em] lg:tracking-[0.4em] uppercase text-[10px] sm:text-sm">
              CHROTA: Beneficence
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[100px] font-black text-[#1B3B5F] leading-[1] lg:leading-[0.95] mb-8 lg:mb-12 tracking-tighter uppercase">
            Beneficence <br/>
            <span className="text-[#1B3B5F]">in </span>
            <span className="text-[#C5A07D] relative inline-block">
              Action
              <span className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-2 lg:h-4 bg-[#C5A07D]/10 rounded-lg"></span>
            </span>
          </h1>

          {/* Mission Description */}
          <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed mb-10 lg:mb-16 max-w-2xl font-medium border-l-4 border-gray-100 pl-6 lg:pl-8">
            Developing healthy communities by addressing the integrated public health and development needs of vulnerable populations across Ethiopia.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <button 
              onClick={() => onNavigate('what-we-do')} 
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-[#1B3B5F] text-white font-black rounded-full shadow-2xl shadow-[#1B3B5F]/20 hover:bg-[#152e4a] transition-all hover:scale-105 uppercase tracking-widest text-xs lg:text-sm"
            >
              Our Strategy ❯
            </button>
            
            <button 
              onClick={() => onNavigate('history')} 
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-transparent border-2 border-[#1B3B5F] text-[#1B3B5F] font-black rounded-full hover:bg-gray-50 transition-all uppercase tracking-widest text-xs lg:text-sm text-center"
            >
              Read History
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
