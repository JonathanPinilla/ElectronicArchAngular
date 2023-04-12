import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CartPageComponent} from "./components/cart-page/cart-page.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "shopping-cart",
    component: CartPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
