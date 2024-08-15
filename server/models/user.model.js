const mongoose = require('mongoose')
const { string } = require('prop-types')
const { Schema } = mongoose

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:string,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        confirmPassword:{
            type:string,
            required:true
        },
        Mobile:{
            type:Number,
            required:true,
            unique:true
        },
        profilePicture:{
            type:String
        },
        addressLine1:{
            type:String,
            required:true
        },
        addressLine2:{
            type:String
        },
        pinCode:{
            type:Number,
            required:true
        }
    },
    {timestamps:true}
)

const user = mongoose.model('User',userSchema)
module.exports = user