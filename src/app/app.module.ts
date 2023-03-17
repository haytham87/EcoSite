import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AuthLayoutComponent } from './Layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './Layout/app-layout/main-layout/main-layout.component';
import { AdsNavbarComponent } from './Layout/ads-navbar/ads-navbar.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { SubNavbarComponent } from './Layout/sub-navbar/sub-navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';

import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    AdsNavbarComponent,
    NavbarComponent,
    SubNavbarComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FeatherModule.pick(allIcons),
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
