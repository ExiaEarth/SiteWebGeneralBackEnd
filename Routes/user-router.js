const userController = require('../Controllers/user-controller');

const userRouter=require('express').Router();

userRouter.route('/')
    .get(userController.getAll)
userRouter.route('/:id')
    .get()
    .put()
    .delete()

    module.exports=userRouter