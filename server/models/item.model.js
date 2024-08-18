const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    items:{
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
            },
    },
   totalItems:{
    type:Number,
    required:true
   },
   totalPrice:{
    type:Number,
    
   }

},{
    timestamps: true
})