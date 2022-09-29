const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescriptions:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:Date},
    TodoUpdateDate:{type:String}
},{versionKey:false});

const TodoListModel=mongoose.model('TodoList',DataSchema)
module.exports=TodoListModel
