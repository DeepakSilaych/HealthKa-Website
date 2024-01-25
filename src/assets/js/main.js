import React, { useEffect } from 'react';
import AOS from 'aos';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import PureCounter from 'purecounter';

const JS = () => {
  useEffect(() => {
    navbarlinksActive();
    headerScrolled();
    toggleBacktotop();
    aos_init();

    return () => {
      // Clean up any event listeners or resources that need to be removed
      // if necessary.
    };
  }, []);

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    const navbarlinks = select('#navbar .scrollto', true);
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };

  const scrollto = (el) => {
    const header = select('#header');
    let offset = header.offsetHeight;

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10;
    }

    const elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth',
    });
  };

  const headerScrolled = () => {
    const selectHeader = select('#header');
    if (selectHeader) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
        } else {
          selectHeader.classList.remove('header-scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
    }
  };

  const toggleBacktotop = () => {
    const backtotop = select('.back-to-top');
    if (backtotop) {
      const handleToggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };

      window.addEventListener('scroll', handleToggleBacktotop);
    }
  };

  const handleMobileNavToggle = (e) => {
    select('#navbar').classList.toggle('navbar-mobile');
    e.target.classList.toggle('bi-list');
    e.target.classList.toggle('bi-x');
  };

  const handleMobileNavDropdown = (e) => {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      e.target.nextElementSibling.classList.toggle('dropdown-active');
    }
  };

  const handleScrollTo = (e) => {
    if (select(e.target.hash)) {
      e.preventDefault();

      const navbar = select('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        const navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(e.target.hash);
    }
  };

  const handleHashLinksScroll = () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  };

  const handlePortfolioFilter = (e) => {
    e.preventDefault();
    const portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });

      const portfolioFilters = select('#portfolio-flters li', true);
      portfolioFilters.forEach((el) => {
        el.classList.remove('filter-active');
      });
      e.target.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: e.target.getAttribute('data-filter'),
      });
      aos_init();
    }
  };

  const aos_init = () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  };

};

export default JS;
