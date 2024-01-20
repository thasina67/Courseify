const Course = require('../models/courseModel')
const mongoose = require('mongoose')

//GET all courses
const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1}) //in descending order
    res.status(200).json(courses)
}

//GET a single courses
const getCourse = async (req, res) => {
    const { id } = req.params //all the route parameters are stored on a params property

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course found'})
    }

    const course = await Course.findById(id)

    if(!course){
        return res.status(404).json({error: 'No such course found'})
    }
    res.status(200).json(course)
}

//POST a new course
const createCourse = async (req, res) => {
    const {name, category, enrollees, rating, link} = req.body

    let emptyFields = []

    if(!name) {
        emptyFields.push('name')
    }
    if(!category) {
        emptyFields.push('category')
    }
    if(!enrollees) {
        emptyFields.push('enrollees')
    }
    if(!rating) {
        emptyFields.push('rating')
    }
    if(!link) {
        emptyFields.push('link')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill all the fields', emptyFields })
    }

    //adding doc to database
    try{
        const course = await Course.create({ name, category, enrollees, rating, link })
        res.status(200).json(course)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//DELETE a course
const deleteCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course found'})
    }

    const course = await Course.findOneAndDelete({_id: id})

    if(!course){
        return res.status(404).json({error: 'No such course found'})
    }
    res.status(200).json(course)
}

//UPDATE a course
const updateCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course found'})
    }

    const course = await Course.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!course){
        return res.status(404).json({error: 'No such course found'})
    }
    res.status(200).json(course)
}

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse
}