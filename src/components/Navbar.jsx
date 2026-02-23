import logo from "../assets/logo.png";
function Navbar() {

  return (
    <div className="relative z-[100]">
      <div className="bg-black w-full overflow-hidden">
        <div className="h-[40px] md:h-[48px] flex w-full text-white items-center whitespace-nowrap">
          <div className="flex gap-8 items-center animate-marquee whitespace-nowrap pr-8">
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">SOFIA MARTINEZ (UNIVERSITY OF BARCELONA) JOINED ✨</p>
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">ANITA (UNIVERSITY OF DELHI) JOINED ✨</p>
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">LIAM.C (TCD) JOINED ✨</p>
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">MICHAEL.S (UNIVERSITY OF MANCHESTER) JOINED ✨</p>
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">SOFIA MARTINEZ (UNIVERSITY OF BARCELONA) JOINED ✨</p>
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">ANITA (UNIVERSITY OF DELHI) JOINED ✨</p>
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">LIAM.C (TCD) JOINED ✨</p>
            <p className="text-[12px] md:text-[14px] font-[400] uppercase tracking-wider font-funnel shrink-0">MICHAEL.S (UNIVERSITY OF MANCHESTER) JOINED ✨</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto h-[70px] md:h-[80px] bg-white rounded-xl flex items-center justify-between px-4 md:px-6 py-4 mt-4 mx-4 md:mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-full w-8">
            <img src={logo} alt="" />
          </div>
          <h2 className="font-semibold text-[20px] md:text-[24px] leading-[1] tracking-[0]" style={{ fontFamily: 'Goodly' }}>
            Swypd
          </h2>
        </div>
        <button className="w-auto px-4 md:px-8 h-[44px] md:h-[56px] bg-black text-white rounded-[8px] hover:opacity-90 transition text-sm md:text-base">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar
