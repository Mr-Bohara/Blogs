import React from 'react';

const LoginPage = () => {
  return (
    <div className="bg-emerald-50 font-body antialiased min-h-screen flex items-center justify-center p-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-300/20 rounded-full blur-[150px]"></div>

      <main className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        {/* Left Side: Brand Identity */}
        <div className="hidden lg:flex flex-col space-y-6 max-w-sm">
          <h1 className="text-emerald-900 font-['Plus_Jakarta_Sans'] font-black text-6xl tracking-tighter leading-none">
            CURATOR
          </h1>
          <p className="text-emerald-800/70 text-lg font-medium leading-relaxed">
            The definitive space for your digital journals, travel explorations, and creative milestones.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-emerald-50 bg-emerald-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsGEhJenTMLKXBgmj8bLXSAhTW4OJa1B6ZcFo7rPMl4zrln6aMFUhP46upmJgocEGESGwxF-Nw86pQDaflltG2GrsJSNLlxYXTR7ripZJHA9-a9-JGrcyLSkU9PemSCplZtyOhcN8-NnTcYbTwRU3XkzwE6Ysegnr1KiIwoylo8pMv_5GLMPXQrFJWizu8a0wkppvQWeTlD_jDoJMx5JaQRjhtWnUp3XFOPtoUPYVOWWh_JlEWnCEVwdFXtL79LVOD6tU8JlGaCSgD" />
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-emerald-50 bg-emerald-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcOTBCAfO8tY9CIa74APcwYku1HDszWvvib5-s3cLdGFVAdpDuRgvraIdLpXC8M8tB34vJRUChnJH9wUrh1P7FsmyjRgA8tcxnx1BYPKTvn1A7Mx-h-oTRrWI0n9nPgs9zgFSqPTWLxU38IKpGXzp5uTLo56a6aC2PpsZqxc3nosFE_hGxT0UzOF51ZjxQLC8wym0Fwadjr2GA95qJWHqFIKqbRh57h3TggH5V0481QCWTBD9sfAhnVkYWUf6iYoIDHTniJT_H_F-V" />
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-emerald-50 bg-emerald-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6YsOH8qKP0OCj6VlUqitTreyAlT2qRXJdquydfalT-8GPyQ8PiVUfzHdHXufpJpYwvbmfwKufJXhv7TZNw_PxthXR-KVEECIl2TfCP3v9Y8x2nisbtNo0zKoeHcLwnoFON6TL3qrhpRRZpl0JZU8N0D_D08hzEcz_T4D6vBU3HbVrmn_Qzs2X8bMNSsYKvYJRtip0Q0hfk5RGlO1ZWe_t3TiJZhBBbUpFvRPvMVTQ8j45tc6kEOL5mLDD3vXVwRdqOINARf2vkzP" />
            </div>
            <span className="text-sm font-semibold text-emerald-900/60 uppercase tracking-widest">Joined by 12k+ creators</span>
          </div>
        </div>

        {/* Right Side: 3D Login Card */}
        <div className="perspective-1000 w-full max-w-md">
          <div className="preserve-3d card-3d-effect bg-white/80 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,32,26,0.15),0_30px_60px_-30px_rgba(0,0,0,0.2)] border border-white/50 relative">
            <div className="lg:hidden mb-8 text-center">
              <h2 className="text-emerald-900 font-['Plus_Jakarta_Sans'] font-black text-3xl tracking-tighter">CURATOR</h2>
            </div>
            <div className="space-y-2 mb-8">
              <h3 className="text-2xl font-bold text-emerald-950 tracking-tight">Welcome back</h3>
              <p className="text-emerald-800/60 text-sm">Enter your credentials to access your journals.</p>
            </div>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-emerald-900/40 uppercase tracking-widest px-1">Email Address</label>
                <div className="relative">
                  <input className="w-full bg-emerald-50/50 border-0 rounded-2xl px-5 py-4 text-emerald-900 placeholder:text-emerald-900/30 focus:ring-2 focus:ring-emerald-500/20 inner-shadow-soft transition-all duration-300 font-medium" placeholder="name@domain.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="block text-[11px] font-bold text-emerald-900/40 uppercase tracking-widest">Password</label>
                  <a className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest hover:text-emerald-500 transition-colors" href="#">Forgot?</a>
                </div>
                <div className="relative">
                  <input className="w-full bg-emerald-50/50 border-0 rounded-2xl px-5 py-4 text-emerald-900 placeholder:text-emerald-900/30 focus:ring-2 focus:ring-emerald-500/20 inner-shadow-soft transition-all duration-300 font-medium" placeholder="••••••••" type="password" />
                </div>
              </div>
              <button className="w-full py-4 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white font-bold rounded-2xl shadow-[0_20px_40px_-10px_rgba(6,78,59,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm uppercase tracking-widest mt-4" type="submit">
                Sign In
              </button>
            </form>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                <span className="bg-white/80 px-4 text-emerald-900/30 backdrop-blur-sm">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-white border border-emerald-100 rounded-2xl py-3 shadow-[0_4px_12px_rgba(0,32,26,0.05)] hover:shadow-[0_8px_20px_rgba(0,32,26,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-emerald-900/70 uppercase tracking-widest">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white border border-emerald-100 rounded-2xl py-3 shadow-[0_4px_12px_rgba(0,32,26,0.05)] hover:shadow-[0_8px_20px_rgba(0,32,26,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="material-symbols-outlined text-emerald-950 text-xl" style={{ fontVariationSettings: ''''FILL' 1'''' }}>ios</span>
                <span className="text-[11px] font-bold text-emerald-900/70 uppercase tracking-widest">Apple</span>
              </button>
            </div>
            <div className="mt-10 text-center">
              <p className="text-emerald-800/50 text-xs font-medium">
                Don't have an account? 
                <a className="text-emerald-700 font-bold hover:underline underline-offset-4" href="/signup">Create your space</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-10 w-full text-center px-6">
        <div className="flex justify-center gap-8">
          <a className="text-[10px] font-bold text-emerald-900/30 uppercase tracking-[0.2em] hover:text-emerald-900 transition-colors" href="#">Privacy Policy</a>
          <a className="text-[10px] font-bold text-emerald-900/30 uppercase tracking-[0.2em] hover:text-emerald-900 transition-colors" href="#">Terms of Service</a>
          <a className="text-[10px] font-bold text-emerald-900/30 uppercase tracking-[0.2em] hover:text-emerald-900 transition-colors" href="#">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
