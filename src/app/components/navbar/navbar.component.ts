import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private clientService: ClientService, private router: Router) {
  }

  logged: string = localStorage.getItem('logged') || 'false';

  ngOnInit(): void {
    this.logged = localStorage.getItem('logged') || 'false';
  }

  logout(){
    this.clientService.logout()
      .then(() => {
        console.log('logged out');
        localStorage.setItem('logged', String(false));
        this.router.navigate(['login']);
      })
      .catch((error) => {
      console.log(error);
    });
  }

}
