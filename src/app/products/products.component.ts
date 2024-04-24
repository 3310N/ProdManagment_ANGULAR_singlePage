import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public products: any;
  public keyword: string = "";

  constructor() {
  }

  ngOnInit() {
    this.products = [
      {"id": 1, "name": "computer", "price": 10000},
      {"id": 2, "name": "mobile", "price": 5000},
      {"id": 3, "name": "laptop", "price": 15000},
      {"id": 4, "name": "tablet", "price": 1000},
      {"id": 5, "name": "smartwatch", "price": 500},
      {"id": 6, "name": "smarttv", "price": 20000},
      {"id": 7, "name": "camera", "price": 10000},
      {"id": 8, "name": "headphone", "price": 500},
      {"id": 9, "name": "earphone", "price": 200},
      {"id": 10, "name": "pendrive", "price": 100}
    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }

  search() {
    this.products = this.products.filter((p: any) =>
      p.name.includes(this.keyword));
  };

}
