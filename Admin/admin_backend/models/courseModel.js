const mongoose = require('mongoose')

 const Schema = mongoose.Schema

 const courseSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        enrollees: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        link: {
            type: String,
            required: true
        },
 }, { timestamps: true })

module.exports = mongoose.model('Course', courseSchema)