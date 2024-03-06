import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: OrderIndexComponent },
  {
    path: 'order-list',
    component: OrderListComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
