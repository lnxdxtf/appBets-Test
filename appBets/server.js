const express = require('express');
const mongoose = require('mongoose');
const {PORT, mongoURI}= require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')


//mongoDB
mongoose.connect(mongoURI)
                        .then(()=>console.log("Conectado com o MongoDB Atlas"))
                        .catch((err)=>console.log("Erro ao se conectar ao MongoDB Atlas-- ERRO: "+err))
                        
//app decl
const app = express();

//app uses setting
app.use(cors())
app.use(morgan('tiny')); 
app.use(bodyParser.json());

//init route
app.get('/', (req, res) => {
    res.send("OK")
})

//app use routes
const userRoutes = require('./routes/api/users/userRoutes')
app.use('/api/v1/user', userRoutes)

app.listen(PORT, ()=>console.log(`App rodando em: http://localhost:${PORT}`))