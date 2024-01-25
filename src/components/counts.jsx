import React from 'react';
import CountUp from 'react-countup';

const Counts = () => {
  return (
    <section id="counts" className="counts" data-aos="fade-up">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <div>
                <CountUp end={0} />
                <p>Number of Downloads</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-journal-richtext" style={{ color: '#ee6c20' }}></i>
              <div>
                <CountUp end={3} duration={1} />
                <p>Services</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-headset" style={{ color: '#15be56' }}></i>
              <div>
                <span>24/7</span>
                <p>Support </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-people" style={{ color: '#bb0852' }}></i>
              <div>
                <CountUp start={0} end={6} duration={5}  />
                <span data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
