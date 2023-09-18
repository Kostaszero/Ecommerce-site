import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.scss']
})
export class PolaroidComponent {
  @Input() data: any;
  draw_box_shadow: any;

  @Input() isSmall: boolean = false;

  ngOnInit(){
    this.draw_box_shadow = (this.data.boxShadow) ? '' : '-1.5px 6px 20px rgb(58 58 58)';
    
  }
}
