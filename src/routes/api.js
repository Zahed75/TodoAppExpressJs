const express=require('express')
const ProfileController=require("../controllers/ProfileController")
const router=express.Router();



router.post("/create-profile",ProfileController.CreateProfile)

router.post("/user-Login",ProfileController.UserLogin)

module.exports=router;