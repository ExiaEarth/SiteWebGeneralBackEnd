const bodyValidation=(yupValidator)=>{
    return async(req,res,next)=>{
        try {
            const valideData=await yupValidator.noUnknown().validate(req.body,{abortEarly:false})
            req.body=valideData;
            next();
        } catch (e) {
            console.log(e);
            return res.sendStatus(400).json(e);
        }
    }
}

module.exports=bodyValidation;