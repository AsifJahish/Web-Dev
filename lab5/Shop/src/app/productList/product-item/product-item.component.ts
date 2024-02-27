import { Component } from '@angular/core';



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
    this.link= link
    this.category= category
  }

}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  title = 'store';
  items: Item[] = [];
      
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
  ]

  total= this.products.length
  totalComputer= this.products.filter(c=> c.category==='computer').length;
  totalHouseHoldProduct= this.products.filter(h=>h.category==='houseHoldsProducts').length;
  totalBeautyHealth=this.products.filter(b=>b.category==='beautyHealth').length;
  totalPharmacy=this.products.filter(p=>p.category==='pharmacy').length;
  totalChildrenGoods=this.products.filter(ch=>ch.category==='childrenGoods').length;

  selectedButtonParent: string= 'all';

  onfilteredChanged(value :string){
    this.selectedButtonParent=value;


  }

  constructor() {
    this.convertProductsToItems();
  }

  convertProductsToItems() {
    for (const product of this.products) {
      const newItem = new Item(
        product.name,
        product.imageUrl,
        product.detail,
        product.rating,
        product.link,
        product.category
      );
      this.items.push(newItem);
    }
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  updateFilteredItems() {
    // Implement your filtering logic here based on the selectedCategory
    // For example, if you want to filter by category, you can do something like:
    if (this.selectedButtonParent=== 'computer') {
      // Show all items
      this.items = this.products.map(product => new Item(
        product.name,
        product.imageUrl,
        product.detail,
        product.rating,
        product.link,
        product.category
      ));
    } else if (this.selectedButtonParent=== 'all'){
      // Filter items based on the selected category
      this.items = this.products
        .filter(product => product.category === this.selectedButtonParent)
        .map(product => new Item(
          product.name,
          product.imageUrl,
          product.detail,
          product.rating,
          product.link,
          product.category
        ));
    }
  }

  share(item: Item) {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(item.link)}&text=${encodeURIComponent(item.name + '\n' + item.detail)}`;
  
    if (navigator.share) {
      navigator.share({
        title: 'My Store Item',
        text: item.detail,
        url: item.link,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      window.open(telegramShareUrl, '_blank');
    }
  }
  
  
  share1(item: Item) {
    const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(item.name + '\n' + item.detail + '\n' + item.link)}`;
  
    if (navigator.share) {
      navigator.share({
        title: 'My Store Item',
        text: item.detail,
        url: item.link,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Open WhatsApp share link
      window.open(whatsappShareUrl, '_blank');
    }
  }

}
