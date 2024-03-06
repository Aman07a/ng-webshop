import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductIndexComponent, ProductDetailComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
