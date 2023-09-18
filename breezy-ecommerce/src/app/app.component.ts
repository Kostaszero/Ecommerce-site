import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './service/cart-data/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private cartService: CartService,
  ){}

  isBagEmpty: boolean = true;
  notify: number = -1

  ngDoCheck(){
    if(!this.cartService.isEmpty()){
      this.isBagEmpty = false;
      if(this.notify < 0)
        this.notify = 1;
      else if(this.notify == 2)
        this.notify = 0;
    }
    else{
      this.isBagEmpty = true;
    }
    
  }
  openCart(){
    this.notify = 2;
    this.router.navigateByUrl("/cart-section");
  }
}
