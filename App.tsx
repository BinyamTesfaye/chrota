
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import OurApproach from './pages/OurApproach';
import History from './pages/History';
import Partners from './pages/Partners';
import SubPage from './pages/SubPage';

export type PageView = 
  | 'home' | 'who-we-are' | 'what-we-do' | 'our-approach' | 'history' | 'partners'
  | 'who-overview' | 'who-values' | 'who-principles' 
  | 'what-maternal' | 'what-nutrition' | 'what-blindness' | 'what-disease' | 'what-climate'
  | 'approach-ownership' | 'approach-integrated' | 'approach-participatory';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'who-we-are': return <WhoWeAre />;
      case 'what-we-do': return <WhatWeDo />;
      case 'our-approach': return <OurApproach />;
      case 'history': return <History />;
      case 'partners': return <Partners />;
      case 'who-overview':
      case 'who-values':
      case 'who-principles':
      case 'what-maternal':
      case 'what-nutrition':
      case 'what-blindness':
      case 'what-disease':
      case 'what-climate':
      case 'approach-ownership':
      case 'approach-integrated':
      case 'approach-participatory':
        return <SubPage pageId={currentPage} onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
