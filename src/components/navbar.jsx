import "../assets/css/navbar.css"
import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import n1 from "../assets/img/logo.png";
import logo from "../assets/img/hk-logo.png";

function Navbar() {

  const [navbarMobile, setNavbarMobile] = useState(false);

  const handleClick = () => {
    setNavbarMobile(!navbarMobile);
  };
  
  const location = useLocation(); // Get the history object from react-router-dom

  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    const selectHeader = select('#header');
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 50) {
          selectHeader.classList.add('header-scrolled');
        } else {
          selectHeader.classList.remove('header-scrolled');
        }
      };
      window.addEventListener('load', headerScrolled);
      onscroll(document, headerScrolled);
    }

    const handleClick = (e) => {
      select('#navbar').classList.toggle('navbar-mobile');
      e.target.classList.toggle('bi-list');
      e.target.classList.toggle('bi-x');
    };

    const handleDropdownClick = (e) => {
      const navbar = select('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        e.preventDefault();
        e.target.nextElementSibling.classList.toggle('dropdown-active');
        setNavbarMobile(false); // Close the mobile navbar when a dropdown item is clicked
      }
    };

    select('.mobile-nav-toggle').addEventListener('click', handleClick);
    document.querySelectorAll('.navbar .dropdown > a').forEach((item) => {
      item.addEventListener('click', handleDropdownClick, true);
    });

    return () => {
      select('.mobile-nav-toggle').removeEventListener('click', handleClick);
      document.querySelectorAll('.navbar .dropdown > a').forEach((item) => {
        item.removeEventListener('click', handleDropdownClick, true);
      });
    };
  }, []);

  useEffect(() => {
    // Close the mobile navbar when the location changes (page navigation)
    setNavbarMobile(false);
  }, [location]);


  return (
    <div>
      <header id="header" className={`header fixed-top ${navbarMobile ? 'header-mobile' : ''}`}>
        <div className="container-fluid container-xl">
          <Link to="" className="logo d-flex align-items-center">
            <img src={logo} width="150" height="100" alt="" />
          </Link>
          <nav nav id="navbar" className={`navbar ${navbarMobile ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><Link to="/home" className="nav-link scrollto" id="nav_home">Home</Link></li>
              <li><Link to="/ambulance" className="nav-link scrollto" id="nav_ambulance">Ambulance</Link></li>
              <li><Link to="/medicine" className="nav-link scrollto" id="nav_medicine">Medicine</Link></li>
              <li><Link to="/blog" className="nav-link scrollto" id="nav_blog">Blog</Link></li>
              <li><Link to="/contact" className="nav-link scrollto" id="nav_contact">Contact</Link></li>
              <li className="getstarted scrollto">Get Started</li>
            </ul>
            <i className={`bi ${navbarMobile ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={handleClick}></i>
          </nav>
        </div>
        <hr />
      </header>

    </div>
  );
};

export default Navbar