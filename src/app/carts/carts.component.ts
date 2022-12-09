import { Component } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent {
  myEmptyCard = "Your card is empty";
  items: any[] = JSON.parse(localStorage.getItem("cart") || '{}');
  emptyCard: boolean = this.items.length == undefined;
  update: any[] = [];
  changeQuantity(product:any) {
    if(this.items != null || this.items !== '{}') {

        this.update = this.items.find(obj => obj.id == product.id);

    }
}

}
