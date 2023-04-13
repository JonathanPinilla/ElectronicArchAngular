import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {CartItem} from "../models/cartItem";

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  private cartItems: CartItem[] = [];
  private cartItemsSubject = new Subject<CartItem[]>();

  constructor() {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  addToCart(item: CartItem): void {
    const cartItem = {
      ...item,
      quantity: 1
    };
    const existingItem = this.cartItems.find(ci => ci.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push(cartItem);
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(itemId: string): void {
    const index = this.cartItems.findIndex(ci => ci.id === itemId);
    if (index >= 0) {
      const item = this.cartItems[index];
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

}
