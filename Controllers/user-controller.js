const UserDTO = require("../Dto/user-dto");
const User = require("../Models/user-model");



const userMapper=(user)=>UserDTO(user.id,user.pseudo,user.prenom,user.nom,user.password,user.email,user.avatar,user.genre,user.age,user.role,user.description);


const userController={
    // Recherche tous les utilisateurs dans la BD
    getAll : async(req,res)=>{
        const users = await User.find();

        const userDTO=users.map(userMapper)

        res.status(200).json(userDTO);
    },
    // Recher un utilisateur par sont IDunique
    getById : async (res,req)=>{
        const id=req.params.id;

        const user=await User.findById(id);
          
        if (!user) {
            return res.sendStatus(404) // <------ élément pas trouvée lors de la demande
        }

        const userDTO=userMapper(user);

        res.status(200).json(userDTO);
    },
    update: async (res,req)=>{
        const id=req.params.id;

        const {pseudo,prenom,nom,email,avatar,genre,age,description}=req.body
        //la fonction qui permet de trouver l'élément via son id et de le modifier
        const userUpdated=await User.findByIdAndUpdate(id,{pseudo,prenom,nom,email,avatar,genre,age,description},{returnDocument:'after'});

        if (!userUpdated) {
            return res.sendStatus(404) // <------ élément pas trouvée lors de la demande
        }
       // notre userUpdated qui contient password + role 
       // notre  userDTO qui ne les contient pas
        const userDTO=userMapper(userUpdated);
        res.status(200).json(userDTO);
    },
    delete:async(res,req)=>{
        const id=req.params.id;
        const userToDelete= await User.findByIdAndDelete(id);
        if (!userToDelete) {
            return res.sendStatus(404);//NotFound=>id
        }
        res.sendStatus(204);//Tout les action sont bon , trouvée et supprimer
    }
}
module.exports=userController;