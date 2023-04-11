import {Component} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  cartItems: any = [
    {
      name: 'Item 1',
      price: 10.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg',
      quantity: 1
    },
    {
      name: 'Item 2',
      price: 7.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg',
      quantity: 1
    }
  ];

  removeFromCart(item: any) {
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
  }

  addRemove(item: any, action: string) {
    if (action === 'add') {
      item.quantity++;
    } else {
      if (!(item.quantity === 1)) {
        item.quantity--;
      }
    }
  }

}
