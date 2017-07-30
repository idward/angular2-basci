import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() checkAll:boolean = false;
  @Input() todos:Todo[];
  @Output() toggleTodoTopEvt:EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() checkAllEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeTodoTopEvent:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  toggleTodo(todo:Todo){
    this.toggleTodoTopEvt.emit(todo);
  }

  checkAllItem(){
    this.checkAllEvent.emit(!this.checkAll);
  }

  removeTodo(todo:Todo){
    this.removeTodoTopEvent.emit(todo);
  }

}
