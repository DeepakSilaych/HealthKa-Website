import React from 'react';
import v1 from "../assets/img/video.gif"
import "../assets/css/hero.css"

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">We offer the help you need</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">Revolutionizing the healthcare industry by providing lightning-fast services to its customers</h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center" id="TheBlue">
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src={v1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
