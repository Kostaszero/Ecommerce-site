import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private polaroid_list: any = {};

  doubleTapNotify: number = -1;

  updateNotify(val: number){
    this.doubleTapNotify = val;
  }

  updateShoppingBag(id: any, item: any){
    this.polaroid_list[id] = (item);
  }

  setPolaroidCount(id:any, count: any){
    this.polaroid_list[id].count = count;
  }

  removePolaroid(id: number){
    delete this.polaroid_list[id];
  }
  
  getPolaroid(id: any){
    return this.polaroid_list[id];
  }

  getPolaroidList(){
    return this.polaroid_list;
  }

  getPolaroidListValues(): any[]{
    return Object.values(this.polaroid_list);
  }

  isEmpty(){
    return (Object.keys(this.polaroid_list).length == 0);
  }

  
  getTotalAmount(): any[]{
    let total_discount=0, total_pay=0, grand_total=0;
    for(let data of this.getPolaroidListValues()){
      total_discount += data.count * data.discount;
      total_pay += data.count * data.item_data.price;
    }
    grand_total = total_discount + total_pay;
    return [grand_total, total_discount, total_pay];
  }

}
