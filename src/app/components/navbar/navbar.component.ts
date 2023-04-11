import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  cartItems = [
    { name: 'Item 1', price: 10.99, image: 'url' },
    { name: 'Item 2', price: 7.99, image: 'url' }
  ];
}
