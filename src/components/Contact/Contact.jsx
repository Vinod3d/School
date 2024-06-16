import SocialHandler from '../SocialHandler/SocialHandler'
import './style.css'

const Contact = () => {
  return (
    <div id='contact'>
      <div className="container">
        <h1 className='title'>
          <span className='text-gradient'>Contact <span className='title text__gradient'>Us</span> </span>
        </h1>
        <p className="text__muted description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quam necessitatibus, exercitationem accusamus ut sit nesciunt esse pariatur facere doloribus maxime alias aliquam numquam animi officia id veniam maiores similique. Accusantium, quam blanditiis.
        </p>
        <button className="btn btn_primary">Let us talk</button>
        <SocialHandler/>
      </div>
    </div>
  )
}

export default Contact