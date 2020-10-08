import { Component, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todo-item',
  styleUrls: [],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Input() index: number;
  @ViewChild('editInput') editInput: ElementRef;
  edit = false;

  constructor(
    private todosService: TodosService,
  ) { }

  editTodo() {
    this.edit = true;
    setTimeout(() => { this.editInput.nativeElement.focus(); }, 0);
  }

  removeTodo(index: number) {
    this.todosService.removeTodo(index);
  }

  toggleComplete(index: number) {
    this.todosService.toggleComplete(index);
  }

  updateTodo(event: any, index: number) {
    this.edit = false;
    const { value } = event.target;
    this.todosService.updateTodo(index, value);
  }
}
