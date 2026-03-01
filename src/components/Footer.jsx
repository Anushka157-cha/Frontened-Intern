import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profile2Img from "../assets/Profile2.png";

function Footer() {
  return (
    <footer className="bg-black text-white w-full" style={{ paddingTop: 'clamp(40px, 8vw, 48px)', paddingBottom: 'clamp(40px, 8vw, 48px)', paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)' }}>
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between pb-8" style={{ gap: 'clamp(24px, 5vw, 32px)' }}>
          <div className="flex items-center" style={{ gap: 'clamp(6px, 1vw, 8px)' }}>
            <img src={profile2Img} alt="Profile" className="rounded-full object-cover w-8 h-8" />
            <h1 className="font-semibold tracking-tight" style={{ fontSize: 'clamp(20px, 2.5vw, 24px)' }}>Swypd</h1>
          </div>
          <div className="flex flex-wrap justify-center text-gray-400 font-medium" style={{ gap: 'clamp(12px, 2vw, 32px)', fontSize: 'clamp(13px, 1.5vw, 14px)' }}>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>

          <div className="hidden lg:flex items-center" style={{ gap: 'clamp(12px, 1.5vw, 16px)' }}>
            <SocialIcons />
          </div>
        </div>
        <div className="border-t border-white/10 flex flex-col items-center" style={{ paddingTop: 'clamp(24px, 4vw, 32px)', gap: 'clamp(20px, 3vw, 24px)' }}>
          <div className="flex lg:hidden items-center" style={{ gap: 'clamp(12px, 1.5vw, 16px)' }}>
            <SocialIcons />
          </div>
          <p className="text-gray-500 font-medium text-center" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
            © 2026 Swypd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
function SocialIcons() {
  const iconSize = { width: 'clamp(28px, 3.5vw, 32px)', height: 'clamp(28px, 3.5vw, 32px)', fontSize: 'clamp(16px, 2vw, 20px)' };
  return (
    <>
      <a href="#" className="flex items-center justify-center rounded-full hover:bg-white/10 transition text-red-500" style={iconSize}>
        <FaYoutube />
      </a>
      <a href="#" className="flex items-center justify-center rounded-full hover:bg-white/10 transition text-blue-400" style={iconSize}>
        <FaLinkedin />
      </a>
      <a href="#" className="flex items-center justify-center rounded-full hover:bg-white/10 transition text-pink-500" style={iconSize}>
        <FaInstagram />
      </a>
      <a href="#" className="flex items-center justify-center rounded-full hover:bg-white/10 transition text-white" style={iconSize}>
        <FaXTwitter />
      </a>
    </>
  );
}
export default Footer;