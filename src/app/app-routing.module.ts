import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { TodosListComponent } from '@app/todos/components/todo-list/todo-list.component';

const routes: Routes = [
    {
        path: "active",
        component: TodosListComponent,
    },
    {
        path: "completed",
        component: TodosListComponent,
    },

    { path: "", component: TodosListComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
