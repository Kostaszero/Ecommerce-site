import { Component, HostListener, Inject, Input, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../service/cart-data/cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  price_data: any;

  polaroid_data: any;


  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() public dialogRef: MatDialogRef<ShoppingCartComponent>,
    private cartService: CartService,
  ) 
  {
    if (this.data) {
      this.price_data = { ...this.data.item_data };
      this.polaroid_data = { ...this.data };
    } 
  }

  
  winX = window.innerWidth;

  @HostListener('window: resize', ['$event'])
  onWindowResize(){
    this.winX = window.innerWidth;
  }

  @Input() bag_polaroid: any;
  @Input() showItems : boolean = true;

  total_count = 1
  discount: number = 0;
  

  ngOnInit(){
    if(this.bag_polaroid) {
      this.polaroid_data = { ...this.bag_polaroid };
      this.price_data = { ...this.polaroid_data.item_data };
    }

    this.discount = Math.floor((this.price_data.discount * this.price_data.price) / 100);

    const item_values = this.cartService.getPolaroid(this.polaroid_data.id);
    
    if(item_values != null){
      this.total_count = item_values.count;
      this.price_data.price *= item_values.count;
      this.discount *= item_values.count;
    }
  }
  updatePrices(abt: number){
    this.price_data.price +=  abt * this.polaroid_data.item_data.price;
    this.total_count += abt * 1;
    if(this.bag_polaroid){
      this.cartService.setPolaroidCount(this.polaroid_data.id, this.total_count);
    }
  }

  removeItem(){
    this.cartService.removePolaroid(this.polaroid_data.id);
  }

  sendItemToBag(){
    this.dialogRef.close();
    this.updatePolaroidData();
  }

  updatePolaroidData(){
    this.cartService.updateShoppingBag(this.polaroid_data.id, {
      'item_data': this.price_data,
      'id': this.polaroid_data.id,
      'count': this.total_count,
      'discount': this.discount
    });
  }
  
}
