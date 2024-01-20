import React from 'react'
import './courseDetails.css'
import { useCoursesContext } from '../hooks/useCoursesContext'
import { useAuthContext } from '../hooks/useAuthContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const CourseDetails = ({ course }) => {

  const { dispatch } = useCoursesContext()
  const { admin } = useAuthContext()

  const handleClick = async () => {
    if (!admin) {
      return
    }
    const response = await fetch('/api/courses/' + course._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${admin.token}`
      }
    })
    const json = await response.json()

    if (response.ok){
      dispatch({type: 'DELETE_COURSE', payload: json})
    }
  }

  return (
    <div className="course-details">
        <h4> {course.name} </h4>
        <p><strong> Category:  </strong> {course.category}</p>
        <p><strong> Enrollees:  </strong> {course.enrollees}</p>
        <p><strong> Rating:  </strong> {course.rating}</p>
        <p><strong> Link:  </strong> <a href={course.link} className='linktocourse'>{course.link}</a></p>
        <p>  {formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })} </p>
        <span className="material-symbols-outlined" onClick={handleClick}> Delete </span>
    </div>
  )
}
