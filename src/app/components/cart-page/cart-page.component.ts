import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ItemsService} from "../../services/items.service";
import {CartItem} from "../../models/cartItem";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Item} from "../../models/item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {


  cartItems: CartItem[] = [];

  totalPrice: number = 0;

  orderForm: FormGroup = new FormGroup({});

  constructor(private shoppingCartService: ShoppingCartService, private builder: FormBuilder, private router: Router) {

    this.orderForm = this.builder.group({
      clientId: '',
      price: 0,
      address: '',
      contactNumber: '',
      items: [],
      deleted: false,
    });

  }

  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getCartInitialItems();
    this.shoppingCartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
    this.total();
  }

  total() {
    this.totalPrice = 0;
    this.cartItems.forEach(item => {
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

  buyItems() {
    this.orderForm.value.items = this.cartItems.map(cartItem => {
      const { quantity, ...itemWithoutQuantity } = cartItem;
      return itemWithoutQuantity;
    });
    this.orderForm.value.price = this.totalPrice;
    this.shoppingCartService.buyItems(this.orderForm.value, this.cartItems);
    this.router.navigate(['orders']);
    this.shoppingCartService.emptyCart();
  }

}
