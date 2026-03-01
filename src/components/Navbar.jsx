import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import profile2Img from "../assets/Profile2.png";

const FALLBACK = [
  { full_name: "SOFIA MARTINEZ", university_name: "UNIVERSITY OF BARCELONA" },
  { full_name: "ANITA", university_name: "UNIVERSITY OF DELHI" },
  { full_name: "LIAM.C", university_name: "TCD" },
  { full_name: "MICHAEL.S", university_name: "UNIVERSITY OF MANCHESTER" },
];

function Navbar() {
  const navigate = useNavigate();
  const [joiners, setJoiners] = useState(FALLBACK);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/waitlist/recent")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setJoiners(data);
      })
      .catch(() => { });
  }, []);

  const marqueeItems = [...joiners, ...joiners];

  return (
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
      <div className="max-w-[1296px] 
                bg-white 
                h-12 md:h-20 
                px-4 md:px-6 
                rounded-md md:rounded-lg 
                 mt-4 mx-4 lg:mx-auto 
                flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-full w-32px h-32px">
            <img
              src={profile2Img}
              alt="Profile"
              className=" object-cover w-8 h-8"
            />
          </div>
          <h2
            className="font-semibold text-2xl"
            style={{ fontFamily: 'Goodly' }}
          >
            Swypd
          </h2>
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
          <div
            className="absolute right-4 top-32 bg-white rounded-xl shadow-2xl p-6 w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                navigate("/contact");
                setMenuOpen(false);
              }}
              className="w-full bg-black text-white rounded-lg h-11 text-base hover:opacity-90 transition-opacity font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
