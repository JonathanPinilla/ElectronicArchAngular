import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {


  items: any[] = [
    {
      name: 'Item 1',
      price: 10.99,
      description: "testItemDesc",
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg',
      quantity: 1
    },
    {
      name: 'Item 2',
      price: 7.99,
      description: "testItemDesc",
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg',
      quantity: 1
    }
  ];

  totalPrice: number = 0;

  ngOnInit(): void {
    this.total();
  }

  total() {
    this.totalPrice = 0;
    this.items.forEach(item => {
      this.totalPrice += (item.price * item.quantity);
    });
  }

  removeFromCart(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
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
