import './style.css'
import { menus } from '../../data.jsx';
import {Link} from 'react-scroll'
import { FaArrowRightLong } from 'react-icons/fa6';
import Logo from '../Logo/Logo.jsx';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import {RiMenu3Fill} from 'react-icons/ri'

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className='navbar'>
        {open ? (<div className='sidebar__overlay' onClick={()=>setOpen(!open)}></div>): ''}
        <Logo/>
        <div className={`column hamburger ${open ? 'visible' : ""}`}>
            <div className="menu__group">
                <div className='icon__container cancel__btn'>
                    <FaTimes onClick={()=>setOpen(!open)}/>
                </div>
                {menus.map((menu, index)=>(
                    <Link
                        to={menu.routeId}
                        className='item'
                        activeClass='text__gradient'
                        smooth={true}
                        spy={true}
                        
                        onClick={open ? ()=>setOpen(!open) : ""}
                        offset={-70}
                        key={index}
                    >
                        {menu.name}
                    </Link>
                ))}
            </div>
        </div>

        <div className="column">
            <Link to='contact' className='btn contact__btn'>Get Started <FaArrowRightLong/></Link>
            <div className='icon__container menu__btn' onClick={()=>setOpen(!open)}>
                <RiMenu3Fill/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar