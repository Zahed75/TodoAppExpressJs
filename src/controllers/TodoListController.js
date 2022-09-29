const TodoListModel=require("../models/TodoModel")

// var jwt = require('jsonwebtoken');

exports.CreateTodo=(req,res)=>{
    let reqBody=req.body;


    let TodoSubject=reqBody['TodoSubject']
    let TodoDescriptions=reqBody['TodoSubject']
    let TodoStatus=reqBody="New"
    let TodoCreateDate=reqBody=Date.now();
    let TodoUpdateDate=reqBody=Date.now();
    let UserName=req.headers['username']
    let todoBody={
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDescriptions:TodoDescriptions,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate,

    }
    TodoListModel.create(todoBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed",data:err})
        }
        else{
            res.status(201).json({status:"Todo Created Success",data:data})
        }
    })
}