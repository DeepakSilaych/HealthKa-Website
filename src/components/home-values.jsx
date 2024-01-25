import React from 'react';
import i2 from "../assets/img/service-24-7.webp"
import i3 from "../assets/img/4portal.jpg"
import i4 from "../assets/img/values-3.png"

const Values = () => {
  return (
    <section id="values" className="values" data-aos="fade-up">
      <div className="container">
        <header className="section-header">
          <p>Perks of using our app</p>
        </header>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img src={i2} className="img-fluid" alt="24/7 Help Line" />

              <h3>24/7 Help Line</h3>
              <ul>
                <li>Offers a 24/7 helpline for healthcare assistance.</li>
                <li>Health emergency assistance services anytime, anywhere.</li>
                <li>Mobile app support at every step.</li>
              </ul>
              <p>
                Health emergencies can happen anytime.<br />
                That's why we offer a 24/7 helpline.<br />
                Assist you with any of your healthcare needs.<br />
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
            <div className="box">
              <img src={i3} className="img-fluid" id="middle_img" alt="Patient prescription portal" />

              <h3>Patient prescription portal</h3>
              <ul>
                <li>Store all your prescriptions in one secure location.</li>
                <li>Quickly access all the necessary information in emergencies.</li>
                <li>Have information about your medications and dosage at your fingertips.</li>
              </ul>
              <p>
                Developed a Patient Prescription Portal.<br />
                Store all prescriptions in one location.<br />
                Quick access to all the information.<br />
                No need to scramble through a pile of papers.<br />
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
            <div className="box">
              <img src={i4} className="img-fluid" id="last_img" alt="10 minutes delivery" />

              <h3>10 minutes delivery</h3>
              <ul>
                <li>Doorstep delivery of your medicines within 10 minutes.</li>
                <li>Quick, efficient, and timed delivery of medicines.</li>
                <li>3-step quality-checked products.</li>
              </ul>

              <p>
                Deliver your medicines within 10 minutes.<br />
                Time is of the essence.<br />
                That's why we make it our priority.<br />
                Quick and efficient delivery.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
