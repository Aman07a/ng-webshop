import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [OrderListComponent, CheckoutComponent],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
