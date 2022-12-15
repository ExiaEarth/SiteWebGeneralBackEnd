const{Schema,model}=require("mongoose");


const userSchemaDef=new Schema({
    pseudo:{type:String,require:true,unique:true,trim:true},
    prenom:{type:String,require:true,trim:true},
    nom:{type:String,require:true,trim:true},
    password:{type:String,require:true,trim:true},
    email:{type:String,require:true,unique:true,trim:true},
    avatar:{type:String},
    genre:{type:String,require:true,default:'NoN',Enum:['NoN','F','H','NB']},
    age:{type:Number,require:true},
    role:{type:String,require:true,default:'User',Enum:['User','Moderateur','Administrateur']},
    description:{type:String}
},{
    collection:'User',
    timestamps:true
});
const User=model('User',userSchemaDef);
module.exports=User;