var tasks = require('../controllers/tasks.js');
module.exports = function(app){
    app.post('/tasks',(req,res)=>{
        tasks.add(req,res)
    })
    app.get('/tasks',(req,res)=>{
        tasks.show(req,res)
    })
    app.get('/tasks/:id',(req,res)=>{
        task.showOne(req,res)
    })
    app.put('/tasks/:id',(req,res)=>{
        task.edit(req,res)
    })
    app.delete('/tasks/:id',(req,res)=>{
        task.remove(req,res)
    })
}