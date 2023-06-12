import { Page500Component } from './page500/page500.component';
import { DonePaymentComponent } from './done-payment/done-payment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductComponent } from './product/product.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: 'home',
            component: HomeComponent,
        },
        {
            path: 'aboutUs',
            component: AboutUsComponent,
        },
        {
            path: 'article/:id',
            component: ArticleComponent,
        },
        {
            path: 'blog',
            component: BlogComponent,
        },
        {
            path: 'category/:id',
            component: CategoryComponent,
        },
        {
            path: 'contact',
            component: ContactComponent,
        },
        {
            path: 'delivery',
            component: DeliveryComponent,
        },
        {
            path: 'faq',
            component: FaqComponent,
        },
        {
            path: 'privacyPolicy',
            component: PrivacyPolicyComponent,
        },
        {
            path: 'product/:id',
            component: ProductComponent,
        },
        {
            path: 'termsAndConditions',
            component: TermsConditionsComponent,
        },
        {
            path: 'donePayment',
            component: DonePaymentComponent
        },
        {
            path: 'payment',
            component: PaymentComponent
        },
        {
            path:'cart',
            component:ShoppingCartComponent
        },
        {
            path: 'page500',
            component: Page500Component
        },
        { path: '**', component: Page404Component }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
