
const User = require('../Models/user-model');

const argon2=require('argon2');



const authController={
    login:async(req,res)=>{
        const {identifiant,password}=req.body;

        const identifiantFilter={$or :[{email:identifiant},{pseudo:identifiant}]}
        const user=await User.findOne(identifiantFilter)
        if (!user) {
            return res.status(401).json({error:'bad credential'})
        }
        const verifierPassword=await argon2.verify(user.password,password)
        if (!verifierPassword) {
            return res.status(401).json({error:'non autorisée'})
        }
        res.status(200).json(user)
    },
    register:async(req,res)=>{
        const {pseudo,prenom,nom,password,email,avatar,genre,age,description}=req.body;

        const hashPassword=await argon2.hash(password);

        const insertToUser=User({
            pseudo,
            prenom,
            nom,
            password : hashPassword,
            email,
            avatar,
            genre,
            age,
            description,
            
        });
        await insertToUser.save();
        res.status(200).json(insertToUser)
    }
};

module.exports=authController;