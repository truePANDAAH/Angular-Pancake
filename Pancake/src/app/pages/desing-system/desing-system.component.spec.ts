import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingSystemComponent } from './desing-system.component';

describe('DesingSystemComponent', () => {
  let component: DesingSystemComponent;
  let fixture: ComponentFixture<DesingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
