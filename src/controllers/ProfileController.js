const ProfileModel = require("../models/ProfileModel");
var jwt = require('jsonwebtoken');
exports.CreateProfile = (req, res) => {

    let reqBody = req.body; // body data ke call kora
    ProfileModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "Failed", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    });

};

//UserLogin Controller
exports.UserLogin = (req, res) => {
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];
    ProfileModel.find({UserName: UserName, Password: Password}, (err, data) => {
        if (err) {
            res.status(400).json({status: "Something Wrong", data: err})
        } else {
            if (data.length > 0) {
                let Payload = {
                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data[0]
                };
                let token = jwt.sign(Payload, 'SecretKey12345');
                res.status(200).json({status: "Success", token:token, data: data})
            } else {
                res.status(401).json({status: "Unauthorized!"})
            }
        }
    })
}