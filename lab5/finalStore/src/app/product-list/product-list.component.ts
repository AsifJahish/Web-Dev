import { Component } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  title = 'store';
      
  products= [
    {name: 'Smartphone Apple iPhone 13 128Gb Midnight black',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    detail: '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    category: 'beautyHealth'},
    {name: 'Smartphone Apple iPhone 13 128Gb Midnight black',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    detail: '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    category: 'houseHoldsProducts'},
    {name: 'Smartphone Apple iPhone 13 128Gb Midnight black',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    detail: '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    category: 'computer'},
    {name: 'Smartphone Apple iPhone 13 128Gb Midnight black',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    detail: '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    category: 'childrenGoods'},
    {name: 'Smartphone Apple iPhone 13 128Gb Midnight black',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    detail: '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    category: 'pharmacy'},
    {name: 'Smartphone Apple iPhone 13 128Gb Midnight black',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    detail: '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    category: 'childrenGoods'}
  ];


  total= this.products.length
  totalComputer= this.products.filter(c=> c.category==='computer').length;
  totalHouseHoldProduct= this.products.filter(h=>h.category==='houseHoldsProducts').length;
  totalBeautyHealth=this.products.filter(b=>b.category==='beautyHealth').length;
  totalPharmacy=this.products.filter(p=>p.category==='pharmacy').length;
  totalChildrenGoods=this.products.filter(ch=>ch.category==='childrenGoods').length;

  selectedButtonParent: string= 'all';

 
  onfilteredChanged(value :string){
    console.log(value);
    this.selectedButtonParent = value;
    console.log(this.selectedButtonParent);

    this.filterProducts(); 
  }


  filterProducts() {
    // Filter products based on the selected category
    if (this.selectedButtonParent === 'all') {
      this.filteredProducts = this.products;
    } else {
      switch (this.selectedButtonParent) {
        case 'computer':
          this.filteredProducts = this.products.filter(product => product.category === 'computer');
          break;
        case 'houseHoldsProducts':
          this.filteredProducts = this.products.filter(product => product.category === 'houseHoldsProducts');
          break;
        case 'beautyHealth':
          this.filteredProducts = this.products.filter(product => product.category === 'beautyHealth');
          break;
        case 'pharmacy':
          this.filteredProducts = this.products.filter(product => product.category === 'pharmacy');
          break;
        case 'childrenGoods':
          this.filteredProducts = this.products.filter(product => product.category === 'childrenGoods');
          break;
        default:
          break;
      }
    }
    
  }

  filteredProducts = this.products

}
  

