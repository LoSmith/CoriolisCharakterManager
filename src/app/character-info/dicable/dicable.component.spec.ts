import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicableComponent } from './dicable.component';

describe('DicableComponent', () => {
  let component: DicableComponent;
  let fixture: ComponentFixture<DicableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DicableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
