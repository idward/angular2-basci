import {Injectable} from '@angular/core';
import {Todo} from "../models/todo.model";
import {UUID} from "angular2-uuid";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TodoService {
  todos:Todo[] = [];
  private _url = 'http://localhost:3000/todos';
  private _headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private _http:Http) {
  }

  addTodo(desc:string):Promise<Todo> {
    let todo = {
      todoId: UUID.UUID(),
      description: desc,
      completed: false
    };

    return this._http.post(this._url, JSON.stringify(todo), {headers: this._headers})
      .toPromise()
      .then(res => res.json() as Todo)
      .catch(this._errorHandle);
  }

  getTodos():Promise<Todo []> {
    return this._http.get(this._url)
      .toPromise()
      .then(res => res.json() as Todo[])
      .catch(this._errorHandle);
  }

  toggleTodo(todo:Todo):Promise<Todo> {
    let url = this._url + '/' + todo.todoId;
    let updatedTodo:Todo = Object.assign({}, todo, {completed: !todo.completed});
    return this._http.put(url, JSON.stringify(updatedTodo), {headers: this._headers})
      .toPromise()
      .then((res) => res.json() as Todo)
      .catch(this._errorHandle);
  }

  removeTodoById(todoId:string):Promise<void> {
    let url = this._url + '/' + todoId;
    return this._http.delete(url, {headers: this._headers})
      .toPromise()
      .then((res) => {
        console.log(res.json());
        return null;
      })
      .catch(this._errorHandle);
  }

  private _errorHandle(error:any):Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error || 'Server error');
  }
}
