const mongoose = require('mongoose');

const SchemaUser = new mongoose.Schema ({
    name:{
        type: String,
        require: true
    },
    nickname:{
        type: String,
        require: false,
        
    },
    gender:{
        type: Boolean,
        require: false
    },
    birthday: {
        type: Date,
        require: true
    },
    register: {
        type:Date,
        require: true,
        default: Date.now
    },
    bets:[{
        type: String,
        require: false,
        default: []
    }],
    policy:[{
        type:Boolean,
        require: false,
        default:[]
    }],
    password: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require: true
    }
})

const User = mongoose.model('User', SchemaUser)
module.exports = User