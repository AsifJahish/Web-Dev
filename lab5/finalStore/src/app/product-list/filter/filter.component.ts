import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

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

  @Output()
  onchange :EventEmitter<string>= new EventEmitter<string>();

  selectedButton:string="all"

  onchangeEmit(){
    this.onchange.emit(this.selectedButton);

  }

}
