import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, ApiRoutingModule],
})
export class ApiModule {}
