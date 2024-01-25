import React, { Component } from 'react'
import "../assets/css/footer.css"
import { Link } from 'react-scroll'
import logo from "../assets/img/hk-logo.png";

export default class Footer extends Component {
  render() {
    return (
    <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
              <Link to="" className="logo d-flex align-items-center">
                <img src={logo} width="150" height="100" alt="" />
              </Link>
                <p> With HealthKa, you can rest assured that your health is in good hands. Download the app today and experience the convenience and efficiency of HealthKa's healthcare services. "Ap ka Health ke lia HealthKa app"
    
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
    
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
    
              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Ambulance</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Medicine</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Doctor</a></li>
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  WIB(M) 8/3 GolfGreen Phase - 2 <br/>
                  West Bengal, Kolkata 700095<br/>
                  India <br/><br/>
                  <strong>Phone:</strong> 9123686386<br/>
                  <strong>Email:</strong> healthkaservices@gmail.com<br/>
                </p>
    
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>HealthKa</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    )
  }
}
