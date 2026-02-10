
import React from 'react';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import FeaturedStory from '../components/FeaturedStory';
import MapSection from '../components/MapSection';
import NewsSection from '../components/NewsSection';
import CTASection from '../components/CTASection';
import { PageView } from '../App';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <IntroSection />
      <FeaturedStory />
      <MapSection />
      <NewsSection />
      <CTASection onNavigate={onNavigate} />
    </>
  );
};

export default Home;
