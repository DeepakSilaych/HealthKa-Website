import React from 'react';
import i50 from "../assets/img/blog/1.jpeg"
import i51 from "../assets/img/blog/2.webp"
import i52 from "../assets/img/blog/3.png"
import { Link } from 'react-router-dom';

const RecentBlogPosts = () => {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts" data-aos="fade-up">
      <div className="container">
        <header className="section-header">
          <h2>Blog</h2>
          <p>Recent posts form our Blog</p>
        </header>

        <div className="row">

          <div className="col-lg-4">
            <div className="post-box">
              <div className="post-img"><img src={i50} className="img-fluid" alt="" /></div>
              <span className="post-date">1 Aug</span>
              <h3 className="post-title">
                Revolutionizing Healthcare: Introducing Healthka's Door Ambulance and Medicine Delivery Services
              </h3>
              <Link to={"/blog"} className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="post-box">
              <div className="post-img"><img src={i51} className="img-fluid" alt="" /></div>
              <span className="post-date">1 Aug</span>
              <h3 className="post-title">
                Join the Healthcare Revolution with Healthka
              </h3>
              <Link to={"/blog"} className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="post-box">
              <div className="post-img"><img src={i52} className="img-fluid" alt="" /></div>
              <span className="post-date">1 Aug</span>
              <h3 className="post-title">
                Discover Convenient Online Medicine Ordering with Healthka
              </h3>
              <Link to={"/blog"} className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
