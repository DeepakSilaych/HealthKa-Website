import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/medicine.css"


function Medicine() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://63705c480399d1995d7c3302.mockapi.io/product')
      .then(response => {
        setData(response.data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section class="medicine" data-aos="fade-up">  
      <div id="heading">
        <div>
          <h1>All medicine are available</h1>
          <div className='whatsapp'>
              <h2>order now</h2>
              <a href="https://wa.me/9123686386?text=Healthka!%20I%20want%20to%20place%20my%20order">
                <img className='whatsapp_img' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-icon-png-image_6315990.png" alt=" whatsapp me"/>
              </a>
          </div>
        </div>
      </div> 
      <div id="container">
        {data.map(item => (
          <div data-aos="fade-up" data-aos-delay="50">
            <img src={item.image}/><p>{item.name}</p>
          </div>
        ))}
      </div>
  </section>
  )
}

export default Medicine