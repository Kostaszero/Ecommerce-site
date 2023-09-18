import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaroidComponent } from './polaroid.component';

describe('PolaroidComponent', () => {
  let component: PolaroidComponent;
  let fixture: ComponentFixture<PolaroidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolaroidComponent]
    });
    fixture = TestBed.createComponent(PolaroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
