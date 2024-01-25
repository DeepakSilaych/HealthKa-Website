import React, { useEffect, useState } from "react";
import i18 from "../assets/img/ambulance/force-traveller-ambulance-b-type-patient-transport--500x500.webp"
import i19 from "../assets/img/ambulance/ems.png"
import i20 from "../assets/img/ambulance/force-traveller-ambulance-d-type-advanced-life-support--500x500.webp"
import i21 from "../assets/img/ambulance/train_ambulance.png"
import i22 from "../assets/img/ambulance/air ambulance.png"

const AmbulanceComponent = () => {
  
  return (
    <div>
      <main id="main">

        {/* ======= Breadcrumbs ======= */}
        <section className="breadcrumbs">
          <div className="container">

            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Ambulance</li>
            </ol>
            <h2>Ambulance</h2>

          </div>
        </section>
        {/* End Breadcrumbs */}

        {/* Ambulances heading */}
        <section id="values" className="values">
          <header className="section-header">
            <p>Type of Ambulances</p>
          </header>
          <div className="row">
            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
              <div className="box">
                <img src={i18} className="img-fluid" alt="" />
                <h3>Patient Transport Support (PTS)</h3>
                <ul>
                  <li>For patients who require medical attention.</li>
                  <li>Equipped with basic medical equipment like oxygen supply, defibrillator, stretcher.</li>
                  <li>Has personnel who are trained to provide medical care during transport.</li>
                  <li>Air conditioning systems to provide a comfortable temperature.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
              <div className="box">
                <img src={i19} className="img-fluid" alt="" />
                <h3>Basic Life Support (BLS)</h3>
                <ul>
                  <li>For transporting patients who require basic medical care and monitoring.</li>
                  <li>Large vehicle equipped with basic medical equipment and supplies.</li>
                  <li>Not good for critical patients for long distances.</li>
                  <li>Important Features are oxygen supply system, stretcher, and air conditioning</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
              <div className="box">
                <img src={i20} className="img-fluid" alt="" />
                <h3>Advance Life Support (ALS)</h3>
                <ul>
                  <li>Emergency medical services unit for critical patients.</li>
                  <li>Higher level of care compared to BLS</li>
                  <li>Equipped with advanced medical equipment and supplies, as well as highly trained medical personnel.</li>
                  <li>ECMO support, cardiac support, neurological support.</li>
                  <li>Medical professionals provide advanced medical care and can make critical decisions.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
              <div className="box">
                <img src={i21} className="img-fluid" alt="" />
                <h3>Train Ambulance</h3>
                <ul>
                  <li>For transporting critically ill or injured patients.</li>
                  <li>In transferring patients to a medical facility quickly and safely between cities or even countries.</li>
                  <li>Equipped with specialized medical equipment and supplies.</li>
                  <li>Staffed with highly trained medical personnel for providing advanced medical care.</li>
                  <li>Does not experience the same level of vibration and turbulence as that of ground.</li>
                  <li>Travels on dedicated medical train tracks to avoid obstruction and delay.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
              <div className="box">
                <img src={i22} className="img-fluid" alt="" />
                <h3>Air Ambulance</h3>
                <ul>
                  <li>For transporting critically ill or injured patients.</li>
                  <li>Specially equipped aircraft for long distances or emergency situations.</li>
                  <li>Staffed with one surgeon, two junior doctors, and one nurse on board.</li>
                  <li>Can be customized to meet the specific needs of the patient.</li>
                  <li>A high level of medical care during transportation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AmbulanceComponent;
