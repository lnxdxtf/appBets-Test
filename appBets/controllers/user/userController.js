const User = require('../../models/user/userModel')
const provSecurity = require('../../providers/Security/hashSecurity')
const {v4:uuidv4} =  require('uuid');
var nicknameDefaultInc = uuidv4().substr(30)



exports.get = async(req,res)=>{
    try{
        let users = await User.find()
        res.status(200).send(users)
    }catch(err){
        console.log("Erro: "+err)
        res.status(400).send(err)
    }
}

exports.post = async(req,res)=>{
    try{
        if (await User.findOne({email: req.body.email})){
            res.status(400).send({"error":"Email Already Exists on DB, Try Again"})
        }
        let passwUser = req.body.password
        req.body.password = provSecurity.hashPassGen(passwUser)
        req.body.nickname = req.body.name+"_"+nicknameDefaultInc
        const userCreate = await User.create(req.body)
        res.status(201).send(userCreate)
    }catch(err){
        console.log("Erro Post: "+err)
        res.status(400).send({"Error: ":"Ao criar usuário"+err})
    }
}
