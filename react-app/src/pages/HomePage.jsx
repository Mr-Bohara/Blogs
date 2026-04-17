import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedPlaces from '../components/FeaturedPlaces';
import LatestJournals from '../components/LatestJournals';
import BottomNav from '../components/BottomNav';

const HomePage = () => {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      <main className="pt-24 pb-32">
        <Hero />
        <FeaturedPlaces />
        <LatestJournals />
      </main>
      <BottomNav />
    </div>
  );
};

export default HomePage;
