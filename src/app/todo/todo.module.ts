import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {TodoService} from "./todo.service";
import {routing} from "./todo.routes";

import {TodoComponent} from "./todo.component";
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  providers: [TodoService]
})

export class TodoModule {
}
