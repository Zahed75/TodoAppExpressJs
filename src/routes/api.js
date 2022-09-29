const express=require('express')
const ProfileController=require("../controllers/ProfileController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const router=express.Router();



router.post("/create-profile",ProfileController.CreateProfile)
router.post("/user-Login",ProfileController.UserLogin)
router.get("/select-profile",AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post("/update-profile",AuthVerifyMiddleware,ProfileController.UpdateProfile)
module.exports=router;