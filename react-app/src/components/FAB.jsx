import React from 'react';

const FAB = () => {
  return (
    <button className="fixed bottom-28 right-8 z-[60] flex items-center gap-3 bg-gradient-to-br from-emerald-900 to-emerald-700 dark:from-emerald-600 dark:to-emerald-400 text-white rounded-full px-8 py-4 shadow-[0_20px_40px_rgba(0,32,26,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 group">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: ''''FILL' 1'''' }}>add_circle</span>
      <span className="font-bold uppercase tracking-[0.2em] text-xs">Add a Post</span>
    </button>
  );
};

export default FAB;
