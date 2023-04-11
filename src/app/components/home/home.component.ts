import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleSidenav() {
    this.drawer.toggle();
  }

}
