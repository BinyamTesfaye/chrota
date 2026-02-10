
import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="h-[60%] lg:h-1/2 bg-white"></div>
        <div className="h-[40%] lg:h-1/2 bg-[#C5A07D]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 pb-20 lg:pb-32">
        <div className="relative">
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[1.5rem] lg:rounded-[3rem] shadow-2xl lg:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] bg-gray-200">
            <img 
               src="/image.jpg"  
              alt="Community Integrated Development" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8 lg:mt-12 max-w-5xl">
            <div className="border-l-4 lg:border-l-8 border-white pl-6 lg:pl-10">
              <h3 className="text-white text-xl sm:text-3xl font-black mb-3 lg:mb-4 uppercase tracking-tighter">Community-Based Integrated Development</h3>
              <p className="text-white text-base sm:text-xl lg:text-2xl font-bold leading-relaxed italic">
                Our model site approach is built on community leadership and ownership. We move communities from being mere beneficiaries to becoming active owners of development projects.
                <span className="block mt-4 font-normal text-xs lg:text-base opacity-90 uppercase tracking-[0.2em] lg:tracking-[0.3em]">Beneficence & Sustainability</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
