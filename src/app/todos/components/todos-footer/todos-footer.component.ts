import { Component, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todos-footer',
  styleUrls: [],
  templateUrl: './todos-footer.component.html',
})
export class TodosFooterComponent {

  @Input() todosTotal: number;
  @Input() activeTotal: number;
  mode: FILTER_MODES;
  modeSubscription: Subscription;

  constructor(private todosService: TodosService,
    private router: Router) {
  }

  // Route the changes in filter modes
  // This allows for moving back/forward to different modes in browser history
  changeFilterRoute(mode: string) {
    this.router.navigate([`/${mode}`]);
  }

  clearCompleted() {
    this.todosService.clearCompleted();
  }

  ngOnInit(): void {
    this.modeSubscription = this.todosService.filterMode$.subscribe(mode => {
      this.mode = mode;
    });
  }

  ngOnDestroy(): void {
    if (this.modeSubscription) {
      this.modeSubscription.unsubscribe();
    }
  }

}
