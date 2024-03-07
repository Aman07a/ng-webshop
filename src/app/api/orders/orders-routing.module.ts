import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersHomeComponent } from './orders-home/orders-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirect to a specific route within the orders module
    pathMatch: 'full',
  },
  {
    path: 'home', // Change the base path for the child routes
    component: OrdersHomeComponent,
    children: [
      { path: '', component: OrderListComponent }, // Use an empty path to display OrderListComponent
      // Other child routes if needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}

