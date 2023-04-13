import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit{

  items: any[] = [];

  constructor(private service: ItemsService, private shoppingCartService: ShoppingCartService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    return this.service.getAll().subscribe({
      next: items => {
        this.items = items;
      },
      error:error => console.error(error)
    });
  }

  addToCart(itemId: string){
    this.shoppingCartService.addToCart(itemId);
  }

}
