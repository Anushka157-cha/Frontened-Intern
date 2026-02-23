import connectImg from "../assets/connect.png";
import phoneImg from "../assets/phone.png";
import peopleImg from "../assets/people.png";
import personImg from "../assets/person.png";
import lenImg from "../assets/len.png";

function Features() {
  return (
    <div className="bg-white pt-20 pb-12 md:pt-32 md:pb-24 font-funnel px-4 md:px-0">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 md:gap-6 mb-16 md:mb-24">
        <h2
          className="text-[32px] md:text-[48px] font-bold text-[#191919] text-center font-funnel"
          style={{ letterSpacing: "-0.912px", lineHeight: "1.2", fontStyle: "normal" }}
        >
          Swype Right On <br />Campus
        </h2>
        <p className="text-sm md:text-[16px] text-[#424242] font-medium text-center">
          No noise. No randoms. Just ambition and good vibes. <br className="hidden md:block" />
          And yes, it's student-only.
        </p>
      </div>
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          <div className="bg-[#E4D6F5] rounded-[32px] flex flex-col w-full max-w-[531px] lg:col-span-1 h-full overflow-hidden p-6">
            <div className="bg-white rounded-[24px] w-full h-[300px] flex items-center justify-center overflow-hidden mb-6">
              <img src={connectImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 flex-1 px-2">
              <h3 className="text-xl md:text-[22px] font-bold text-[#191919]">
                Connect, Chat & Build
              </h3>
              <p className="text-sm md:text-[15px] text-[#424242] leading-relaxed">
                Match-based messaging, communities, course groups, events,
                and built-in safety tools to keep it secure.
              </p>
            </div>
          </div>
          <div className="bg-[#FFD1B9] rounded-[32px] flex flex-col w-full max-w-[374px] h-full overflow-hidden p-6">
            <div className="bg-white rounded-[24px] overflow-hidden w-full h-[400px] flex items-center justify-center mb-6">
              <img src={phoneImg} alt="" style={{ width: "279px", height: "324px", objectFit: "contain", display: "block" }} />
            </div>
            <div className="flex flex-col gap-2 flex-1 px-2">
              <h3 className="text-xl md:text-[22px] font-bold text-[#191919]">
                Verified Student Network
              </h3>
              <p className="text-sm md:text-[15px] text-[#424242] leading-relaxed">
                Anti-fake, anti-bot protection with a real-
                identity trust layer — so you know you're
                connecting with actual students.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[374px] gap-0 h-full">
            <div className="bg-[rgb(255,255,224)] rounded-t-[32px] p-6 h-[250px] flex items-center justify-center overflow-hidden">
              <img src={peopleImg} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="bg-[#A5F3FC] rounded-b-[32px] p-8 relative flex-1">
              <h3 className="text-xl md:text-[22px] font-bold text-[#191919] mb-3">
                Smart Student Profiles
              </h3>
              <p className="text-sm md:text-[15px] text-[#424242] leading-relaxed">
                Show your university, major, year,
                interests, and lifestyle tags.
                Control your privacy and how people
                discover you.
              </p>
              <span className="absolute bottom-6 right-6 font-black text-2xl md:text-[40px] text-[#191919] opacity-10 tracking-tighter">
                COMING SOON
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          <div className="bg-[#DCFCE7] rounded-[32px] p-8 w-full h-[400px] overflow-hidden flex items-center justify-center">
            <img
              src={personImg}
              alt=""
              style={{ width: "531px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          <div className="bg-[#FEE2E2] rounded-[32px] p-6 w-full flex flex-col md:flex-row gap-8 items-center h-full">
            <div className="bg-white rounded-[24px] w-full md:w-[350px] h-[300px] flex-shrink-0 flex items-center justify-center overflow-hidden p-10">
              <img src={lenImg} alt="" style={{ width: "230px", height: "210px", objectFit: "contain" }} />
            </div>

            <div className="text-center md:text-left pr-4">
              <h3 className="text-xl md:text-[22px] font-bold text-[#191919] mb-3">
                Campus Discovery Engine
              </h3>
              <p className="text-sm md:text-[15px] text-[#424242] leading-relaxed">
                Find students near you, mutual friends,
                shared classes, and curated
                recommendations — all tailored to your
                campus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;