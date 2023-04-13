import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder,
  ) {
  }

  registerForm = this.builder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submit(){

  }

}
