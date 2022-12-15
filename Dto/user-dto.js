class UserDTO{
    constructor(id,pseudo,prenom,nom,password,email,avatar,genre,age,role,description){
        this.id=id;
        this.pseudo=pseudo;
        this.prenom=prenom;
        this.nom=nom;
        this.password=password;
        this.email=email;
        this.avatar=avatar;
        this.genre=genre;
        this.age=age;
        this.role=role;
        this.description=description;
    }
}

module.exports=UserDTO;