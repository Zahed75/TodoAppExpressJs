var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let Token = req.headers['token-key']

    jwt.verify(Token, "SecretKey12345", function (err, decoded) {
        if (err) {
            res.status(401).json({status: "UnAuthorized"})
        } else {
            //Get username for decoded token & add with request header
            let username=decoded['data']['UserName']
            req.headers.username=username
            next();
        }
    })
}