import { Component, Inject } from '@angular/core';
import { CartService } from '../service/cart-data/cart.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

  constructor(
    private cart: CartService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    ){}

  ship_details: any[] = [];

  card_details:any = {
    'candidate_name': '',
    'card_number': '',
    'expiry_month': '',
    'expiry_year': '',
    'cvv': '',
  }

  title_name = 'Shipping Details';

  ngOnInit(){

    if(this.cart.isEmpty()){
      this.router.navigateByUrl('/cart-section');
    }

    this.ship_details =  [
      {
        'for': 'Country',
        'value': '',
        'example': 'India',
        'isRequired': true,
      },
      {
        'for': 'State',
        'value': '',
        'example': 'Telangana',
        'isRequired': true,
      },
      {
        'for': 'Street Address',
        'value': '',
        'example': 'H.No. 1-23-45/67 XYZ Street',
        'isRequired': true,
      },
      {
        'for': 'Road (Optional)',
        'value': '',
        'example': 'Road 9',
        'isRequired': false,
      },
      {
        'for': 'Town / City',
        'value': '',
        'example': 'Hyderabad',
        'isRequired': true,
      },
      {
        'for': 'Pincode / ZIP',
        'value': '',
        'example': '500001',
        'isRequired': true,
      },
      {
        'for': 'Phone',
        'value': '',
        'example': '9876543210',
        'isRequired': true,
      },
    ]
  }

  openPaymentCard(){
    this.document.body.scrollIntoView();

    if(this.isShipmentReady()){
      this.title_name = 'Payment Details';
      console.log(JSON.stringify(this.ship_details, ['for', 'value'], 2));
    }
    else
    alert('Enter all the required fields and make sure they are valid.');
  }

  isShipmentReady(){
    for(let item of this.ship_details){
      if(item.isRequired && !item.value) return false;
    }
    return true;
  }

  proceedToPayment(){
    console.log(this.card_details);
  }


  checkNumType(name: string, val: string, idx: number){
    if(name[0] != 'P') return false;
    const check = isNaN(+val);
    if(check) this.ship_details[idx].value='';
    return check;
  }

  trackByIndex(idx: number, obj: any): any {
    return idx;
  }
}
