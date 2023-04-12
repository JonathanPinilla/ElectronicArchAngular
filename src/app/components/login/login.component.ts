import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
  ) {
  }

  loginForm = this.builder.group({
    email: '',
    password: ''
  });

  

}