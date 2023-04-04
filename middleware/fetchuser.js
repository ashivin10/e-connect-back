const jwt =require('jsonwebtoken')


const fetchuser =(req,res,next)=>{
// Getting user from jwt and add it to req obj
const token = req.header('auth-token')
if(!token){
    res.status(402).send({error:'please authenticate using a valid token'})
}
try { 
    const data =jwt.verify(token,process.env.JWTPRIVATEKEY)
    req.user=data.user
    next()
}
 catch (error) {
    res.status(402).send({error:'please authenticate using a valid token'})
}
}


module.exports=fetchuser