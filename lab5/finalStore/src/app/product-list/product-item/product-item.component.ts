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

  stars: boolean[] = Array(5).fill(false);

  getStarsArray(rating: number): boolean[] {
    // Initialize stars based on the product's rating
    return this.stars.map((_, index) => index < rating);
  }

  toggleStar(starIndex: number, rating: number): void {
    // Toggle the stars based on the clicked star and product's rating
    this.stars = this.stars.map((_, index) => index <= starIndex ? !this.stars[starIndex] : index < rating);
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
