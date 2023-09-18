import { Component, HostListener, Input, Inject } from '@angular/core';
import { CartService } from '../service/cart-data/cart.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bag-cart',
  templateUrl: './bag-cart.component.html',
  styleUrls: ['./bag-cart.component.scss']
})
export class BagCartComponent {

  constructor(
    private cartService: CartService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
    ){}

  polaroid_list : any;

  bag_list: any;

  list_length: number = 0;

  winX: number = window.innerWidth;
  notify: number = -1;

  grand_total: any;
  total_discount: any;
  total_pay: any;

  @HostListener('window: resize', ['$event'])
  onResize(){
    this.winX = window.innerWidth;
  }

  ngDoCheck(){
    if(this.notify <= 3)
    this.notify = this.cartService.doubleTapNotify;
    
    [this.grand_total, this.total_discount, this.total_pay] = [...this.cartService.getTotalAmount()];
    this.bag_list = this.cartService.getPolaroidList();
    this.polaroid_list = this.cartService.getPolaroidListValues();
    this.list_length = this.polaroid_list.length;

    if(!this.cartService.isEmpty()){
      if(this.notify < 0 && (this.winX <= 767)){
        this.notify = 1;
        this.cartService.updateNotify(1);
      }
      else if(this.notify == 3){
        this.cartService.updateNotify(0);
        this.notify = 0;
      }
    }

  }

  openCheckOut(){
    this.router.navigateByUrl('/check-out');
  }

  private lastTouchTime = 0;
  private touchDelay = 300;
  isDoubleTapped: boolean = false;

  onTouchStart(event: TouchEvent) {
    const currentTime = new Date().getTime();
    if (currentTime - this.lastTouchTime < this.touchDelay) {
      this.notify++;
      this.cartService.updateNotify(this.notify);
      this.isDoubleTapped = true;
      this.hideScrollinBody();
    }
    this.lastTouchTime = currentTime;
  }
  
  hideScrollinBody(){
    this.document.body.classList.add('hide-scroll');
  }

  closePopup(){
    this.isDoubleTapped = false;
    this.document.body.classList.remove('hide-scroll');
  }
  
  // @HostListener('window: click', ['$event'])
  // onClick($event: any){
  //   let ele = document.getElementById('overlay-popup-2');
  //   if(ele){
  //     if ($event.target === ele) {
  //       this.isDoubleTapped = !this.isDoubleTapped;
  //     }
  //   }
  // }




}
