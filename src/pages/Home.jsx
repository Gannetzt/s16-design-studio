import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import ProcessPreview from '../components/home/ProcessPreview';
import CTASection from '../components/home/CTASection';

const Home = ({ onGetQuote }) => {
  return (
    <div>
      <Hero onGetQuote={onGetQuote} />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessPreview />
      <CTASection />
    </div>
  );
};

export default Home;
