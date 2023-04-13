import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {


  items: any[] = [];

  totalPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService, private itemsService: ItemsService) {
    this.items = this.shoppingCartService.getItems();
  }

  ngOnInit(): void {
    this.total();
    this.shoppingCartService.getItems().forEach(itemId => {
      this.itemsService.getOne(itemId).subscribe(data => {
        console.log(data);
        this.items.push(data);
      });
    });
  }

  total() {
    this.totalPrice = 0;
    this.items.forEach(item => {
      this.totalPrice += (item.price * item.quantity);
    });
  }

  removeFromCart(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
    this.total();
  }

  addRemove(item: any, action: string) {
    if (action === 'add') {
      item.quantity++;
      this.total();
    } else {
      if (!(item.quantity === 1)) {
        item.quantity--;
        this.total();
      }
    }
  }

}
