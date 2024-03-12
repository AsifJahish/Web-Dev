import { Component, Input, Output, EventEmitter  } from '@angular/core';

export class Item {
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
  @Output() deleteProduct: EventEmitter<Item> = new EventEmitter();
  @Output() starClicked: EventEmitter<{ index: number, rating: number }> = new EventEmitter();

  stars: boolean[] = Array(5).fill(false);

  getStarsArray(): boolean[] {
    return this.stars;
  }



  toggleStar():void{
    this.stars= Array(5).fill(true)
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

  delete(product: Item): void {
    // Emit the event to notify the parent component to delete the product
    this.deleteProduct.emit(product);
  }
}
