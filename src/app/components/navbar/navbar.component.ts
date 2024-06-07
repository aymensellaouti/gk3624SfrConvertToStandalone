import { Component, inject } from "@angular/core";
import { AuthService } from "../../auth/services/auth.service";
import { NgIf } from "@angular/common";
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
    standalone: true,
    imports: [
        RouterLinkActive,
        RouterLink,
        NgIf,
    ],
})
export class NavbarComponent {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
