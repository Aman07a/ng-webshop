import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersHomeComponent, OrderListComponent, CheckoutComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class OrdersModule {}
