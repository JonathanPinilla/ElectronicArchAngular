import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  items: string[] = [];

  constructor() {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  addToCart(itemId: string) {
    this.items.push(itemId);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  removeFromCart(itemId: string) {
    this.items = this.items.filter(item => item !== itemId);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
