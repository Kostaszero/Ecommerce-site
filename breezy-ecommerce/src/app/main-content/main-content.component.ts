import { Component, EventEmitter, Output } from '@angular/core';
import { GeneratorService } from '../service/generator/generator.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
 
  constructor(private generator: GeneratorService){}
  itemList: any = this.generator.getPolaroidList();

  
}
