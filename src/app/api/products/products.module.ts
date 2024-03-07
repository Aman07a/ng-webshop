import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    ProductsHomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
