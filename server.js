var express = require('express');
var app = express();

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//*************** DB stuff ****************/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var TaskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,default:' ',maxlength:500},
    completed:{type:Boolean,default:false}
},{timestamps:true});

var Task = mongoose.model('Task',TaskSchema);

//************* API Stuff ****************/
app.post('/tasks',(req,res)=>{
    console.log(req.body);
    task = new Task(req.body);
    task.save(function(err){
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }            
        else{
            res.json({message:'Success add a task'});
        } 
    })
})

app.get('/tasks',(req,res)=>{
    Task.find({},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'Success',data:results});
        }          
    })
})

app.get('/tasks/:id',(req,res)=>{
    Task.find({_id:req.params.id},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'Success',data:results});
        }        
    })
})

app.put('/tasks/:id',(req,res)=>{
    Task.update({_id:req.params.id},{title:req.body.title,description:req.body.description,completed:req.body.completed},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'Success'});
        }        
    })
})

app.delete('/tasks/:id',(req,res)=>{
    Task.remove({_id:req.params.id},(err,results)=>{
        if(err){
            console.log(err);
            res.json({message:'Error',error:err});
        }     
        else{
            res.json({message:'Success delete'});
        }        
    })
})

app.listen(6789,function(){
    console.log('listening on port 6789');
})