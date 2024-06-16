import { FaBookOpenReader } from 'react-icons/fa6'
import './style.css'

const Logo = () => {
  return (
    <div className='logo__container'>
        <FaBookOpenReader className='icon'/>
        <h1 className='name'>Course<span className='color__primary'>Po</span> </h1>
    </div>
  )
}

export default Logo