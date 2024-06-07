import { TodoComponent } from "./todo/todo.component";
import { canLeaveGuard } from "./guards/can-leave.guard";
import { Routes } from "@angular/router";

export const todoRoutes: Routes = [
  {
    path: "",
    component: TodoComponent,
    canDeactivate: [canLeaveGuard],
  },
];
