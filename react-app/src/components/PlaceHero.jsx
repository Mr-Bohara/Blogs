import React from 'react';

const PlaceHero = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32">
      <div className="relative w-full h-[618px] rounded-lg overflow-hidden shadow-[0_40px_80px_rgba(0,32,26,0.15)] group">
        <img alt="Amalfi Coast" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCupUuUn_UR_L1YpIGWjW5DufIGoXTrdHux-TcB0unrk6DJUiph5m3WqVtVCD-HIBCIIclTUHwSPbMAijM2U335LTgKSYy9Q_YMPQDYQFoQ6Fwqg_Yo8F0b20yDQ4ds7pP7O12K_ICcNLh-E0Pa5s8qMDPE4eiRGrb-RLBpSU1hnYE8YL1DtqC1H--FWfGgxJp17K3L5HbNmz-RADr_9PV2HxqzbttCte9CJInzafrDdMGUohM9tBRBse6E0fZxleHQn1lN3P-YWzFZ" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-xl glass-card p-8 rounded-lg shadow-2xl border border-white/20">
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/60">Destination</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mt-2">Amalfi Coast</h1>
          </div>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
            The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrentine Peninsula. A landscape of pastel-colored villages, terraced vineyards, and cliffside lemon groves overlooking the shimmering Tyrrhenian Sea.
          </p>
          <div className="flex gap-4">
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Luxury</span>
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Coastal</span>
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Italy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceHero;