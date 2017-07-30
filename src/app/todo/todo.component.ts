import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

import {Todo} from "../models/todo.model";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todos:Todo[] = [];
  placeholder:string = 'What needs to be done?';
  checkAll:boolean = false;

  constructor(@Inject(TodoService) private _todoService, private _route:ActivatedRoute) {
  }

  ngOnInit():void {
    this._route.params.forEach((param:Params) => {
      let filter = param.filter;
      this.filterTodo(filter);
    })
  }

  addTodo(desc:string) {
    this._todoService.addTodo(desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        //this.desc = '';
        // this.checkTodoStatus();
        console.log(this.todos);
      });
  }

  toggleAll() {
    this.checkAll = !this.checkAll;
    // this.todos.forEach((todo:Todo) => {
    //   todo.completed = this.checkAll;
    // });
    Promise.all(this.todos.map(todo => this.toggleTodo(todo)))
      .then(values => console.log(values));
  }

  toggleTodo(todo:Todo):Promise<void> {
    let currentTodo = this.todos.indexOf(todo);
    //modify todos's data in server
    this._todoService.toggleTodo(todo)
      .then(todo => {
        this.todos = [...this.todos.slice(0, currentTodo), todo, ...this.todos.slice(currentTodo + 1)];
        this.checkTodoStatus();
      });

    return null;
  }

  private checkTodoStatus() {
    //toggle checkAll status
    let checkedLength = this.todos.filter(todo => {
      return todo.completed === true;
    }).length;

    if (checkedLength === this.todos.length) {
      this.checkAll = true;
    } else {
      this.checkAll = false;
    }
  }

  clearAllCompleted(){
    let completedTodos = this.todos.filter(todo => todo.completed === true);
    Promise.all(completedTodos.map(todo => this.removeTodo(todo)))
      .then(values => console.log(values));
  }

  removeTodo(todo:Todo):Promise<void> {
    this._todoService.removeTodoById(todo.todoId);
    let currentTodo = this.todos.indexOf(todo);
    this.todos = [...this.todos.slice(0, currentTodo), ...this.todos.slice(currentTodo + 1)];
    return null;
  }

  togglePlaceholder() {
    if (this.placeholder === '') {
      this.placeholder = 'What needs to be done?';
      return;
    }
    this.placeholder = '';
  }

  filterTodo(param:string){
    this._todoService.filterTodo(param)
      .then(todos => this.todos = [...todos]);
  }

}
