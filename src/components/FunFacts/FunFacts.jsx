import { useEffect, useState } from 'react'
import './style.css'
import Odometer from 'react-odometerjs'
import { GiTeacher } from 'react-icons/gi';
import { FaBookAtlas } from 'react-icons/fa6';
import {PiStudentBold} from 'react-icons/pi'
import { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const FunFacts = () => {
    const container = useRef(null)
    const [instructors, setInstructors] = useState(0);
    const [students, setStudents] = useState(0);
    const [courses, setCourses] = useState(0)

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setInstructors(155);
            setStudents(2500);
            setCourses(7000);
        }, 3000)

        return () =>{
            clearTimeout(timeoutId);
        }
    }, []);

    useGSAP(()=>{
        const timeline = gsap.timeline({delay: .5});
        timeline
        .from(".fact__item", {x: -100, stagger: .5, opacity:0})
    },{scope:container} )

  return (
    <div className='fun__facts blur-effect' ref={container}>
        <div className="fact__item">
            <div className="icon__container" style={{background: 'var(--color-success)'}}>
                <GiTeacher/>
            </div>
            <div className="count__container">
                <Odometer
                    value={instructors}
                    className='title'
                />
                <div className="title">+</div>
            </div>
            <p className='text__muted'>Certified Professional Instructor</p>
        </div>

        <div className="fact__item">
            <div className="icon__container" style={{background: 'blue'}}>
                <PiStudentBold/>
            </div>
            <div className="count__container">
                <Odometer
                    value={students}
                    className='title'
                />
                <div className="title">+</div>
            </div>
            <p className='text__muted'>Student around the world</p>
        </div>

        <div className="fact__item">
            <div className="icon__container" style={{background: 'red'}}>
                <FaBookAtlas/>
            </div>
            <div className="count__container">
                <Odometer
                    value={courses}
                    className='title'
                />
                <div className="title">+</div>
            </div>
            <p className='text__muted'>Courses on all areas</p>
        </div>
    </div>
  )
}

export default FunFacts