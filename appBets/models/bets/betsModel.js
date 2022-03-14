const mongoose = require('mongoose')
const User = require('../user/userModel')
const SchemaBets = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dateRegister:{
        type: Date,
        required: true,
        default:Date.now
    },
    dateEvent:{
        type: Date,
        required: true
    },
    usersVotes:[{
        type:User.email,
        required: false
    }],
    eventAward:{
        type: String,
        required: false
    }
})

const Bets = mongoose.model('Bets',SchemaBets)
module.exports = Bets