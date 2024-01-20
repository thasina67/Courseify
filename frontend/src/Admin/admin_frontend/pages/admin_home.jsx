import React from 'react'
import './admin_home.css'
import { useEffect } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import { CourseDetails } from '../admin_components/courseDetails'
import { CourseForm } from '../admin_components/CourseForm'
import { Navbar } from '../admin_components/Navbar'

export const AdminHome = () => {
 const {courses, dispatch} = useCoursesContext()
 const {admin} = useAuthContext()

  //fetching courses from backend
  useEffect(() => {
    const fetchCourses = async() => {
        const response = await fetch('/api/courses', {
          headers: {
            'Authorization': `Bearer ${admin.token}`
          }
        })
        const json = await response.json()

        if(response.ok){
          dispatch({type: 'SET_COURSES', payload: json})
        }
    }

    if (admin) {
      fetchCourses()
    }
  }, [dispatch, admin])

  return (
    <div>
      <div className="adminHeader">
        <Navbar/>
      </div>
      <div className="adminBody">
        <div className="admin_courses">
          {courses && courses.map((course)=>(
              <CourseDetails key = {course._id} course={course}/>
          ))}
        </div>
        <CourseForm/>
       </div>
       <div className="footer">

       </div>
    </div>
    
  )
}
