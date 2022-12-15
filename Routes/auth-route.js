


const authRouter=require('express').Router();

const multer=require('multer');
const uuid=require('uuid');
const authController = require('../Controllers/auth-controller');

const bodyValidation = require('../Middlewares/body-middllewares');
const { registerValid } = require('../Validateur/auth-validateur');

const storage=multer.diskStorage({});

const upload=multer({storage});

authRouter.route('/login')
    .post()
authRouter.route('/register')
    .post(bodyValidation(registerValid),authController.register)

module.exports=authRouter;