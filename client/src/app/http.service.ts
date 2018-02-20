import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }
  getTasks(){
    return this._http.get('/tasks');
  }
  getTaskByID(id){
    return this._http.get('/tasks/'+id);
  }
  addOneTask(newTask){
    return this._http.post('/tasks',newTask);
  }
  updateTask(id,newTask){
    return this._http.put('/tasks/'+id,newTask);
  }
  removeTask(id){
    return this._http.delete('/tasks/'+id);
  }
}
