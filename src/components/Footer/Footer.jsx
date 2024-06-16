import { Link } from 'react-scroll'
import { footer } from '../../data'
import './style.css'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          {
            footer.map((list, index)=>(
              <div className="column" key={index}>
                <h3 className='group__name'>{list.group}</h3>
                <div className="routes__container">
                  {
                    list.routes.map((route, index)=>(
                      <Link to={route.routeId || "#"} key={index} className='route__item'>
                        {
                          route.icon ? <div className='icon__container'>{route.icon}</div>: ""
                        }
                        <p className='name'>{route.name}</p>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <div className="column">
            <Logo/>
            <form className='newsletter'>
              <h3>Get Weekly update</h3>
              <div className="control__container">
                <input type="text" placeholder='Enter your email address' className='control'/>
                <button className='btn' type='button'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <article className='copyright__container'>
          <h3>Copyright &copy; All right reserved - | 2024</h3>
          <p className="text__muted">Built by Vinod Chandra</p>
        </article>
      </div>
    </footer>
  )
}

export default Footer