import Slider from 'react-slick'
import Divider from '../Divider/Divider'
import './style.css'
import { testimonial } from '../../data'
import { FaStar } from 'react-icons/fa6'
import React from 'react'

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    pauseOnHover : true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }
  return (
    <section id='testimonial'>
      <div className="container">
        <h1 className='title'>Client <span className='text__gradient'>Testimonial</span></h1>
        <Divider/>
        <Slider
          {...settings}
          className='clients__container '
        >
          {
            testimonial.map((list, index)=>(
              <React.Fragment key={index}>
                <div className="stars__container">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

                <p className='text__muted content'>{list.review}</p>
                <div className="user__row">
                  <div className="profile">
                    <img src={list.image} alt={list.name} />
                  </div>
                  <div className="details">
                    <h3 className='name'>{list.name}</h3>
                  </div>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial