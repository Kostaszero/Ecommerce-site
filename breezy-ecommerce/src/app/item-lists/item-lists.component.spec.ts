import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListsComponent } from './item-lists.component';

describe('ItemListsComponent', () => {
  let component: ItemListsComponent;
  let fixture: ComponentFixture<ItemListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListsComponent]
    });
    fixture = TestBed.createComponent(ItemListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
