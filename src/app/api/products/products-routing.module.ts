import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  // { path: '', component: ProductIndexComponent },
  // {
  //   path: 'product-list',
  //   component: ProductListComponent,
  // },
  // {
  //   path: 'product-detail',
  //   component: ProductDetailComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
