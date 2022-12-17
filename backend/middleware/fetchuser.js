const jwt = require('jsonwebtoken');
let JWT_SECRET = "MongoLearningCourse$GoodCourse";

const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please use valid token"});
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please use valid token"});
    }
}
module.exports=fetchuser;