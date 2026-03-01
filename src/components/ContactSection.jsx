import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaYoutube, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profile2Img from "../assets/Profile2.png";

const FALLBACK = [
  { full_name: "SOFIA MARTINEZ", university_name: "UNIVERSITY OF BARCELONA" },
  { full_name: "ANITA", university_name: "UNIVERSITY OF DELHI" },
  { full_name: "LIAM.C", university_name: "TCD" },
  { full_name: "MICHAEL.S", university_name: "UNIVERSITY OF MANCHESTER" },
];

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [joiners, setJoiners] = useState(FALLBACK);

  useEffect(() => {
    fetch("http://localhost:5000/api/waitlist/recent")
      .then(res => res.json())
      .then(data => { if (data.length > 0) setJoiners(data); })
      .catch(() => {});
  }, []);

  const marqueeItems = [...joiners, ...joiners];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "University Email is required";
    else if (!/\S+@\S+\.edu$/.test(formData.email)) newErrors.email = "Email must be a valid .edu address";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) setErrors({ message: data.error || "Something went wrong." });
      else {
        setSuccess("Your information has been submitted successfully! We'll get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setErrors({ message: "Server not reachable. Please try again." });
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2636B8] to-[#1a2690] flex flex-col justify-between">

      {/* Navbar + Marquee */}
      <div className="relative z-[100]">
        <div className="bg-black w-full overflow-hidden h-12">
          <div className="flex w-full text-white items-center whitespace-nowrap h-full">
            <div className="flex gap-8 items-center animate-marquee whitespace-nowrap pr-8">
              {marqueeItems.map((u, i) => (
                <p key={i} className="uppercase tracking-wider font-funnel text-sm shrink-0">
                  {u.full_name} ({u.university_name}) JOINED ✨
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1296px] bg-white h-12 md:h-20 px-4 md:px-6 rounded-md md:rounded-lg mt-4 mx-4 lg:mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-full w-8 h-8">
              <img src={profile2Img} alt="Profile" className="object-cover w-8 h-8" />
            </div>
            <h2 className="font-semibold text-2xl" style={{ fontFamily: 'Goodly' }}>Swypd</h2>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="hidden sm:block bg-black text-white px-8 h-14 text-base rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-black p-2 text-2xl"
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
            <div className="absolute right-4 top-32 bg-white rounded-xl shadow-2xl p-6 w-64" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => { navigate("/contact"); setMenuOpen(false); }}
                className="w-full bg-black text-white rounded-lg h-11 text-base hover:opacity-90 transition-opacity font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row justify-between items-start py-8 md:py-16 text-white gap-6 md:gap-10 max-w-7xl mx-auto w-full"
        style={{ paddingLeft: 'clamp(16px,5vw,80px)', paddingRight: 'clamp(16px,5vw,80px)' }}>

        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-3 md:space-y-6">
          <h1 style={{ fontFamily: 'Funnel Display', fontWeight: 800, fontSize: 'clamp(32px,6vw,48px)', lineHeight: '100%', letterSpacing: '-1.9%', color: '#FFFFFF' }}>Get In Touch</h1>
          <p className="text-gray-200 max-w-md leading-relaxed" style={{ fontSize: 'clamp(13px,1.5vw,16px)' }}>
            Have a question, feedback, or partnership idea?<br className="hidden md:block" />
            We'd love to hear from you. Reach out and our team will get<br className="hidden md:block" />
            back to you as soon as possible.
          </p>
          <div>
            <h3 className="font-semibold" style={{ fontSize: 'clamp(15px,2vw,18px)' }}>Email</h3>
            <p className="text-gray-200 mt-1" style={{ fontSize: 'clamp(12px,1.5vw,14px)' }}>swypd@support.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 md:mb-3" style={{ fontSize: 'clamp(15px,2vw,18px)' }}>Socials</h3>
            <div className="flex gap-3 md:gap-4" style={{ fontSize: 'clamp(18px,2.5vw,24px)' }}>
              <FaYoutube className="cursor-pointer hover:scale-110 transition text-red-500" />
              <FaLinkedin className="cursor-pointer hover:scale-110 transition text-blue-400" />
              <FaInstagram className="cursor-pointer hover:scale-110 transition text-pink-400" />
              <FaXTwitter className="cursor-pointer hover:scale-110 transition text-white" />
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2">
          <h2 style={{ fontFamily: 'Funnel Display', fontWeight: 500, fontSize: '24px', lineHeight: '100%', letterSpacing: '-0.456px', color: '#FFFFFF', marginBottom: '20px' }}>Contact Form</h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="flex flex-col md:flex-row gap-[18px]">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
                className="flex-1 placeholder:text-white placeholder:opacity-80"
                style={{ fontFamily: 'Funnel Display', fontSize: '14px', color: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.24)', background: 'rgba(255,255,255,0.08)', outline: 'none' }} />
              <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange}
                className="flex-1 placeholder:text-white placeholder:opacity-80"
                style={{ fontFamily: 'Funnel Display', fontSize: '14px', color: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.24)', background: 'rgba(255,255,255,0.08)', outline: 'none' }} />
            </div>
            <textarea name="message" placeholder="Write us a message" value={formData.message} onChange={handleChange} rows={4}
              className="placeholder:text-white placeholder:opacity-80"
              style={{ fontFamily: 'Funnel Display', fontSize: '14px', color: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.24)', background: 'rgba(255,255,255,0.08)', outline: 'none', width: '100%', resize: 'none' }} />
            <button type="submit" disabled={loading}
              className="hover:opacity-90 transition-all disabled:opacity-60"
              style={{ width: '100%', height: '52px', borderRadius: '8px', backgroundColor: '#FFFFFF', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, fontSize: '14px' }}>
              {loading ? "Submitting..." : <>Contact Us <span className="ml-2">→</span></>}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col justify-between gap-10 bg-black text-white w-full px-5 py-8 md:min-h-[272px] md:pt-[78px] md:px-[76px] md:pb-[30px]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0">
          {/* Footer Logo - Desktop & Mobile */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-full w-8 h-8 flex-shrink-0">
              <img src={profile2Img} alt="Profile" className="rounded-full object-cover w-8 h-8" />
            </div>
            <h2 className="font-semibold text-2xl" style={{ fontFamily: 'Goodly' }}>Swypd</h2>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-gray-400 text-xs md:text-sm font-medium text-center">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>

          {/* Footer Social Icons */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaYoutube className="text-red-500 w-6 h-6" />
            <FaLinkedin className="text-blue-400 w-6 h-6" />
            <FaInstagram className="text-pink-400 w-6 h-6" />
            <FaXTwitter className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-white/10 pt-3 md:pt-4">
          <p className="text-gray-500 text-xs md:text-sm text-center">© 2026 Swypd All rights Reserved</p>
        </div>
      </footer>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;