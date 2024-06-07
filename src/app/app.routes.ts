import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";
import { APP_ROUTES } from "./config/routes.config";
import { NF404Component } from "./components/nf404/nf404.component";
import { LoginComponent } from "./auth/login/login.component";

export const appRoutes: Routes = [
  { path: "", component: FirstComponent },
  { path: "login", component: LoginComponent },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import("./cv/cv.routing").then((m) => m.cvRoutes),
    data: {
      preload: true,
    },
  },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.routing").then((m) => m.todoRoutes),
  },
  { path: "**", component: NF404Component },
];
