import { socialHandles } from '../../data'
import './style.css'

const SocialHandler = () => {
  return (
    <div className='social__handles__container'>
        {
            socialHandles.map((handle, index)=>(
                <a href={handle.link} className='icon__container handle' key={index}>
                    {handle.icon}
                </a>
            ))
        }
    </div>
  )
}

export default SocialHandler