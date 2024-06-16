import About from "./components/About/About"
import Categories from "./components/Categories/Categories"
import Contact from "./components/Contact/Contact"
import Courses from "./components/Courses/Courses"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Pricing from "./components/Pricing/Pricing"
import Testimonial from "./components/Testimonial/Testimonial"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() { 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <About/>
      <Courses/>
      <WhyChooseUs/>
      <Testimonial/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
