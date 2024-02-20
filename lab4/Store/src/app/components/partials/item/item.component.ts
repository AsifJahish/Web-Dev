import { Component } from '@angular/core';


class Item {
  name: string;
  imageUrl: string;
  detail: string;
  rating: number;
  link: string;

  constructor(name: string, imageUrl: string, detail: string, rating: number, link:string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.detail = detail;
    this.rating = rating;
    this.link= link
  }
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  title = 'store';
  items: Item[] = [];

  constructor() {
    this.items.push(
      new Item('Smartphone Apple iPhone 13 128Gb Midnight black', 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png', '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh', 4, 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000'),
      new Item('Headphones Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case white', 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', 'type: headphones type: in-ear connection: wireless type of acoustic design: closed mounting type: without mounting active Noise Cancellation: Yes microphone: Yes', 4, 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'),
      new Item('Newest M10 headphones black', 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h98/63952956522526.jpg?format=gallery-medium', 'type: headset type: in-ear connection: wireless type of acoustic design: closed mounting type: without mounting active Noise Cancellation: No microphone: Yes', 4, 'https://kaspi.kz/shop/p/newest-m10-chernyi-102272027/?c=750000000'),
      new Item('Portable speaker BT SPEAKER ZQS-4239 black', 'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium', 'type: mono power type: battery working time: 8.0 h number of AC bands: two way interfaces: Bluetooth, USB Type A, microUSB black color', 4, 'https://kaspi.kz/shop/p/bt-speaker-zqs-4239-chernyi-110785723/?c=750000000'),
      new Item('Mouse LS Pro black', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=gallery-medium', 'sensor type: optical LED connection type: wireless interface: Bluetooth, radio channel design: for right and left hand gaming: No optical sensor resolution: 1600.0 dpi', 4, 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000'),
      new Item('Mizam 8902061 sofa, fabric upholstery, 70x210x75 cm, gray', 'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=gallery-medium', 'transformation mechanism: Eurobook upholstery: fabric height: 70.0 cm width: 210.0 cm depth: 75.0 cm color: gray country: Kazakhstan', 4, 'https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000'),
      new Item('Office chair 18604221_Mi-6, black', 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h0e/85022513496094.jpg?format=gallery-medium', 'purpose: office chair base type: cross with wheels upholstery material: textile adjustment: seat height black color country: China', 4, 'https://kaspi.kz/shop/p/ofisnoe-kreslo-18604221-mi-6-chernyi-116243941/?c=750000000'),
      new Item('Case Ala case for iPhone 11 transparent', 'https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium', 'type: sports compatible Brand: Apple material: rubber, silicone compatible Models: iPhone 11', 4, 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000'),
      new Item('Baby wet wipes Yokosun Extra Soft 120 pcs', 'https://resources.cdn-kaspi.kz/img/m/p/h56/he9/84702755455006.jpg?format=gallery-medium', 'number of napkins: 120 purpose: for the body alcohol free: Yes hypoallergenic: Yes antibacterial: No', 4, 'https://kaspi.kz/shop/p/detskie-vlazhnye-salfetki-yokosun-extra-soft-120-sht-100714380/?c=750000000'),
      new Item('Item 1', 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png', 'Details for Item 1', 4, 'hello everyone'),

    );
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }


  share(item: Item) {
    if (navigator.share) {
      navigator.share({
        title: 'My Store Item',
        text: item.detail,
        url: item.link,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      const shareUrl = `https://your-website.com/share?title=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.detail)}&url=${encodeURIComponent(item.link)}`;
      window.open(shareUrl, '_blank');
    }
  }
  

}
