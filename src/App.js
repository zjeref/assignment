import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroBackground from "./components/HeroBackground";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Work from "./components/Work";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import FooterBackground from "./components/FooterBackground";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='w-full flex flex-col items-center '>

      <HeroBackground />
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Work />
      <Team />
      <Testimonial />
      <div className='relative mt-20 text-white w-full flex flex-col items-center overflow-hidden'>
        <Contact />
        <Footer />

        <FooterBackground />
      </div>
    </div>
  );
}

export default App;
