import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input()
  all:number= 0
  @Input()
  computers: number= 0
  @Input()
  householdProducts: number= 0
  @Input()
  beautyHealth: number=0
  @Input()
  pharmacy: number=0
  @Input()
  childrenGood:number=0

}
