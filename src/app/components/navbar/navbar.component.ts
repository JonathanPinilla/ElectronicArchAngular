import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private clientService: ClientService, private router: Router) {
  }
  logged: string = 'false';
  cartItems = [
    { name: 'Item 1', price: 10.99, image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' },
    { name: 'Item 2', price: 7.99, image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' }
  ];

  ngOnInit(): void {
    this.logged = localStorage.getItem('logged') || 'false';
  }

  logout(){
    this.clientService.logout()
      .then(() => {
        console.log('logged out');
        this.logged = 'false';
        localStorage.setItem('logged', String(false));
        this.router.navigate(['']);
      })
      .catch((error) => {
      console.log(error);
    });
  }

}
