import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  @Input() itemCount:number;
  @Output() clearCompletedEvt:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clearAllCompleted(){
    this.clearCompletedEvt.emit(true);
  }

}
