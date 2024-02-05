

import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowempbyidComponent } from './showempbyid/showempbyid.component';
import { ProductsComponent } from './products/products.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaModule } from 'ng-recaptcha';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    ShowempbyidComponent,
    ProductsComponent,
    ExpPipe,
    GenderPipe,
    HeaderComponent,
    LogoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    RecaptchaModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }