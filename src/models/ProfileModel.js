const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    FirstName: {type: String},
    LastName: {type: String},
    EmailAddress: {type: String},
    MobileNumber: {type: String},
    City: {type: String},
    UserName: {
        type: String,
        unique: true,
    },
    Password: {
        type: String,
        validate:{
            validator: function (value) {
                if(value.length===6){
                    return true
                }
                else{
                    return  false
                }
            },
            message:"Password Must Be 6 digit!"
        }
    }

}, {versionKey: false});
const ProfileModel = mongoose.model('profile', DataSchema)

module.exports = ProfileModel;

