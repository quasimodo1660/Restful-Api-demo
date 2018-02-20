var tasks = require('../controllers/tasks.js');
let path = require('path'); 

module.exports = function(app){ 
    app.post('/tasks',(req,res)=>{
        console.log('here');
        tasks.add(req,res)
    })
    app.get('/tasks',(req,res)=>{
        tasks.show(req,res)
    })
    app.get('/tasks/:id',(req,res)=>{
        tasks.showOne(req,res)
    })
    app.put('/tasks/:id',(req,res)=>{
        tasks.edit(req,res)
    })
    app.delete('/tasks/:id',(req,res)=>{
        tasks.remove(req,res)
    })
    app.get('/',(req,res)=>{
        console.log('here');
        res.send('Welcome to MEAN')
    })
    app.all('*',(req,res,next)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}