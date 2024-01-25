import React from 'react';
import Hero from '../components/hero';
import Counts from '../components/counts';
import FAQ from "../components/faq"
import Features from "../components/features"
import Values from "../components/home-values"
import Portfolio from "../components/portfolio"
import RecentBlogPosts from '../components/recent-blogs';
import Contact from '../components/contact_home';
import Treechart from '../components/treechart';

const Home = () => {
  return (
    <>
        <Hero/>
        <main id='main'>
          <Treechart/>  
          <Values/>
          <Counts/>
          <Features/>
          <FAQ/>
          <Portfolio/>
          <RecentBlogPosts/>
        </main>
    </>
  );
};

export default Home;
