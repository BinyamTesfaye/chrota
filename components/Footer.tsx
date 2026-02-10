
import React from 'react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const LogoFooter: React.FC = () => (
  <div className="flex flex-col items-start">
    <img
      src="/logo.jpg"
      alt="CHROTA Logo"
      className="h-28 lg:h-36 w-auto object-contain"
    />
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
