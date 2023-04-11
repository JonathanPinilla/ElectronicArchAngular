import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() toggleSidenavEvent = new EventEmitter();

  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }

  showFiller = false;

  cartItems = [
    { name: 'Item 1', price: 10.99, image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' },
    { name: 'Item 2', price: 7.99, image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' }
  ];
}
