const jwt  = require('jsonwebtoken');

function authMiddleware(req,res,next){

    try{
        if(req.url.toString().indexOf('login') > -1){
            next();
        }
        else {
            const decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'sdfjskefbekf.423423knbfsksd.dasa2');
            next();
        }
    } catch(err){
        res.status(401).send({message: "Unauthorized"})
    }
}

module.exports = {authMiddleware}