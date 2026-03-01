import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"
import ContactSection from "./components/ContactSection";
import cloudImg from "./assets/cloud.png";

function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="relative bg-[#1734BA] overflow-hidden">
       
        <div className="relative z-30">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-20 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-white z-10" />
          <img
            src={cloudImg}
            className="relative z-20 w-full h-auto block scale-[1.05] origin-bottom"
            alt=""
          />
        </div>
      </div>
      <div className="bg-white relative z-10 -mt-8 md:-mt-10">
        <Features />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactSection />} />
    </Routes>
  );
}

export default App
