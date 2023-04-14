import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ItemsService} from "../../services/items.service";
import {CartItem} from "../../models/cartItem";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {


  items: CartItem[] = [];

  totalPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService, private itemsService: ItemsService) {

  }

  ngOnInit(): void {
    this.items = this.shoppingCartService.getCartInitialItems();
    this.shoppingCartService.getCartItems().subscribe(items => {
      this.items = items;
    });
    this.total();
  }

  total() {
    this.totalPrice = 0;
    this.items.forEach(item => {
      this.totalPrice += (item.price * item.quantity);
    });
  }

  removeFromCart(item: CartItem) {
    this.shoppingCartService.removeFromCart(item);
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
