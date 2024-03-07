import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirect to a specific route within the products module
    pathMatch: 'full',
  },
  {
    path: 'home', // Change the base path for the child routes
    component: ProductsHomeComponent,
    children: [
      { path: '', component: ProductListComponent }, // Use an empty path to display ProductListComponent
      { path: 'not-found', component: NotFoundComponent },
      { path: ':id', component: ProductDetailComponent },
      // Other child routes if needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
