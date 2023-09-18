import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-polaroid-list',
  templateUrl: './polaroid-list.component.html',
  styleUrls: ['./polaroid-list.component.scss']
})
export class PolaroidListComponent {
  constructor(@Inject(DOCUMENT) private document: Document){}
  @HostListener('window: resize', ['$event'])
  onWindowResize(){
    let win = this.document.getElementById('body-section');
    if(window.innerWidth <= 800){
      if(win){
        win.style.flexDirection = 'column';
      }
    }
    else{
      
      if(win){
        win.style.flexDirection = 'row';
      }
    }
  }

}
