
import React, { useState, useRef, useEffect } from 'react';
import { PageView } from '../App';

interface MenuContent {
  page: PageView;
  links: { label: string; page: PageView; section?: string }[];
  card: { title: string; image: string };
}

interface HeaderProps {
  onNavigate: (page: PageView) => void;
}

const Logo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className="flex items-center gap-2 h-full outline-none text-left py-2">
    <svg viewBox="0 0 600 550" className="h-14 lg:h-20 w-auto drop-shadow-sm">
      {/* Top Amharic Text */}
      <text x="300" y="60" textAnchor="middle" fontSize="32" fontWeight="900" fill="#C5A07D" fontFamily="serif">
        - ለጤናና ለልማት -
      </text>

      {/* Stylized Amharic Letters "ቸሮታ" (Approximate shapes) */}
      <g fill="#1B3B5F">
        {/* Letter 1 - Left */}
        <path d="M60,140 L220,140 L220,175 L160,175 L160,210 L220,210 L220,245 L160,245 L160,280 L95,280 L95,175 L60,175 Z" />
        {/* Letter 2 - Middle with Circle */}
        <path d="M250,140 L400,140 L400,240 Q400,280 340,280 L300,280 Q240,280 240,240 L240,140 M300,180 Q325,180 325,205 Q325,230 300,230 Q275,230 275,205 Q275,180 300,180 Z" />
        {/* Letter 3 - Right */}
        <path d="M430,140 L540,140 L540,175 L495,175 L495,280 L430,280 L430,175 L430,140 M460,210 L540,210 L540,245 L460,245 Z" />
      </g>

      {/* Hand Graphic */}
      <g transform="translate(300, 380)">
        {/* Navy Hand Shell */}
        <path d="M-220,0 Q-220,100 0,140 Q220,100 220,0 L220,-20 Q0,40 -220,-20 Z" fill="#1B3B5F" />
        {/* Brown Hand Inner */}
        <path d="M-140,-10 Q-100,30 -60,0 Q-40,20 -20,0 Q0,20 20,0 Q40,20 60,0 Q100,30 140,-10 L140,0 Q0,80 -140,0 Z" fill="#C5A07D" opacity="0.8" />
      </g>

      {/* CHROTA Text */}
      <text x="300" y="445" textAnchor="middle" fontSize="58" fontWeight="900" fill="#1B3B5F" fontFamily="Inter, sans-serif" letterSpacing="-2">
        CHROTA
      </text>

      {/* Bottom Curved Text */}
      <defs>
        <path id="curve" d="M100,480 Q300,560 500,480" />
      </defs>
      <text fill="#1B3B5F" fontSize="24" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="1">
        <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
          FOR HEALTH AND DEVELOPMENT
        </textPath>
      </text>
    </svg>
  </button>
);

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuData: Record<string, MenuContent> = {
    'Who we are': {
      page: 'who-we-are',
      links: [
        { label: 'Overview', page: 'who-overview' },
        { label: 'Our Values', page: 'who-values' },
        { label: 'Our Principles', page: 'who-principles' }
      ],
      card: { title: 'Our Core Identity', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' }
    },
    'What we do': {
      page: 'what-we-do',
      links: [
        { label: 'Maternal & Child Health', page: 'what-maternal' },
        { label: 'Nutrition & Food Security', page: 'what-nutrition' },
        { label: 'Avoidable Blindness', page: 'what-blindness' },
        { label: 'Disease Control', page: 'what-disease' },
        { label: 'Climate Change', page: 'what-climate' }
      ],
      card: { title: 'Impact Areas', image: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800' }
    },
    'Our Approach': {
      page: 'our-approach',
      links: [
        { label: 'Community Ownership', page: 'approach-ownership' },
        { label: 'Integrated Development', page: 'approach-integrated' },
        { label: 'Participatory Strategy', page: 'approach-participatory' }
      ],
      card: { title: 'The Implementation Model', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800' }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setActiveMenu(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white" ref={menuRef}>
      {/* Utility Bar (Desktop Only) */}
      <div className="hidden lg:flex justify-center bg-[#1B3B5F]">
        <div className="max-w-7xl w-full flex justify-end">
          <div className="flex items-center">
            <button className="px-6 py-2 text-white text-[11px] font-black hover:bg-[#152e4a] transition-colors flex items-center gap-2 border-r border-white/10 uppercase tracking-[0.2em]">
              Careers
            </button>
            <button className="px-6 py-2 text-white text-[11px] font-black hover:bg-[#152e4a] transition-colors flex items-center gap-2 uppercase tracking-[0.2em]">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="border-b border-gray-100 shadow-sm relative z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex justify-between items-center h-20 lg:h-32">
          <Logo onClick={() => handleNavClick('home')} />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 h-full">
            {Object.keys(menuData).map((label) => (
              <button 
                key={label} 
                onMouseEnter={() => setActiveMenu(label)}
                onClick={() => setActiveMenu(activeMenu === label ? null : label)}
                className={`text-[#1B3B5F] text-[15px] font-bold hover:text-[#C5A07D] flex items-center gap-2 transition-all px-4 h-full relative group ${activeMenu === label ? 'text-[#C5A07D]' : ''}`}
              >
                {label}
                <svg className={`w-3 h-3 text-[#C5A07D] transition-transform duration-300 ${activeMenu === label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-0 w-full h-1 bg-[#C5A07D] transition-transform duration-300 origin-left ${activeMenu === label ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </button>
            ))}
            <button onClick={() => handleNavClick('history')} className="text-[#1B3B5F] text-[15px] font-bold hover:text-[#C5A07D] px-4 h-full uppercase tracking-wider">History</button>
            <button onClick={() => handleNavClick('partners')} className="text-[#1B3B5F] text-[15px] font-bold hover:text-[#C5A07D] px-4 h-full uppercase tracking-wider">Partners</button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1B3B5F]"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Desktop Mega Menu Overlay */}
      {activeMenu && menuData[activeMenu] && (
        <div 
          className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)] z-40 border-t border-gray-50 animate-in overflow-hidden"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto flex min-h-[350px]">
            <div className="w-1/3 p-12 lg:p-16 border-r border-gray-50 bg-gray-50/20">
              <h2 className="text-3xl font-black text-[#1B3B5F] mb-10 tracking-tighter uppercase">{activeMenu}</h2>
              <ul className="space-y-4">
                {menuData[activeMenu].links.map((link) => (
                  <li key={link.label}>
                    <button 
                      onClick={() => handleNavClick(link.page)}
                      className="text-[#1B3B5F] font-bold text-lg hover:text-[#C5A07D] transition-all flex items-center group w-full text-left"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-[#C5A07D] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/3 p-12 lg:p-16">
              <div 
                onClick={() => handleNavClick(menuData[activeMenu].page)}
                className="group cursor-pointer relative overflow-hidden rounded-3xl aspect-[21/9] shadow-lg"
              >
                <img src={menuData[activeMenu].card.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B5F] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10">
                   <h3 className="text-3xl font-black text-white">{menuData[activeMenu].card.title}</h3>
                   <span className="text-[#C5A07D] font-bold flex items-center gap-2 mt-2 transition-all group-hover:translate-x-1">Explore {activeMenu} ❯</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[60] transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full overflow-y-auto px-6 py-8">
          <div className="space-y-8">
            {Object.entries(menuData).map(([label, data]) => (
              <div key={label} className="space-y-4">
                <h3 className="text-[#C5A07D] font-black text-xs tracking-widest uppercase border-b border-gray-100 pb-2">{label}</h3>
                <div className="grid gap-4">
                  {data.links.map((link) => (
                    <button 
                      key={link.label} 
                      onClick={() => handleNavClick(link.page)}
                      className="text-[#1B3B5F] font-bold text-lg text-left"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-8 space-y-4 border-t border-gray-100">
               <button onClick={() => handleNavClick('history')} className="block w-full text-left text-2xl font-black text-[#1B3B5F] uppercase tracking-tighter">History</button>
               <button onClick={() => handleNavClick('partners')} className="block w-full text-left text-2xl font-black text-[#1B3B5F] uppercase tracking-tighter">Partners</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
