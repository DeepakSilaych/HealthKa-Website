import React from 'react';
import i5a from "../assets/img/apps/5.jpg"
import i5b from "../assets/img/apps/1.jpg"
import i6 from "../assets/img/ambulance.jpg"
import g1 from "../assets/img/scoterlogo.gif"

const Features = () => {
  return (
    <section id="features" className="features" data-aos="fade-up">
      <div className="container">
        <header className="section-header">
          <h2>Features</h2>
          <p>Our App features</p>
        </header>

        <div className="row">
          <div className="col-lg-6" data-aos-delay="800">
            <img src={i5a} className="img-fluid" alt="" style={{ height: '390px', marginLeft: '25px' }} />
            <img src={i5b} className="img-fluid" alt="" style={{ height: '390px', marginLeft: '25px' }} />
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Patient Prescription Portal</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>10 min delivery</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Book an ambulance</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Easy discounts</h3>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="row feture-tabs" data-aos="fade-up">
          <div className="col-lg-6">
            <h3>Book An Ambulance</h3>

            {/* Tab Content */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <p>
                  A patient transport ambulance is an essential part of emergency medical services. It is used to transport patients who require medical attention from one location to another.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Types of Ambulance</h4>
                </div>
                <ul>
                  <li>Basic Life Support (BLS)</li>
                  <li>Advance Life Support (ALS)</li>
                  <li>Train Ambulance</li>
                  <li>Air Ambulance</li>
                </ul>
                <p>
                  These ambulances are equipped with medical equipment and personnel who are trained to provide medical care during transportation.
                </p>
              </div>
              {/* End Tab 1 Content */}

              <div className="tab-pane fade show" id="tab2">
                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
              </div>
              {/* End Tab 2 Content */}

              <div className="tab-pane fade show" id="tab3">
                <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                {/* <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p> */}
              </div>
              {/* End Tab 3 Content */}
            </div>
          </div>

          <div className="col-lg-6">
            <img src={i6} className="img-fluid" id="ambu" alt="ambulance" />
          </div>
        </div>
        {/* End Feature Tabs */}

        {/* Feature Icons */}
        <div className="row feature-icons" data-aos="fade-up">
          <h3>
            <b>Get Your Medicine</b>
          </h3>

          <div className="row">
            <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
              <img src={g1} alt="" className='scootergif'/>
            </div>

            <div className="col-xl-8 d-flex content">
              <div className="row align-self-center gy-4">
                <div className="col-md-6 icon-box" data-aos="fade-up">
                  <i className="ri-stack-line"></i>
                  <div>
                    <h4>10 min delivery</h4>
                    {/* <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p> */}
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="ri-stack-line"></i>
                  <div>
                    <h4>Heavy discounts</h4>
                    {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p> */}
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="ri-brush-4-line"></i>
                  <div>
                    <h4>Easy to use</h4>
                    {/* <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p> */}
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="ri-magic-line"></i>
                  <div>
                    <h4>On your doorsteps</h4>
                    {/* <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Feature Icons */}
      </div>
    </section>
  );
};

export default Features;
