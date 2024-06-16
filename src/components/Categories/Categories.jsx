import { categories } from '../../data'
import Divider from '../Divider/Divider'
import './style.css'

const Categories = () => {
  return (
    <div id='categories'>
      <div className="container">
        <h1 className='title text__gradient'>Categories</h1>
        <Divider/>
        <div className="categories__container">
          <div className="categories">
            {
              categories.map((category, index)=>(
                <div className="category" key={index}>
                  <div className="row">
                    <div className="icon__container">
                      {category.icon}
                    </div>
                    <div className="details">
                      <h3 className='name'>{category.name}</h3>
                      <p className='text__muted'>{category.courseCount} Courses</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="categories">
            {
              categories.map((category, index)=>(
                <div className="category" key={index}>
                  <div className="row">
                    <div className="icon__container">
                      {category.icon}
                    </div>
                    <div className="details">
                      <h3 className='name'>{category.name}</h3>
                      <p className='text__muted'>{category.courseCount} Courses</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories