const bcrypt = require('bcrypt');

//CRIPTOGRAFIA E COMPARAÇÃO DE SENHAS

function hashPassGen(password){
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    return hash
}


function hashPassCompare(password,hash){
    return bcrypt.compareSync(password, hash)
}

module.exports = {hashPassGen, hashPassCompare}



// let password = "1234567890"
// console.log(hashPassGen(password))
// console.log(hashPassCompare(password, hashPassGen(password)))