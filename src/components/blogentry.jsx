import React from 'react'
import PropTypes from 'prop-types'
import "../assets/css/blog.css"

function Blogentry({tittle,detail,image,link}) {
  return (
    <article className="entry">
    <div className="entry-img">
      <img src={image} alt="" className="img-fluid" />
    </div>
    <h2 className="entry-title">
      {tittle}
    </h2>
    <div className="entry-meta">
      <ul>
        <li className="d-flex align-items-center">
          <i className="bi bi-clock"></i> 
          <time datetime="2020-01-01">Jun 1, 2023</time>
        </li>
      </ul>
    </div>
    <div className="entry-content">
      <p>
        {detail}
      </p>
    </div>
  </article>
  )
}

export default Blogentry
