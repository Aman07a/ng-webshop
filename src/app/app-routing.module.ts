import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'products',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./products/products.module').then((mod) => mod.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
