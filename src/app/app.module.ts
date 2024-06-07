/* import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app.routes";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./auth/login/login.component";
import { AuthInterceptor } from "./auth/interceptor/auth.interceptor";
import { FirstComponent } from "./components/first/first.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NF404Component } from "./components/nf404/nf404.component";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FirstComponent,
    NavbarComponent,
    NF404Component,
    LoginComponent,
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
 */
