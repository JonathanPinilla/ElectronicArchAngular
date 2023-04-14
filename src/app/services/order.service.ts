import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  api: string = 'http://localhost:8080/orders';

  getOrders(): Observable<any> {
    return this.http.get(this.api);
  }

}
