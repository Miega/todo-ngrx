import { Component, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-add-todo',
  styleUrls: [],
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {

  newTodo = "";

  constructor(private todosService: TodosService) {
  }

  addTodo() {
    if (!this.newTodo) {
      return;
    }
    this.todosService.addTodo(this.newTodo);
    this.newTodo = "";
  }
}
