import { Component, Input } from '@angular/core';

class Item {
  name: string;
  imageUrl: string;
  detail: string;
  rating: number;
  link: string;
  category: string;

  constructor(name: string, imageUrl: string, detail: string, rating: number, link:string, category: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.detail = detail;
    this.rating = rating;
    this.link= link;
    this.category= category;
  }
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Item;

}
