import { TestProductComponent } from '../authentication/test-product/test-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: 'signin',
            component: SigninComponent,
        },
        {
            path: 'signup',
            component: SignupComponent,
        },
        {
            path: 'forgetPassword',
            component: ForgetPasswordComponent,
        },
        {
            path: 'test',
            component: TestProductComponent
        },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }