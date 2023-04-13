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

    return createUserWithEmailAndPassword(this.auth, client.email, client.password)
      .then((userCredential) => {

        // Signed in
        client.id = userCredential.user.uid;

        this.http.post(this.api, client).subscribe({
            next: response => console.log(response),
            error: error => console.log(error)
          });

      })
      .catch((error) => {
        console.log(error);
      });

  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

}
