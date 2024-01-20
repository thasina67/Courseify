import React, { useState } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'
import './CourseForm.css'
import { useAuthContext } from '../hooks/useAuthContext'

export const CourseForm = () => {
    const { dispatch } = useCoursesContext()
    const { admin } = useAuthContext()

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [enrollees, setEnrollees] = useState('')
    const [rating, setRating] = useState('')
    const [link, setLink] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!admin) {
            setError('You must be looged in')
            return
        }

        const course =  {name, category, enrollees, rating, link}

        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${admin.token}`
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields || [])
        }
        if(response.ok){
            setName('')
            setCategory('')
            setEnrollees('')
            setRating('')
            setLink('')
            setError(null)
            setEmptyFields([])
            console.log('New Course Added', json)
            dispatch({type: 'CREATE_COURSE', payload: json})
        }
    }

        return (
            <form className="create" onSubmit={handleSubmit}> 
                <h3> Add a New Course </h3>

                <label> Name of the Course: </label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={emptyFields.includes('name') ? 'error' : ''}
                />

                <label> Category to which the course belongs to: </label>
                <input
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className={emptyFields.includes('category') ? 'error' : ''}
                />

                <label> Number of students enrolled: </label>
                <input
                    type="text"
                    onChange={(e) => setEnrollees(e.target.value)}
                    value={enrollees}
                    className={emptyFields.includes('enrollees') ? 'error' : ''}
                />

                <label> Rating of the course: </label>
                <input
                    type="number"
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    className={emptyFields.includes('rating') ? 'error' : ''}
                />

                <label> Link for the course: </label>
                <input
                    type="text"
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    className={emptyFields.includes('link') ? 'error' : ''}
                />

                <button> Add Course </button>

                {error && <div className="error">{error}</div>}
            </form>
        )
}
