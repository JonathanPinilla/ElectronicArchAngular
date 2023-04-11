import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  cartItems = [
    { name: 'Item 1', price: 10.99, image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' },
    { name: 'Item 2', price: 7.99, image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' }
  ];

}
