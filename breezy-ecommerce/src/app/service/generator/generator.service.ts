import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }
  private itemList: any;

  getPolaroidList(){
    if(this.itemList == null){
      this.generatePolaroidList();
    }
    return this.itemList;
  }

  generatePolaroidList(){
    this.itemList = Array.from({length: 15}, (_,idx: number) => 
    { 
      return {
        'img_src': `https://picsum.photos/400/350?random=${idx}`,
        'title': 'Lorem Ipsum',
        'discount': this.getRandom(10, 60),
        'price': this.getRandom(100, 1300),
        'rating': `${this.getRandom(2, 4)}.${this.getRandom(0, 9)}`,
        'rel': idx
      } 
    }
    );
  }

  
  sortPolaroids(str: string){
    switch(str){
      case 'Price - Low to high': 
        this.itemList.sort((a: any, b: any) => {return a.price - b.price})
        break;
      case 'Price - High to low': 
        this.itemList.sort((a: any, b: any) => {return b.price - a.price})
        break;
      case 'Rating': 
        this.itemList.sort((a: any, b: any) => {return b.rating - a.rating})
        break;
      case 'Discount': 
        this.itemList.sort((a: any, b: any) => {return b.discount - a.discount})
        break;
      default:
        this.itemList.sort((a: any, b: any) => {return a.rel - b.rel})
    }
    return true;
  }
  
  getRandom(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

}
