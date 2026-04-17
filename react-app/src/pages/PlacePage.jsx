import React from 'react';
import Header from '../components/Header';
import PlaceHero from '../components/PlaceHero';
import RelatedJournals from '../components/RelatedJournals';
import FAB from '../components/FAB';
import BottomNav from '../components/BottomNav';

const PlacePage = () => {
  return (
    <div className="bg-background font-body text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      <main className="pt-24 pb-32">
        <PlaceHero />
        <RelatedJournals />
      </main>
      <FAB />
      <BottomNav />
    </div>
  );
};

export default PlacePage;
