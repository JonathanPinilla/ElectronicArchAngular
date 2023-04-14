import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {CartItem} from "../../models/cartItem";
import {ItemsService} from "../../services/items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  constructor(private shoppingCartService: ShoppingCartService, private itemService: ItemsService, private router: Router) {
  }

  cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getCartInitialItems();
    this.shoppingCartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(item: CartItem) {
    this.shoppingCartService.removeFromCart(item);
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

  checkOut() {
    this.router.navigate(['/shopping-cart']);
  }

}
