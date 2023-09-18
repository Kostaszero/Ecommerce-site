import { Component, HostListener, Inject } from '@angular/core';
import { GeneratorService } from '../service/generator/generator.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.scss']
})
export class FilterTabComponent {

  constructor(
    private generator: GeneratorService,
    @Inject(DOCUMENT) private document: Document
    ){}
  
  isSortClicked: boolean = false;
  isFilterClicked: boolean = false;

  isLoaded: boolean = false;


  priceRangeValue: any = "Move the Slider";
  sliderStart: any = "8%";
  sliderEnd: any = (90 - 100/6)+"%";

  activeId: number = 0;

  winX = window.innerWidth;

  @HostListener('window: resize', ['$event'])
  onWindowResize(){
    this.winX = window.innerWidth;
  }

  @HostListener('window: click', ['$event'])
  onClick($event: any){
    let ele = this.document.getElementById('overlay-popup');
    if(ele){
      if ($event.target === ele) {
        this.isSortClicked = !this.isSortClicked;
        this.document.body.classList.remove('hide-scroll');
      }
    }
  }

  sort_details: any[] = [
      'Relevance',
      'Price - Low to high',
      'Price - High to low',
      'Rating',
      'Discount'
  ]

  setActive(id: number){
    this.activeId = id;
    if(this.generator.sortPolaroids(this.sort_details[id]))
    this.isLoaded = true;
    this.toggleSort(true);
  }

  toggleSort(remove: boolean=false){
    if(this.winX <= 992){
      this.isSortClicked = !this.isSortClicked;
      if(remove) this.document.body.classList.remove('hide-scroll');
      else this.hideScrollinBody();
    }
  }

  toggleFilter(){
    if(this.winX <= 992)
    this.isFilterClicked = !this.isFilterClicked;
  }

  hideScrollinBody(){
    this.document.body.classList.add('hide-scroll');
  }

  updateRange(e: any){
    this.priceRangeValue = e.target.value;
  }


}
