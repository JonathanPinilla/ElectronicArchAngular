import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {CartItem} from "../../models/cartItem";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  constructor(private shoppingCartService: ShoppingCartService, private itemService: ItemsService) {
  }
  cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.shoppingCartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }


  removeFromCart(item: CartItem) {
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
    this.shoppingCartService.removeFromCart(item.id);
  }

  addRemove(item: CartItem, action: string) {
    if (action === 'add') {
      item.quantity++;
    } else {
      if (!(item.quantity === 1)) {
        item.quantity--;
      }
    }
  }



}
