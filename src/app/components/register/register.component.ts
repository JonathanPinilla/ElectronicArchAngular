import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({})

  constructor(private builder: FormBuilder, private clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      id: '',
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      orders: [],
      deleted: false,
    });
  }

  submit() {
    this.clientService.register(this.registerForm.value).then(response =>
      this.router.navigate(['/login']));
  }

}
