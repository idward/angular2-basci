import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  desc:string;
  @Input() placeholder:string;
  @Output() placeholderOnFocus:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() placeholderOnBlur:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onEnterUp:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onFocus(){
    this.placeholderOnFocus.emit(true);
  }

  onBlur(){
    this.placeholderOnBlur.emit(true);
  }

  sendTodoDesc(){
    this.onEnterUp.emit(this.desc);
    this.desc = '';
  }

}
