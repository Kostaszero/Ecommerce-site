import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagCartComponent } from './bag-cart/bag-cart.component';
import { PolaroidListComponent } from './polaroid-list/polaroid-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: PolaroidListComponent},
  {path: 'cart-section', component: BagCartComponent},
  { path: 'check-out', component: CheckOutComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
