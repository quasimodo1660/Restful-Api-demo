let mongoose = require('mongoose');
var Task=mongoose.model('Task');

module.exports={
    add:(req,res)=>{
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
    },
    show:(req,res)=>{
        Task.find({}).sort({createdAt:'desc'}).exec((err,results)=>{
            if(err){
                console.log(err);
                res.json({message:'Error',error:err});
            }     
            else{
                res.json({message:'Success',tasks:results});
            }          
        })
    },
    showOne:(req,res)=>{
        Task.find({_id:req.params.id},(err,results)=>{
            if(err){
                console.log(err);
                res.json({message:'Error',error:err});
            }     
            else{
                res.json({message:'Success',task:results});
            }        
        })
    },
    edit:(req,res)=>{
        Task.update({_id:req.params.id},{title:req.body.title,description:req.body.description,completed:req.body.completed},(err,results)=>{
            if(err){
                console.log(err);
                res.json({message:'Error',error:err});
            }     
            else{
                res.json({message:'Success'});
            }        
        })
    },
    remove:(req,res)=>{
        Task.remove({_id:req.params.id},(err,results)=>{
            if(err){
                console.log(err);
                res.json({message:'Error',error:err});
            }     
            else{
                res.json({message:'Success delete'});
            }        
        })
    }
}