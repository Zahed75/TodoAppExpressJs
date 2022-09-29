const express=require('express')
const ProfileController=require("../controllers/ProfileController");
const TodoController=require("../controllers/TodoListController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const router=express.Router();



router.post("/create-profile",ProfileController.CreateProfile)
router.post("/user-Login",ProfileController.UserLogin)
// Token Needed
router.get("/select-profile",AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post("/update-profile",AuthVerifyMiddleware,ProfileController.UpdateProfile)
router.post("/create-todo",AuthVerifyMiddleware,TodoController.CreateTodo)
module.exports=router;