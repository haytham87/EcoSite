import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from "angular-feather";

import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent} from './payment/payment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductComponent } from './product/product.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

import { MainRoutingModule } from './main-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DonePaymentComponent } from './done-payment/done-payment.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AboutUsComponent,
    ArticleComponent,
    BlogComponent,
    CategoryComponent,
    ContactComponent,
    DeliveryComponent,
    FaqComponent,
    HomeComponent,
    PaymentComponent,
    PrivacyPolicyComponent,
    ProductComponent,
    ShippingComponent,
    ShoppingCartComponent,
    TermsConditionsComponent,
    DonePaymentComponent
  ],
  imports: [
    MainRoutingModule,
    MatTabsModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    FeatherModule,
    CommonModule
  ]
})
export class MainModule { }
