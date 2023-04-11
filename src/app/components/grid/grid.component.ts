import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit{

  items: any[] = [
    { name: 'Item 1', price: 10.99, description: "testItemDesc", image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' },
    { name: 'Item 2', price: 7.99, description: "testItemDesc" ,image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg' }
  ];

  constructor(private service: ItemsService){}

  ngOnInit(): void {
    //this.getAll();
  }

  getAll(){
    return this.service.getAll().subscribe({
      next: items => {
        this.items = items;
      },
      error:error => console.error(error)
    });
  }

}
