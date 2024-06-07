import { Component, inject } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/routes.config";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
    standalone: true,
    imports: [FormsModule, NgIf],
})
export class LoginComponent {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(form: NgForm) {
    this.authService.login(form.value).subscribe({
      next: (response) => {
        this.toastr.success("Bienvenu");
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        //Affichage un message d'erreur
        this.toastr.error("Veuillez vérifier vos credentials");
      },
    });
  }
}
