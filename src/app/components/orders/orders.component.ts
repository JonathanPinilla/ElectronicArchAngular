import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Auth} from "@angular/fire/auth";
import {Order} from "../../models/order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{

  panelOpenState = false;

  orders: Order[] = [];

  clientId: string = "";

  constructor(private orderService: OrderService, private auth: Auth) { }

  ngOnInit() {
    this.getOrders();
    this.clientId = this.auth.currentUser?.uid || "";
  }

  getOrders() {
    return this.orderService.getOrders().subscribe({
      next: order => {
        this.orders = order.find((order: Order) => order.clientId === this.clientId);
      },
      error: error => console.error(error)
    });
  }

}
