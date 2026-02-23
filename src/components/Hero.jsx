import iconImg from '../assets/image.png'

function Hero() {
  return (


    <div className="w-full max-w-7xl px-4 text-white mx-auto relative pt-[60px] md:pt-[100px] pb-[80px] md:pb-[120px]">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="font-funnel text-[48px] md:text-[72px] font-extrabold leading-[110%] md:leading-[100%] tracking-tight text-center">
          Social Media, Rebuilt
        </h1>

        <div className="w-fit max-w-full bg-black rounded-[16px] px-6 py-2 md:py-3 mt-4 mx-auto flex items-center justify-center">
          <h1 className="text-[48px] md:text-[72px] font-extrabold leading-[1] tracking-tight text-center" style={{ fontFamily: 'Funnel Display' }}>
            for Students.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-10">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
              <img src={iconImg} className="w-[18px] h-[18px] object-contain" alt="icon" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[14px] font-bold uppercase tracking-widest leading-none">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-none mt-2">Secure</span>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/20"></div>
          <div className="flex flex-col items-center md:items-start leading-tight">
            <p className="text-xs md:text-sm opacity-70 font-medium leading-tight whitespace-nowrap">
              Where students connect,
            </p>
            <p className="text-xs md:text-sm opacity-70 font-medium leading-tight mt-1 whitespace-nowrap">
              collaborate, and pop off.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <div className="w-full max-w-xl z-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-[56px] px-6 py-3 rounded-xl bg-[#0D2491]/60 border border-white/20 focus:outline-none placeholder:text-white/40 text-white"
              />
              <input
                type="text"
                placeholder="University Name"
                className="w-full h-[56px] px-6 py-3 rounded-xl bg-[#0D2491]/60 border border-white/20 focus:outline-none placeholder:text-white/40 text-white"
              />
            </div>

            <input
              type="text"
              placeholder="University ID (.edu)"
              className="w-full h-[56px] px-6 py-3 rounded-xl bg-[#0D2491]/60 border border-white/20 focus:outline-none placeholder:text-white/40 text-white mt-4"
            />

            <button className="w-full h-[60px] bg-white text-black rounded-xl font-bold hover:scale-[1.01] transition-transform mt-6 flex items-center justify-center gap-2 text-lg">
              Join Waitlist <span className="text-xl">→</span>
            </button>

            <div className="mt-10 flex items-center justify-center">
              <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Live</span>
                </div>
                <div className="w-px h-3 bg-white/20"></div>
                <p className="text-xs font-medium text-white/80">
                  <strong className="text-white">20,000</strong> on Waitlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;