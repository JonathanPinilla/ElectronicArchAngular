import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit{

  items: any[] = [];

  constructor(private service: ItemsService){}

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

}
