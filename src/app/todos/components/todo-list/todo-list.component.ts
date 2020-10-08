import { Component, ChangeDetectorRef } from '@angular/core';
import { TodosService } from '@app/todos/services/todos.service';
import { Subscription } from 'rxjs';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { ITodo } from '@app/todos/interfaces';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent {
  subscription: Subscription;
  todos: ITodo[] = [];
  modeSubscription: Subscription;
  mode: FILTER_MODES;
  edit = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private todosService: TodosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setFilterMode(this.router.url)
    this.subscription = this.todosService.allTodos$.subscribe(todos => {
      this.todos = todos;
    });
    this.modeSubscription = this.todosService.filterMode$.subscribe(mode => {
      this.mode = mode;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.modeSubscription) {
      this.modeSubscription.unsubscribe();
    }
  }

  // Switch views using the router and calling todosService
  setFilterMode(path: string){
    switch(path){
      case '/active':
      this.todosService.changeFilterMode('Active');
      break;
      case '/completed':
      this.todosService.changeFilterMode('Completed');
      break;
      default:
      this.todosService.changeFilterMode('All');
      break;
    }
  }

  removeTodo(index: number) {
    this.todosService.removeTodo(index);
  }

  toggleComplete(index: number) {
    this.todosService.toggleComplete(index);
  }

}
