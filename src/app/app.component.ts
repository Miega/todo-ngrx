import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosService } from '@app/todos/services/todos.service';
import { Subscription } from 'rxjs';
import { ITodo } from '@app/todos/interfaces';
import { StorageService } from '@app/todos/services/storage.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  subscription: Subscription;
  todos: ITodo[] = [];
  activeTodos: ITodo[] = [];

  constructor(private todosService: TodosService,
    private storageService: StorageService) {
  }

  ngOnInit(): void {
    const storedTodos = this.storageService.getItem('todos') || [];
    if (storedTodos.length > 0) {
      this.todosService.setTodos(storedTodos);
    }
    this.subscription = this.todosService.allTodos$.subscribe(todos => {
      this.todos = todos;
      this.activeTodos = this.todos.filter((todo: ITodo) => !todo.completed);
      this.storageService.setItem('todos', this.todos);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
