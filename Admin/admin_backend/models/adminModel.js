const mongoose = require('mongoose')

//bcrypt is a hashing function that can hash our function in a secure way
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
adminSchema.statics.signup = async function(email, password) {

    //validation
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password is not strong')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const admin = await this.create({ email, password: hash })

    return admin

}

//static login method
adminSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields must be filled')
    }

    const admin = await this.findOne({ email })

    if(!admin) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, admin.password)

    if(!match) {
        throw Error('Incorrect Password')
    }

    return admin
}

module.exports = mongoose.model('Admin', adminSchema)