const yup=require('yup')
const registerValid=yup.object({
    pseudo:yup.string().trim().required().min(3).max(50),
    prenom:yup.string().trim().required().min(1).max(110),
    nom:yup.string().trim().required().min(1).max(100),
    password:yup.string().trim().required().min(3).max(50),
    email:yup.string().trim().required().min(2).max(100),
    avatar:yup.string(),
    age:yup.number(),
    description:yup.string()
});
const logValidator=yup.object({
    identifiant : yup.string().trim().required().max(255),
    password : yup.string().required()
});

module.exports={registerValid,logValidator}