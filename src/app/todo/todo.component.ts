///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
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

  constructor(@Inject(TodoService) private _todoService) {
  }

  ngOnInit():void {
    this.getTodos();
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

  getTodos() {
    this._todoService.getTodos()
      .then(todos => {
        this.todos = [...todos];
        console.log(this.todos);
      });
  }

  toggleAll() {
    this.checkAll = !this.checkAll;
    this.todos.forEach((todo:Todo) => {
      todo.completed = this.checkAll;
    });
  }

  toggleTodo(todo:Todo) {
    let currentTodo = this.todos.indexOf(todo);
    //modify todos's data in server
    this._todoService.toggleTodo(todo)
      .then(todo => {
        this.todos = [...this.todos.slice(0, currentTodo), todo, ...this.todos.slice(currentTodo + 1)];
        this.checkTodoStatus();
      });
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

  removeTodo(todo:Todo) {
    this._todoService.removeTodoById(todo.todoId);
    let currentTodo = this.todos.indexOf(todo);
    this.todos = [...this.todos.slice(0, currentTodo), ...this.todos.slice(currentTodo + 1)];
  }

  togglePlaceholder() {
    if (this.placeholder === '') {
      this.placeholder = 'What needs to be done?';
      return;
    }
    this.placeholder = '';
  }

}
