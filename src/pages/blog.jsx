import React from 'react';
import "../assets/css/blog.css"
import Blogentry from '../components/blogentry';
import b1 from "../assets/img/blog/1.jpeg"
import b2 from "../assets/img/blog/2.webp"
import b3 from "../assets/img/blog/3.png"

const Blog = () => {
  return (
    <>
    <section className="blog" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="entries">

            <Blogentry
              tittle="Revolutionizing Healthcare: Introducing Healthka's Door Ambulance and Medicine Delivery Services"
              image={b1}
              detail="In today's fast-paced world, convenience and timely access to healthcare services are paramount. Imagine a service that brings medical assistance and essential medicines right to your doorstep when you need them the most. Welcome to the future of healthcare with Healthka – a groundbreaking startup that is changing the way we think about medical care."
            />

            <Blogentry
              tittle="Join the Healthcare Revolution with Healthka"
              image={b2}
              detail="Experience the future of healthcare with Healthka's door ambulance and medicine delivery services. We're here to redefine the way you think about medical care – putting your health and well-being at the forefront of everything we do. Say goodbye to long waits and unnecessary stress. Say hello to convenience, reliability, and peace of mind.
              Contact Healthka today and discover a new era of healthcare services that cater to your needs, right at your doorstep."
            />
            <Blogentry
              tittle="Discover Convenient Online Medicine Ordering with Healthka"
              image={b3}
              detail="Healthka is your trusted partner for hassle-free medicine delivery. With our user-friendly platform, you can conveniently order a wide range of essential medicines online and have them delivered right to your doorstep. Our extensive network of partnered pharmacies ensures that you receive genuine, high-quality medications in a timely manner. Say goodbye to long waits and pharmacy lines – experience the ease and convenience of Healthka's online medicine ordering today. Your health, our priority."
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
