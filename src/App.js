import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Ambulance from "./pages/ambulance";
import Home from "./pages/home"
import Blog from "./pages/blog";

import Swiper from "swiper";
import GLightbox from "glightbox";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import Values from "./components/home-values";
import Medicine from "./pages/medicine";
import Contact from "./pages/contact";


function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    new Swiper(".clients-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120,
        },
      },
    });

    GLightbox({
      selector: ".portfokio-lightbox",
    });

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  
  return (
    <Router>
      <Navbar/>
      <div>
          <Routes>
          <Route path="/home" element={<Home/>} />
            <Route path="/ambulance" element={<Ambulance/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>} />
            <Route path="/medicine" element={<Medicine/>}/>
            <Route path="" element={<Home/>} />
          </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
