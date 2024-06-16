import React from 'react';
import { courses } from '../../data';
import Divider from '../Divider/Divider';
import './style.css';
import Slider from "react-slick";
import {TiStarFullOutline} from 'react-icons/ti'

const Courses = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    pauseOnHover : true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }
  return (
    <section id='courses'>
      <div className="container">
        <h1 className='title'>Explore Our <span className='text__gradient'>Courses</span></h1>
        <Divider/> 
        <Slider {...settings} className='courses__container'>
          {
            courses.map((list, index)=>(
              <React.Fragment key={index}>
                <div className="picture">
                  <img src={list.image} alt={list.title} />
                </div>
                <div className="details">
                  <h3 className='name'>{list.title}</h3>
                  <p className='text__muted'>{list.description}</p>
                </div>
                <div className="row">
                  <h3>4.8</h3>
                  <div className="starts__container">
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                  </div>
                  <p>234</p>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default Courses