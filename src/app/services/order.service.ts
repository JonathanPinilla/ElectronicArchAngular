import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  api: string = 'http://localhost:8080/api/orders';

  getOrders(): Observable<any> {
    return this.http.get(this.api);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.api, order);
  }

}
