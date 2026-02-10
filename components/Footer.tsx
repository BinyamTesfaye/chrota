
import React from 'react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const LogoFooter: React.FC = () => (
  <div className="flex flex-col items-start">
    <svg viewBox="0 0 600 550" className="h-28 lg:h-36 w-auto">
      {/* Top Amharic Text */}
      <text x="300" y="60" textAnchor="middle" fontSize="32" fontWeight="900" fill="#C5A07D" fontFamily="serif">
        - ለጤናና ለልማት -
      </text>

      {/* Stylized Amharic Letters "ቸሮታ" */}
      <g fill="#1B3B5F">
        <path d="M60,140 L220,140 L220,175 L160,175 L160,210 L220,210 L220,245 L160,245 L160,280 L95,280 L95,175 L60,175 Z" />
        <path d="M250,140 L400,140 L400,240 Q400,280 340,280 L300,280 Q240,280 240,240 L240,140 M300,180 Q325,180 325,205 Q325,230 300,230 Q275,230 275,205 Q275,180 300,180 Z" />
        <path d="M430,140 L540,140 L540,175 L495,175 L495,280 L430,280 L430,175 L430,140 M460,210 L540,210 L540,245 L460,245 Z" />
      </g>

      {/* Hand Graphic */}
      <g transform="translate(300, 380)">
        <path d="M-220,0 Q-220,100 0,140 Q220,100 220,0 L220,-20 Q0,40 -220,-20 Z" fill="#1B3B5F" />
        <path d="M-140,-10 Q-100,30 -60,0 Q-40,20 -20,0 Q0,20 20,0 Q40,20 60,0 Q100,30 140,-10 L140,0 Q0,80 -140,0 Z" fill="#C5A07D" opacity="0.8" />
      </g>

      {/* CHROTA Text */}
      <text x="300" y="445" textAnchor="middle" fontSize="58" fontWeight="900" fill="#1B3B5F" fontFamily="Inter, sans-serif" letterSpacing="-2">
        CHROTA
      </text>

      {/* Bottom Curved Text */}
      <defs>
        <path id="curveFooter" d="M100,480 Q300,560 500,480" />
      </defs>
      <text fill="#1B3B5F" fontSize="24" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="1">
        <textPath xlinkHref="#curveFooter" startOffset="50%" textAnchor="middle">
          FOR HEALTH AND DEVELOPMENT
        </textPath>
      </text>
    </svg>
  </div>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
             <div className="mb-8">
                <LogoFooter />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-sm mb-12">
                CHROTA is a local non-governmental organization dedicated to improving health outcomes and fostering development across Ethiopia through research and community engagement.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <ul className="space-y-4 text-sm font-bold text-[#1B3B5F] underline decoration-gray-300">
                  <li><button onClick={() => onNavigate('partners')} className="hover:text-[#C5A07D] transition-colors">Partner with us</button></li>
                  <li><button onClick={() => onNavigate('what-we-do')} className="hover:text-[#C5A07D] transition-colors">Our Work</button></li>
                  <li><button onClick={() => onNavigate('who-we-are')} className="hover:text-[#C5A07D] transition-colors">About Us</button></li>
                  <li><button onClick={() => onNavigate('home')} className="hover:text-[#C5A07D] transition-colors">Impact</button></li>
                </ul>
              </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                   <h3 className="text-xl font-black text-[#1B3B5F] mb-6">Stay Informed</h3>
                   <p className="text-sm text-gray-500 mb-6">
                     Get the latest updates from the field directly to your inbox.
                   </p>
                   <div className="flex flex-col gap-2">
                     <input type="email" placeholder="Email Address" className="px-4 py-3 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-[#C5A07D] text-sm" />
                     <button className="px-6 py-3 bg-[#1B3B5F] text-white font-black text-xs tracking-widest uppercase rounded hover:bg-[#152e4a] transition-colors">SUBSCRIBE</button>
                   </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-8">
                  <div>
                    <h4 className="font-black text-[#1B3B5F] uppercase tracking-wider mb-3 text-xs">CHROTA Headquarters</h4>
                    <p className="font-medium text-gray-600 leading-relaxed">
                      Addis Ababa, Ethiopia<br />
                      Bole Sub-city, Woreda 03<br />
                      Megenagna Area
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-[#1B3B5F] uppercase tracking-wider text-xs">Contact Information</h4>
                    <p className="font-bold text-[#1B3B5F]">
                      <span className="text-[#C5A07D] mr-2">T:</span> +251 11 662 01 23
                    </p>
                    <p className="font-bold text-[#1B3B5F]">
                      <span className="text-[#C5A07D] mr-2">E:</span> info@chrota.org
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-100 text-[10px] text-gray-400 text-center uppercase tracking-[0.2em] font-black">
          &copy; {new Date().getFullYear()} CHROTA - Beneficence for Health and Development. Registered NGO in Ethiopia.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
