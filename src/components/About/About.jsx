import { students } from '../../assets/Images'
import { about } from '../../data'
import './style.css'

const About = () => {
  return (
    <div id='about-us'>
      <div className="container">
        <div className="column students__photo primary-effect">
          <img src={students} alt="students-pic" />
        </div>
        <div className="column about__cards__container">
          {
            about.map((list, index)=>(
              <div className="about__card" key={index}>
                <div className="icon__container" style={{background: list.color}}>
                  {list.icon}
                </div>
                <h3 className='name'>{list.title}</h3>
                <p className='text__muted'>{list.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About