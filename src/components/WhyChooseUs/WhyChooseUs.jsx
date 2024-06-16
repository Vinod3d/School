import { whyChooseUs } from '../../data'
import Divider from '../Divider/Divider'
import './style.css'

const WhyChooseUs = () => {
  return (
    <section id='why-choose-us'>
      <div className="container">
        <h1 className='title'>Why <span className='text__gradient'>Choose Us</span></h1>
        <Divider/>
        <div className="why__choose__us__container">
          {
            whyChooseUs.map((list, index)=>(
              <div className="choose__us__card" key={index}>
                <div className="icon__container">{list.icon}</div>
                <h3 className='name'>{list.name}</h3>
                <p className="text__muted description">{list.description}</p>
                <button className='btn btn__primary'>Read more</button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs