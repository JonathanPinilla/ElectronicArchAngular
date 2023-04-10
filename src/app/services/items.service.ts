import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  api: string = "http://localhost:8080/api/items";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.api);
  }
}
