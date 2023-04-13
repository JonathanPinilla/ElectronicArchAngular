import {Component, OnInit} from '@angular/core';
import {ItemsService} from 'src/app/services/items.service';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {Item} from "../../models/item";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartItem} from "../../models/cartItem";

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
        private snackBar: MatSnackBar
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

}
