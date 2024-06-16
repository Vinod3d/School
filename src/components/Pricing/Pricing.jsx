import { FaCheck } from 'react-icons/fa6'
import { pricing } from '../../data'
import Divider from '../Divider/Divider'
import './style.css'

const Pricing = () => {
  return (
    <section id='pricing'>
      <div className="container">
        <h1 className='title'>
          Choose <span className='text__gradient'>A Package</span>
        </h1>
        <Divider/>
        <div className="pricing__container">
          {
            pricing.map((list, index)=>(
              <div className="pricing__card" key={index}>
                <h3 className='name'>{list.name}</h3>
                <div className="price__container">
                  <h1>{list.price}</h1>
                  <span>/month</span>
                </div>
                <div className="benefits__container">
                  {
                    list.benefits.map((benefit, index)=>(
                      <div className="benefit" key={index}>
                        <div className="icon"><FaCheck/></div>
                        <p className="text__muted">{benefit}</p>
                      </div>
                    ))
                  }
                </div>
                <button className='btn'>Get Started</button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Pricing