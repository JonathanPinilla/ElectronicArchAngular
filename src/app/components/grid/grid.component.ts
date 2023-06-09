import {Component, OnInit} from '@angular/core';
import {ItemsService} from 'src/app/services/items.service';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {Item} from "../../models/item";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartItem} from "../../models/cartItem";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

    items: Item[] = [];
    cartItems: CartItem[] = [];

    constructor(
        private service: ItemsService,
        private shoppingCartService: ShoppingCartService,
        private snackBar: MatSnackBar,
        public route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.getAll();
        this.shoppingCartService.getCartItems().subscribe(items => {
            this.cartItems = items;
        });
    }

    getAll() {
        return this.service.getAll().subscribe({
            next: items => {
                this.items = items;
            },
            error: error => console.error(error)
        });
    }

    addToCart(item: Item) {
        const cartItem: CartItem = {
            ...item,
            quantity : 1,
        }
        this.shoppingCartService.addToCart(cartItem);
        this.openSnackBar('Item added to cart', 'Close');
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 3000
        });
    }

    search(searchTerm: string){
      if(searchTerm === ""){
        this.getAll();
      }else{
        this.items = this.items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }
    }

    orderByPrice(order: string){
      if(order === "desc")
        this.items.sort((a, b) => b.price - a.price);
      else
        this.items.sort((a, b) => a.price - b.price);
    }

    filterByType(type: string){
      if(type === "all"){
        this.getAll();
      }else{
        this.items = this.items.filter(item => item.type === type);
      }
    }

}
