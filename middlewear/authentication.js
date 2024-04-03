var jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    const token = req.cookies.access_token;
        try{
            const data = jwt.verify(token,"abc");
            if (data) {
                next();
            }
            else{
                res.redirect('/login')
                return;
            }
        }
        catch{
            res.redirect('/login');
            return;
        }  
}
module.exports = auth;
