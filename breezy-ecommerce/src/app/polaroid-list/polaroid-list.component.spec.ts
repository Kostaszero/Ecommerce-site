import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaroidListComponent } from './polaroid-list.component';

describe('PolaroidListComponent', () => {
  let component: PolaroidListComponent;
  let fixture: ComponentFixture<PolaroidListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolaroidListComponent]
    });
    fixture = TestBed.createComponent(PolaroidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
