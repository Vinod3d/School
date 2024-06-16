import { Link } from 'react-scroll'
import './style.css'
import { student_pic } from '../../assets/Images'
import { IoMdStar } from 'react-icons/io'
import FunFacts from '../FunFacts/FunFacts'
import { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {

  const container = useRef(null)
  useGSAP(()=>{
    const timeline = gsap.timeline({delay: .5});
    timeline
    .fromTo(".media__group", {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1})
    .from(".title", {opacity:0})
    .from(".description", {opacity:0})
    .from(".buttons__group", {x: -40, opacity:0})
  },{scope:container} )

  return (
    <header id='hero' ref={container}>
      <div className='container full__height'>
        <div className="group info">
          <h1 className='title'>
            Study Together With
            <span className='text__gradient'>CoursePo</span>
            Anywhere
          </h1>
          <p className='description text__muted'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis sapiente inventore vitae omnis minima in nobis fugit. Veniam libero voluptatibus quis!
          </p>

          <div className="buttons__group">
            <Link to='focus-base' className='btn btn__primary'>Explore more</Link>
            <Link to='contact' className='btn'>Get Started</Link>
          </div>
          <FunFacts/>
        </div>

        <div className='group'>
          <div className="media__group">
            <img src={student_pic} alt="" />
            <div className="rating__container">
              <h1>Exellent</h1>
              <div className="stars__container">
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
              </div>
              <p>Based on 1000+ reviews</p>
              <h3>Trustpilot</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero