import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';
import { TranslateModule } from '@ngx-translate/core';
// import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    AuthLayoutComponent, 
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule
  ]
})
export class LayoutModule { }
