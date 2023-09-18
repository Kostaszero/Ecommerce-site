import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent {
  @Input() price_details: any[] = [];

  @Input() show_only_net: boolean = false;

  checkType(item: any, str: string){
    return typeof(item) == str;
  }
}
