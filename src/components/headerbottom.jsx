import React from 'react'
import PropTypes from 'prop-types'

function Headerbottom(props) {
  return (
    <section className="breadcrumbs">
      <div className="container">

        <ol>
          <li><a href="index.html">Home</a></li>
          <li>{props}</li>
        </ol>
        <h2>{props}</h2>

      </div>
    </section>
  )
}

Headerbottom.propTypes = {props}

export default Headerbottom
