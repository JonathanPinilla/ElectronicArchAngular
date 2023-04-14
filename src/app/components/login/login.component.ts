import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: '',
      password: ''
    });
  }

  submit() {
    this.clientService.login(this.loginForm.value)
      .then(data => {
        console.log(data);
        localStorage.setItem('logged', String(true));
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
