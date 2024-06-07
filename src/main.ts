import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { ToastrModule } from "ngx-toastr";
import { provideAnimations } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AuthInterceptor } from "./app/auth/interceptor/auth.interceptor";
import {
  HTTP_INTERCEPTORS,
  withInterceptorsFromDi,
  provideHttpClient,
} from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ToastrModule.forRoot()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(appRoutes),
  ],
}).catch((err) => console.error(err));
