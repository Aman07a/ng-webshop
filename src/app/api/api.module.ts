import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductIndexComponent } from './products/product-index/product-index.component';
import { OrderIndexComponent } from './orders/order-index/order-index.component';

@NgModule({
  declarations: [
    ProductIndexComponent,
    OrderIndexComponent,
    ShoppingCartComponent,
  ],
  imports: [CommonModule, ApiRoutingModule],
})
export class ApiModule {}
