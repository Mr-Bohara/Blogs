import React from 'react';

const Hero = () => {
  return (
    <section className="px-6 md:px-12 mb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 z-10">
          <span className="text-on-surface-variant font-label uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Summer Series 2024</span>
          <h2 className="text-6xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-8">
            The Art of <br /><span className="text-primary-container">Being Elsewhere.</span>
          </h2>
          <div className="relative w-full max-w-lg mb-8">
            <div className="bg-surface-container-low inner-shadow-recessed rounded-xl flex items-center p-2 focus-within:bg-surface-container-lowest transition-colors group">
              <span className="material-symbols-outlined text-outline ml-4">search</span>
              <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline-variant font-medium py-3 px-4" placeholder="Where should we curate your escape?" type="text" />
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-transform">
                Curate
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex -space-x-3">
              <img className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt6R9vnntfMo9BpMvWTWRQEwUgujSY2eLL0_AN0eP6Kw2LvILO0vaqrp9cyW3q0k6_VJMVHLthYCUiLShohqbEl8huydab_QfuY5S0-REzoVLfOfvU9eq_fmEsuI_D6RD_VX12db6bhyYUW7XprAXT-qS5pskrq98iUaSdJ5OvwSXypFz6JrVGLTenX-b3zId-SoFynonOH_xfVPo3svXcgT6JBrt5WJAi0BriThy26fGWJE1zXMa5UiOdcdnQdlmoFhDPretnaohj" />
              <img className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA69I1iocNGmJa1gZCe1xx7brCafCrqjE3y3HlE5C5kKkHMxnTAQWlGSRvnO9JOsM7Xvl76dFwju7GrzcWQZ8OxOfpo0mcAG3Xb8D6uSYXAsdMgA6R9t9WIbHbfl3x-CsXlWD9O_7VQACMDmI-GXb6L8ZVpZ-D7ddkbg2jtYh7qj9bqn-HgPNPw2fjoKF87GmRDV9EaiaxvpI5Fe3_Hz2wZ0Fl7uf6xFrRbMwrmyaa5Du7yhw3H-KdmsEt1DgzSrabfywCD4yFfeXN1" />
              <img className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdcQReRF1pSo-GXUq7ZpUh_EssmnvS6WRT6KV9BacCo4uyzJea01VF3AhroQM2GLCttESZGU4dccvFTZf6E05ls95CHZWwAXSFmrwfmaAFt_0tHVsEjWzHeBXmmq2QX-Kq4sMzAtjGOWQbPe0fGHdKafFUtNZuwMs98ANdLg2TFvcik3eqnbnUQRCWQ4jHzvGSIF6mTI_D-HncKUqT9N3biLp1A7Gtcgvz49ZRvZ-jz5g9oI0wtiNmAxxBJJA_JXSmPQG7tJ-EkqQv" />
            </div>
            <p className="text-on-surface-variant text-sm font-medium self-center">Joined by 12k+ curators worldwide</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[500px]">
          <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-surface-container-low rounded-lg rotate-3 z-0"></div>
          <div className="absolute top-10 right-10 w-4/5 h-4/5 overflow-hidden rounded-lg atmospheric-shadow -rotate-2 z-10">
            <img alt="Luxury Coastal" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV8w5vBng9KsmFspooxTQJO0h_kTsLVo23R-lPI-7g-iJbdKhG4TKAPcTuQjVvTVQWLu-wJcMV8VHBdLf5w9z5bp--CmX_F68Js5lXOw5rOj11J9jdEEsiCf9mf1BJtT_CHiL-jpuwIAwP7hl6mjWAZNTmzppUL3_NXx_mAQinRFwgIrQ2S0IKqiXNmQwzTFZhlocH1O0Vj-EsezMfxsYpnZ2csjMU0IC3fjabzFdWLfAMVwLpvz5N0PAJ3jWY75m68yW3I5KN304O" />
          </div>
          <div className="absolute bottom-4 left-0 bg-surface-container-lowest p-6 rounded-lg atmospheric-shadow z-20 max-w-xs border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: ''''FILL' 1'''' }}>star</span>
            <p className="text-on-surface font-bold text-lg leading-tight mb-1">Amalfi Coast, Italy</p>
            <p className="text-on-surface-variant text-sm">"The light here is unlike anything I've ever seen."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
