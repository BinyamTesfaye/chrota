
import React, { useState } from 'react';

const MapSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  // Refined coordinates for Ethiopia
  const ethiopiaPos = { top: '50.5%', left: '58%' };

  return (
    <section className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#C5A07D] rounded-full blur-[180px] opacity-[0.07]"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Content Panel */}
          <div className="lg:col-span-5 space-y-10 lg:space-y-12 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-4 mb-4 lg:mb-6">
                <span className="h-px w-8 lg:w-12 bg-[#C5A07D]"></span>
                <span className="text-[#C5A07D] font-black tracking-[0.2em] lg:tracking-[0.3em] uppercase text-[10px] lg:text-xs">
                  Regional Operations
                </span>
                <span className="hidden lg:block h-px w-8 lg:w-12 bg-[#C5A07D]"></span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white leading-[1] lg:leading-[0.95] tracking-tighter mb-6 lg:mb-8">
                Impact <br/>
                <span className="text-[#C5A07D] italic tracking-normal">Focused.</span>
              </h2>
              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-[#C5A07D]/20 pl-0 lg:pl-8">
                CHROTA's strategic headquarters in Addis Ababa serves as the hub for a nationwide network of health and development initiatives.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="group bg-white/5 border border-white/10 p-6 lg:p-8 rounded-3xl hover:bg-white/[0.08] hover:border-[#C5A07D]/40 transition-all duration-500">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#C5A07D]"></div>
                  <h3 className="text-white font-black text-lg uppercase tracking-tight">National Reach</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm font-medium">
                  Scalable implementation models currently deployed across multiple regional states, targeting high-prevalence endemic areas.
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-white">100%</div>
                  <div className="text-[10px] text-[#C5A07D] font-black tracking-widest uppercase mt-1">Ethiopian Led</div>
                </div>
                <div className="w-px h-10 lg:h-12 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-white">Regional</div>
                  <div className="text-[10px] text-[#C5A07D] font-black tracking-widest uppercase mt-1">Impact</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Panel */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
            <div className="relative w-full opacity-30 select-none pointer-events-none">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
                className="w-full h-auto filter brightness-200 contrast-125"
                alt=""
              />
            </div>

            {/* Target System */}
            <div className="absolute" style={{ top: ethiopiaPos.top, left: ethiopiaPos.left }}>
              <div className="absolute -inset-12 lg:-inset-24 rounded-full border border-[#C5A07D]/20 animate-[ping_3s_linear_infinite]"></div>
              <div className="absolute inset-0 bg-[#C5A07D] rounded-full blur-2xl opacity-60 scale-[3]"></div>
              
              <div 
                className="relative group cursor-pointer z-20"
                onClick={() => setIsHovered(!isHovered)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-[4px] lg:border-[5px] transition-all duration-700 flex items-center justify-center
                  ${isHovered 
                    ? 'bg-[#C5A07D] border-white scale-110 lg:scale-125 shadow-[0_0_60px_rgba(197,160,125,0.8)]' 
                    : 'bg-white border-[#C5A07D] scale-100 shadow-[0_0_20px_rgba(197,160,125,0.4)]'}
                `}>
                  <div className={`w-2 h-2 rounded-full transition-colors ${isHovered ? 'bg-white' : 'bg-[#C5A07D]'}`}></div>
                </div>

                {/* Popover */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-8 lg:mb-12 transition-all duration-500 w-[280px] lg:w-[340px]
                  ${isHovered ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 translate-y-6 scale-95 invisible'}`}>
                  
                  <div className="relative bg-[#1B3B5F] rounded-[1.5rem] lg:rounded-[2.5rem] p-6 lg:p-8 shadow-2xl border border-white/10">
                    <div className="relative z-10 text-center lg:text-left">
                      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-4 lg:mb-6 gap-2">
                        <div>
                          <h4 className="text-white font-black text-2xl lg:text-3xl tracking-tighter uppercase leading-none">Ethiopia</h4>
                          <p className="text-[#C5A07D] text-[10px] font-black tracking-widest uppercase mt-1">Operations Center</p>
                        </div>
                        <div className="bg-white/10 px-3 py-1 rounded-full text-[10px] text-white font-bold whitespace-nowrap">ACTIVE</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[10px] lg:text-xs py-2 border-b border-white/10">
                          <span className="text-white/60 font-bold uppercase">Headquarters</span>
                          <span className="text-white font-black">Addis Ababa</span>
                        </div>
                        <p className="text-white/50 text-[10px] lg:text-[11px] leading-relaxed pt-1">
                          Specialized in integrated public health solutions and community-led ownership.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-[#1B3B5F] rotate-45 absolute -bottom-3 left-1/2 -translate-x-1/2 border-r border-b border-white/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
