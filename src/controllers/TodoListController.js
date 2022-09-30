const TodoListModel = require("../models/TodoModel")

// var jwt = require('jsonwebtoken');

// Create TodoList

exports.CreateTodo = (req, res) => {
    let reqBody = req.body;


    let TodoSubject = reqBody['TodoSubject']
    let TodoDescriptions = reqBody['TodoSubject']
    let TodoStatus = reqBody = "New"
    let TodoCreateDate = reqBody = Date.now();
    let TodoUpdateDate = reqBody = Date.now();
    let UserName = req.headers['username']
    let todoBody = {
        UserName: UserName,
        TodoSubject: TodoSubject,
        TodoDescriptions: TodoDescriptions,
        TodoStatus: TodoStatus,
        TodoCreateDate: TodoCreateDate,
        TodoUpdateDate: TodoUpdateDate,

    }
    TodoListModel.create(todoBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "Failed", data: err})
        } else {
            res.status(201).json({status: "Todo Created Success", data: data})
        }
    })
}


// Read TodoList Specific User


exports.SelectTodo = (req, res) => {
    let UserName = req.headers['username']
    TodoListModel.find({UserName: UserName}, (err, data) => {
        if (err) {
            res.status(400).json({status: "failed", data: err})
        } else {
            res.status(200).json({status: "Data Read Success", data: data})
        }
    })
}

// Update TodoList using id

exports.UpdateTodo = (req, res) => {
    let TodoSubject = req.body['TodoSubject']
    let TodoDescriptions = req.body['TodoDescriptions']
    let _id = req.body['_id']
    let TodoUpdateDate = Date.now();

    let todoBody = {
        TodoSubject: TodoSubject,
        TodoDescriptions: TodoDescriptions,
        TodoUpdateDate: TodoUpdateDate
    }

    TodoListModel.updateOne({_id: _id}, {$set: todoBody}, {upsert: true}, (err, data) => {
        if (err) {
            res.status(400).json({status: "Failed", data: err})
        } else {
            res.status(200).json({status: "Todo Update Successfully", data: data})
        }
    })
}

// Update TodoList Status

exports.UpdateStatusTodo = (req, res) => {
    let _id = req.body['_id']
    let TodoStatus = req.body['TodoStatus']
    let TodoUpdateDate = Date.now()

    let todoStatus = {
        TodoStatus: TodoStatus,
        TodoUpdateDate: TodoUpdateDate

    }
    TodoListModel.updateOne({_id: _id}, {$set: todoStatus}, {upsert: true}, (err, data) => {
        if (err) {
            res.status(400).json({status: "Failed", data: err})
        } else {
            res.status(200).json({status: "Todo Status Update Success", data: data})
        }
    })
}

//Remove TodoList

exports.RemoveTodo = (req, res) => {
    let _id = req.body['_id']

    TodoListModel.remove({_id:_id},(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed",data:err})
        }
        else{
            res.status(200).json({status:"Removed Success",data:data})
        }
    })
}

//Filter TodoList By Status

exports.SelectTodoByStatus = (req, res) => {
    let UserName = req.headers['username']
    let TodoStatus=req.body['TodoStatus']
    TodoListModel.find({UserName: UserName,TodoStatus:TodoStatus}, (err, data) => {
        if (err) {
            res.status(400).json({status: "failed", data: err})
        } else {
            res.status(200).json({status: "Data Read Success", data: data})
        }
    })
}


//Filter by TodoList by Date

exports.FilterByDateTodo=(req,res)=>{
    let UserName=req.headers['username']

    let FormDate=req.body['FormDate']
    let ToDate=req.body['TodoDate']
    TodoListModel.find({UserName:UserName,TodoCreateDate:{$gte:new Date(FormDate),$lte:new (ToDate)}},(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed",data:err})
        }
        else{
            res.status(200).json({status:"Success",data:data})
        }
    })

}
