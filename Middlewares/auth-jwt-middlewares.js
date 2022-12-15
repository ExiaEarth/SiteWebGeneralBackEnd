



const authentification=(role)=>{
    return async(req,res,next)=>{
        const authHeader=req.headers['authorization'];
        const token=authHeader ? authHeader.split('')[1]: false;
    }
}