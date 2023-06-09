import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {CartItem} from "../models/cartItem";
import {Item} from "../models/item";
import {ItemsService} from "./items.service";
import {Order} from "../models/order";
import {OrderService} from "./order.service";
import {Auth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  private cartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  private cartItemsSubject = new Subject<CartItem[]>();

  constructor(private itemService: ItemsService, private orderService: OrderService, private auth: Auth) {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
      this.cartItemsSubject.next(this.cartItems);
      console.log('cartItems:', this.cartItems);
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

  emptyCart(): void {
    this.cartItems = [];
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(item: CartItem): void {
    console.log('cartItems before:', this.cartItems);
    console.log('item to remove:', item);
    const index = this.cartItems.indexOf(item);
    if (index >= 0) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.cartItemsSubject.next(this.cartItems);
    }
    console.log('cartItems after:', this.cartItems);
  }

  getCartInitialItems(): CartItem[] {
    return this.cartItems;
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  buyItems(order: Order, items: CartItem[]): void {
    order.clientId = this.auth.currentUser?.uid || '';
    this.orderService.saveOrder(order).subscribe({
      next: (order) => {
        console.log('order:', order);
      },
      error: (err) => {
        console.log('error:', err);
      }
    });

    items.forEach(item => {
      this.itemService.sell(item.id,item.quantity).subscribe({
        next: (item) => {
          console.log('sold item:', item);
        },
        error: (err) => {
          console.log('error:', err);
        }
      });
    });
  }

}
