const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
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

userSchema.statics.login = async function (email, password) {
    if(!email || !password) {
        throw Error('All fileds must be filled')
    }
    const user = await this.findOne({ email })
    if(!user) {
        throw Error('incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error('incorrect password')
    }

    return user
}

userSchema.statics.signup = async function(email, password) {

    if(!email || !password) {
        throw Error('All fileds must be filled')
    }

    if(!validator.isEmail(email)) {
        throw Error('Enter valid email')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough')
    }

    const exists = await this.findOne({ email })
    if(exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)