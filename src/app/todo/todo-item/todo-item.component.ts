import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() toggleTodoEvt:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeTodoEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleTodo(){
    this.toggleTodoEvt.emit(true);
  }

  removeTodo(evt:Event){
    evt.stopPropagation();
    this.removeTodoEvent.emit(true);
  }

}
