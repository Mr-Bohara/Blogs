import React from 'react';

const Header = () => {
  return (
    <header className="bg-emerald-50/70 dark:bg-emerald-950/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_20px_40px_rgba(0,32,26,0.08)]">
      <div className="flex justify-between items-center px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          <button className="text-emerald-900 dark:text-emerald-50 hover:bg-emerald-100/50 dark:hover:bg-emerald-800/50 transition-all duration-300 p-2 rounded-full active:scale-95 transition-transform duration-200">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-black tracking-tighter text-emerald-900 dark:text-emerald-50 font-['Plus_Jakarta_Sans']">CURATOR</h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-emerald-900 dark:text-emerald-50 font-bold font-['Plus_Jakarta_Sans'] tracking-tight" href="#">Explore</a>
          <a className="text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-900 dark:hover:text-emerald-50 font-['Plus_Jakarta_Sans'] font-medium transition-colors" href="#">Journals</a>
          <a className="text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-900 dark:hover:text-emerald-50 font-['Plus_Jakarta_Sans'] font-medium transition-colors" href="#">Destinations</a>
        </nav>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary-fixed overflow-hidden">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_DNDhUmMxaziIqrsb8_66i2SCubREU_gH85dSVRFFWH4HcQ_bDBxmpXSwiyv4YylAhUUt2t5V4dTnUR8jtGeiLP_t6o-GrakemKl7lxESyCrgxtpxILtySsVud2vs1Jgw6KC466224VPI3Xh2dX_cK7lniYhRpVyoaljTfv_nsquBPkbhHYPrXsg6Yrpok3-9O8eCtwMnaUNqrDUZX9AoWDKmA6Z-PFqD8Ee4xP6dDoxBu6co4vIyTMUci6rWyEiZe8mUxKGQg_ML" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
