import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newTask={};
  tasks=[];
  task={};
  // showOne=false;
  title = 'Restful Tasks API';
  constructor(private _httpService:HttpService){}
  ngOnInit(){
    this.getTasksFromService();
    this.newTask={title:"",description:""};
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {console.log("Got our tasks!", data)
    this.tasks = data['tasks']
    });  
  }
  getTaskButtonClick(task){
    this.newTask={id:task._id,title:task.title,description:task.description} 
  }
  onSubmit(){
    console.log(this.newTask);
    if('id' in this.newTask){
      let id = this.newTask['id'];
      this.newTask['completed']=false;
      this._httpService.updateTask(id,this.newTask).subscribe(data=>{
        console.log(data);
        this.newTask={title:"",description:""}
      })
    }
    else{
      this.newTask['completed']=false;
      this._httpService.addOneTask(this.newTask).subscribe(data=>{
        console.log(data);
        this.newTask={title:"",description:""}
    });
    } 
    this.getTasksFromService();
  }

  deleteTask(id){
    this._httpService.removeTask(id).subscribe(data=>{
      console.log(data)
      this.getTasksFromService();
    });    
  }

  taskComplete(task){
    if(task.completed)
      task.completed=false;
    else
      task.completed=true;
    let id = task._id;
    this._httpService.updateTask(id,task).subscribe(data=>{
      console.log(data);
      this.getTasksFromService();
    })
  }
}


