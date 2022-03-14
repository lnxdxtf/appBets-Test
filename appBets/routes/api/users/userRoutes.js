const { Router } = require('express')
const userController = require('../../../controllers/user/userController')

userRouter = Router()

userRouter.get('/users',userController.get )
userRouter.post('/signup',userController.post)

module.exports = userRouter