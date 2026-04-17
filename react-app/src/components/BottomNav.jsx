import React from 'react';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-8 left-0 right-0 z-50 flex justify-around items-center">
      <div className="bg-emerald-50/70 dark:bg-emerald-950/70 backdrop-blur-xl w-[90%] max-w-md rounded-full px-6 py-3 flex justify-around items-center shadow-[0_20px_40px_rgba(0,32,26,0.15)]">
        <a className="flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-700 dark:from-emerald-600 dark:to-emerald-400 text-white rounded-full px-5 py-2.5 shadow-lg scale-110" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: ''''FILL' 1'''' }}>explore</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-widest mt-1">Explore</span>
        </a>
        <a className="flex flex-col items-center justify-center text-emerald-900/50 dark:text-emerald-50/50 px-4 py-2 hover:scale-110 transition-transform duration-300" href="#">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-widest mt-1">Journals</span>
        </a>
        <a className="flex flex-col items-center justify-center text-emerald-900/50 dark:text-emerald-50/50 px-4 py-2 hover:scale-110 transition-transform duration-300" href="#">
          <span className="material-symbols-outlined">add_circle</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-widest mt-1">Create</span>
        </a>
        <a className="flex flex-col items-center justify-center text-emerald-900/50 dark:text-emerald-50/50 px-4 py-2 hover:scale-110 transition-transform duration-300" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-widest mt-1">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
