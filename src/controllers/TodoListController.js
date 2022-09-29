const TodoListModel=require("../models/TodoModel")

// var jwt = require('jsonwebtoken');

// Create TodoList

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


// Read TodoList Specific User


exports.SelectTodo=(req,res)=>{
    let UserName=req.headers['username']
    TodoListModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(400).json({status:"failed",data:err})
        }
        else{
            res.status(200).json({status:"Data Read Success",data:data})
        }
    })
}

// Update TodoList using id

exports.UpdateTodo=(req,res)=>{
    let TodoSubject=req.body['TodoSubject']
    let TodoDescriptions=req.body['TodoDescriptions']
    let _id=req.body['_id']
    let TodoUpdateDate=Date.now();

    let todoBody={
        TodoSubject:TodoSubject,
        TodoDescriptions:TodoDescriptions,
        TodoUpdateDate:TodoUpdateDate
    }

    TodoListModel.updateOne({_id:_id},{$set:todoBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed",data:err})
        }
        else{
            res.status(200).json({status:"Todo Update Successfully",data:data})
        }
    })
}