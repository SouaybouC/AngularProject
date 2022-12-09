import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { ItemComponent } from './items/item.component';

const routes: Routes = [
    { path: '', component: ItemComponent },
    { path: 'cart', component: CartsComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
