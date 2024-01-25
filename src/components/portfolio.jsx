import React from 'react';
import i7 from "../assets/img/apps/3.jpg"
import i8 from "../assets/img/10min.png"
import i9 from "../assets/img/newamb.webp"
import i10 from "../assets/img/d10min.jpg"
import i11 from "../assets/img/apps/admin.png"
import i12 from "../assets/img/b10min.png"

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <div className="container">
        <header className="section-header">
          <p>Check our latest work</p>
        </header>
        
        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={i7} id="app" className="img-fluid" alt="" style={{ height: '300px' }} />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={i8} id="app" className="img-fluid" alt="" style={{ height: '300px' }} />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={i9} id="app" className="img-fluid" alt="" style={{ height: '300px' }} />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={i10} className="img-fluid" alt="" style={{ height: '300px' }} />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={i11} id="app" className="img-fluid" alt="" style={{ height: '300px', width:'auto' }} />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={i12} className="img-fluid" alt="" style={{ height: '300px' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
