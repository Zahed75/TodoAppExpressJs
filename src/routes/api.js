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
router.get("/select-todo",AuthVerifyMiddleware,TodoController.SelectTodo)
router.post("/update-todo",AuthVerifyMiddleware,TodoController.UpdateTodo)
router.post("/update-todo-status",AuthVerifyMiddleware,TodoController.UpdateStatusTodo)
router.post("/remove-todo",AuthVerifyMiddleware,TodoController.RemoveTodo)
router.post("/select-todoBy-status",AuthVerifyMiddleware,TodoController.SelectTodoByStatus)
router.post("/select-todoBy-Date",AuthVerifyMiddleware,TodoController.FilterByDateTodo)
module.exports=router;