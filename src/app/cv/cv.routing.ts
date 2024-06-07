import { Routes } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsComponent } from "./details/details.component";

export const cvRoutes: Routes = [
  { path: "", component: CvComponent },
  {
    path: "add",
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: ":id", component: DetailsComponent },
];
