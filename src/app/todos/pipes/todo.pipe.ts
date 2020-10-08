import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';

// Filter out the appropriate todos using a Pipe
// All returns every todo regardless of status
// Active returns every non-complete todo
// Completed returns all todos that were marked as complete by the user
@Pipe({ name: 'filterMode' })
export class FilterModePipe implements PipeTransform {
    transform(todos: ITodo[], mode: FILTER_MODES): ITodo[] {
        switch (mode) {
            case 'All': return todos;
            case 'Active': return todos.filter((todo: ITodo) => {
                return !todo.completed;
            });
            case 'Completed': return todos.filter((todo: ITodo) => {
                return todo.completed;
            });
        }
    }
}
