import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from 'src/service/user.service';
import { UserImplService } from 'src/service/user-impl.service';
import { LoginComponent } from './login/login.component';
import { HttpReqInterceptor } from 'src/service/http-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [{ provide: UserService, useClass: UserImplService },
  { provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
