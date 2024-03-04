import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrdersComponent,
  ],
  imports: [CommonModule, ApiRoutingModule],
})
export class ApiModule {}
