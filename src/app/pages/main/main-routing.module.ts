import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductComponent } from './product/product.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { WishlistComponent } from './wishlist/wishlist.component';

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
            path: 'allCategories',
            component: AllCategoriesComponent,
        },
        {
            path: 'appointment',
            component: AppointmentComponent,
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
            path: 'category:/id',
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
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
