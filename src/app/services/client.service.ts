import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {Client} from "../models/client";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  api: string = "http://localhost:8080/api/clients";

  constructor(private auth: Auth, private http: HttpClient) {}

  register(client: Client){
    let client2: Client = client;
    createUserWithEmailAndPassword(this.auth, client.email, client.password)
      .then((userCredential) => {
        // Signed in
        client2.id = userCredential.user.uid;
        client2.deleted = false;
        client2.orders = [];
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    return this.http.post(this.api, client2);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }



}
