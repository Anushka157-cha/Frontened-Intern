import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"
import imageImg from "./assets/image1.png";
import cloudImg from "./assets/cloud.png";

function App() {

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative bg-[#1734BA] overflow-visible">
        <img
          src={imageImg}
          className="hidden lg:block absolute top-[25%] xl:top-[12%] left-1/2 -translate-x-1/2 w-[120%] xl:w-full max-w-none h-auto object-contain pointer-events-none z-[25]"
          alt=""
        />
        <div className="relative z-30">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-20">
          <img
            src={cloudImg}
            className="w-full h-auto object-cover block"
            alt=""
          />
        </div>
      </div>
      <div className="bg-white relative z-10 -mt-8 md:-mt-10">
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default App
