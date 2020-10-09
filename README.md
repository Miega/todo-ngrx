## Todo MVC - Angular and State Management with RxJs + NgRx

A project based on [TodoMVC](http://todomvc.com/examples/angularjs/#/). I wanted to learn about state management and how to keep app functionality inside services, as opposed to inside components.

For this project, I wanted to break down the functions of the TodoMVC application into small components:
  - `add-todo`: Adds additional todos to the todo list
  - `todo-item`: Re-usable component for each todo item, enables editing of each todo item
  - `todos-footer`: Shows remaining todos, uses routing to filter different todo views (All, Active, Completed)
  - `complete-all`: Toggles all todo-item components between active/completed status
  - `todo-list`: Displays the list of todo-item components and holds the current filter mode

Ensuring that each component is small and reusable is a critical element of UI design. I learned a lot from reading [Brad Frost's "Atomic Design"](https://atomicdesign.bradfrost.com/chapter-1/) and use his ideas and concepts in breaking down components into their most easily-understood parts.

The tracking of todo statuses is done via services. The `todos.service.ts` tracks changes on the front-end, which is then relayed to the `state` of the application, done in NgRx.

[NgRx](https://ngrx.io) allows the application to keep track of unique actions done on the front end, as seen in the `todo.action.ts` file. From there, they can be passed down into `todos.reducer.ts` to transition one state to the next state.

## Running the project

After downloading and installing everything, run `npm run serve` and navigate to `localhost:3300`.
