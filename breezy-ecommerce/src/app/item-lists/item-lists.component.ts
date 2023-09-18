import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-item-lists',
  templateUrl: './item-lists.component.html',
  styleUrls: ['./item-lists.component.scss']
})
export class ItemListsComponent {
  constructor(
    private dialog: MatDialog
  ) {}
  
  @Input() itemDetails: any;
  item: any;
  isLoaded: boolean = true;
  discount = 0;

  winX: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.winX = window.innerWidth;
  }

  ngOnInit(){
    this.onResize()
    this.item = this.itemDetails.item_data;
    this.discount = Math.floor((this.item.discount * this.item.price) / 100);
  }

  // checkIfLoaded(){
  //   console.log("its loadeddd");
    
  //   // this.isLoaded = false;
  // }


  openDialog() {
    this.dialog.open(ShoppingCartComponent, {
      data: {
        'item_data': this.item,
        'id': this.itemDetails.id
      },
      height: '600px',
      width: '840px',
      minWidth: (this.winX > 576) ? '50vw' : '100vw'
    });
  }

}
