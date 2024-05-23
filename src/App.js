import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Exercises from "./components/UI/Exercises";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonial from "./components/UI/Testimonial";
import Footer from "./components/UI/Footer";
import aos from 'aos'
import { useEffect } from "react";
function App() {

  useEffect(() => {
    aos.init()
  })

  return (
  <>
    <Header/>
    <Hero/>
    <Exercises/>
    <Start/>
    <Pricing/>
    <Testimonial/>
    <Footer/>
  </>
  )
}

export default App;
