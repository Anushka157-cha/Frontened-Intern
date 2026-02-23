import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SLogo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white w-full py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={SLogo} alt="Swypd" className="w-8 h-8 object-contain" />
            <h1 className="font-semibold text-2xl tracking-tight">Swypd</h1>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-sm font-medium">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Waitlist Dashboard</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex gap-4 items-center">
            <SocialIcons />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6">

          {/* Social Icons for Mobile/Tablet */}
          <div className="flex lg:hidden gap-4 items-center">
            <SocialIcons />
          </div>

          <p className="text-gray-500 text-sm font-medium text-center">
            © 2026 Swypd. All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <>
      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition text-red-500">
        <FaYoutube className="text-xl" />
      </a>
      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition text-blue-400">
        <FaLinkedin className="text-xl" />
      </a>
      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition text-pink-500">
        <FaInstagram className="text-xl" />
      </a>
      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition text-white">
        <FaXTwitter className="text-xl" />
      </a>
    </>
  );
}

export default Footer;