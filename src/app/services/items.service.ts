import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  api: string = "http://localhost:8080/api/items";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.api);
  }

  getOne(id: string): Observable<any>{
    return this.http.get(`${this.api}/${id}`);
  }

  save(item: Item): Observable<Item>{
    return this.http.post<Item>(this.api, item);
  }

  update(item: Item): Observable<Item>{
    return this.http.put<Item>(`${this.api}/${item.id}`, item);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.api}/${id}`);
  }

}
