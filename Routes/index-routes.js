
const authRouter = require('./auth-route');
const userRouter = require('./user-router');

const router=require('express').Router();

router.use('/auth',authRouter)
router.use('/user',userRouter)

module.exports=router;