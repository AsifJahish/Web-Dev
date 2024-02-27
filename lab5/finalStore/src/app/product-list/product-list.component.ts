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
    category: 'computer'},

    {name: 'Headphones Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case white',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    detail: 'type: headphones type: in-ear connection: wireless type of acoustic design: closed mounting type: without mounting active Noise Cancellation: Yes microphone: Yes',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    category: 'computer'},

    {name: 'Newest M10 headphones black',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h98/63952956522526.jpg?format=gallery-medium',
    detail: 'type: headset type: in-ear connection: wireless type of acoustic design: closed mounting type: without mounting active Noise Cancellation: No microphone: Yes',
    rating: 4,
    link:'https://kaspi.kz/shop/p/newest-m10-chernyi-102272027/?c=750000000',
    category: 'computer'},


    {name: 'Portable speaker BT SPEAKER ZQS-4239 black',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium',
    detail: '1nFC technology: Yes, black color screen type: OLED, Super Retina XDR diagonal: 6.1 inches rAM size: 4 GB processor: 6-core Apple A15 Bionic built-in memory: 128.0 GB battery capacity: 3095.0 mAh',
    rating: 4,
    link:'https://kaspi.kz/shop/p/bt-speaker-zqs-4239-chernyi-110785723/?c=750000000',
    category: 'computer'},


    {name: 'Mouse LS Pro black',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=gallery-large',
    detail: 'sensor type: optical LED connection type: wireless interface: Bluetooth, radio channel design: for right and left hand gaming: No optical sensor resolution: 1600.0 dpi',
    rating: 4,
    link:'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000',
    category: 'computer'},





    {name: 'Blender SM-7700 silver',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium',
    detail: 'type: stationary power: 1000.0 W control: mechanical number of speeds: 3 chopper: Yes color: silver',
    rating: 4,
    link:'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
    category: 'houseHoldsProducts'},
    
    {name: 'Electric kettle BEREKE BR-810 gray',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
    detail: 'anti-scale filter: No type: electric kettle volume: 2.0 l power: 1500.0 W case material: stainless steel color: gray',
    rating: 4,
    link:'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    category: 'houseHoldsProducts'},

    {name: 'Vacuum cleaner Samsung VCC4520S3R/XEV red',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/heb/h01/63769265045534.jpg?format=gallery-medium',
    detail: 'type: traditional cleaning: dry dust collector type: cyclone filter power consumption: 1600.0 W power source: mains color: red',
    rating: 4,
    link:'https://kaspi.kz/shop/p/samsung-vcc4520s3r-xev-krasnyi-3700926/?c=750000000',
    category: 'houseHoldsProducts'},
      
    {name: 'Washing machine LG F2J3NS0W white',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
    detail: 'installation: freestanding control: electronic (intelligent) maximum load of laundry: 6.0 kg electricity class: A spin speed: 1200.0 rpm water leakage protection: No white color',
    rating: 4,
    link:'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
    category: 'houseHoldsProducts'},

    {name: 'Thermomix TM6 food processor white',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h69/63754424844318.jpg?format=gallery-medium',
    detail: 'power: 1500.0 W bowl capacity: 2.2 l blender: Yes juicer: no white color',
    rating: 4,
    link:'https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000',
    category: 'houseHoldsProducts'},




    {name: 'SPLAT toothpaste Whitening Plus 100 ml',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/hdf/63847123779614.jpg?format=gallery-medium',
    detail: 'type: toothpaste taste: mint, neutral volume, ml/Weight, g: 100 ml',
    rating: 4,
    link:'https://kaspi.kz/shop/p/splat-zubnaja-pasta-otbelivanie-pljus-100-ml-100194785/?c=750000000',
    category: 'beautyHealth'},

    {name: 'Compliment Naturalis 3in1 with pepper mask 500 ml',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h27/63892458143774.jpg?format=gallery-medium',
    detail: 'type: mask action: against hair loss, growth activation, strengthening hair type: for all types, colored, thin and damaged',
    rating: 4,
    link:'https://kaspi.kz/shop/p/compliment-naturalis-3v1-s-pertsem-maska-500-ml-100319701/?c=750000000',
    category: 'beautyHealth'},

    {name: 'Battery-powered rotary electric razor 776826',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h2c/67253702098974.jpg?format=gallery-medium',
    detail: 'shaving method: dry shaving system: rotary power system: battery number of shaving heads: 4 country of origin: China color: gold',
    rating: 4,
    link:'https://kaspi.kz/shop/p/776826-rotornaja-ot-akkumuljatora-108204184/?c=750000000',
    category: 'beautyHealth'},

    {name: 'Clear 3 in 1 With activated carbon shampoo 380 ml',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha7/83646929010718.jpg?format=gallery-medium',
    detail: 'action: cleansing features: for daily use purpose: for men hair type: for all types country of origin: Türkiye',
    rating: 4,
    link:'https://kaspi.kz/shop/p/clear-3-v-1-s-aktivirovannym-uglem-shampun-380-ml-109880442/?c=750000000',
    category: 'beautyHealth'},

    {name: 'Green pharmacy Chamomile soap for intimate hygiene 370 ml',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/he4/63831824039966.jpg?format=gallery-medium',
    detail: 'type: intimate hygiene gel purpose: unisex effect: moisturizing country of origin: Ukraine',
    rating: 4,
    link:'https://kaspi.kz/shop/p/zelenaja-apteka-romashka-mylo-dlja-intimnoi-gigieny-370-ml-102693876/?c=750000000',
    category: 'beautyHealth'},



    {name: 'Theraflu powder 325 mg 10 pcs',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=gallery-large',
    detail: 'purpose: antipyretic antibiotic: No prescription drug: No',
    rating: 4,
    link:'https://kaspi.kz/shop/p/teraflju-poroshok-325-mg-10-sht-101114328/?c=750000000',
    category: 'pharmacy'},

    {name: 'Ibuprofen tablets 400 mg 20 pcs',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h53/82807869046814.png?format=gallery-medium',
    detail: 'purpose: inflammation and infections antibiotic: No prescription drug: No',
    rating: 4,
    link:'https://kaspi.kz/shop/p/ibuprofen-tabletki-400-mg-20-sht-101375956/?c=750000000',
    category: 'pharmacy'},

    {name: 'Verticalizer Verticalizer (stand-stand for children with cerebral palsy',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h76/64425780281374.jpg?format=gallery-medium',
    detail: 'type: active purpose: for children size: S height: 75-135',
    rating: 4,
    link:'https://kaspi.kz/shop/p/vertikalizator-stend-stoika-dlja-detei-s-dtsp--106056939/?c=750000000',
    category: 'pharmacy'},

    {name: 'ORTHOFORMA mattress M-0007 135 beige',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h86/hc5/64133584125982.jpg?format=gallery-medium',
    detail: 'type: cellular type: mattress material: polyvinyl chloride country of origin: China',
    rating: 4,
    link:'https://kaspi.kz/shop/p/orthoforma-matras-m-0007-135-bezhevyi-103718691/?c=750000000',
    category: 'pharmacy'},

    {name: 'Ethyl alcohol solution 90% 90 ml',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h68/hcd/64259609559070.jpg?format=gallery-medium',
    detail: 'purpose: wound treatment antibiotic: No prescription drug: Yes active ingredient: ethanol',
    rating: 4,
    link:'https://kaspi.kz/shop/p/spirt-etilovyi-rastvor-90-90-ml-103974837/?c=750000000',
    category: 'pharmacy'},



    {name: 'Baby puree Agusha Apple-strawberry-raspberry 90 g',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hc1/63957671575582.jpg?format=gallery-medium',
    detail: 'type: multi-component additives: no additive ingredients: fruit minimum age: 6 months',
    rating: 4,
    link:'https://kaspi.kz/shop/p/agusha-jabloko-klubnika-malina-90-g-100623509/?c=750000000',
    category: 'childrenGoods'},

    {name: 'Interactive toy Youmu Toys dancing cactus multicolor',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/hb8/66792868708382.jpg?format=gallery-medium',
    detail: 'type: interactive toy size, cm: 35 cm child gender: universal color: multicolor',
    rating: 4,
    link:'https://kaspi.kz/shop/p/interaktivnaja-igrushka-youmu-toys-tantsujuschii-kaktus-mul-tikolor-102651153/?c=750000000',
    category: 'childrenGoods'},

    {name: 'Soft toy Goose-hug 17691300_842075, height 130 cm, white',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h72/h52/70325521154078.jpg?format=gallery-medium',
    detail: 'type: soft toy height: 130.0 cm filling: synthetic winterizer features: anti-stress',
    rating: 4,
    link:'https://kaspi.kz/shop/p/mjagkaja-igrushka-gus--obnimus-17691300-842075-vysota-130-sm-belyi-109469231/?c=750000000',
    category: 'childrenGoods'},

    {name: 'LCD tablet blue',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h72/64360797536286.jpg?format=gallery-medium',
    detail: 'type: tablet size, cm: 23*15*1 child gender: universal',
    rating: 4,
    link:'https://kaspi.kz/shop/p/planshet-lcd-goluboi-106688753/?c=750000000',
    category: 'childrenGoods'},

    {name: 'Baby puree Gerber fruit only pear first stage 80 g',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/80513258881054.jpg?format=gallery-medium',
    detail: 'type: one-component additives: no additive ingredients: fruit minimum age: 4 months',
    rating: 4,
    link:'https://kaspi.kz/shop/p/gerber-fruktovoe-tol-ko-grusha-pervaja-stupen-80-g-19800060/?c=750000000',
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
  

