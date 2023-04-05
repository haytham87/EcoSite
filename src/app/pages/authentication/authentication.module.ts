import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        ForgetPasswordComponent,
    ],
    imports: [
        AuthenticationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})

export class AuthenticationModule { }