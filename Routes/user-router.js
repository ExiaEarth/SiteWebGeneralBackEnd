const userController = require('../Controllers/user-controller');
const bodyValidation = require('../Middlewares/body-middllewares');
const idValidateur = require('../Middlewares/id-middlewares');

const userRouter=require('express').Router();

userRouter.route('/')
    .get(userController.getAll)
userRouter.route('/:id')
    .get(idValidateur(),userController.getById)
    .put(idValidateur(),bodyValidation(),userController.update)
    .delete(idValidateur(),userController.delete)

    module.exports=userRouter