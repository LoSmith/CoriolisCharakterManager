import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollModalComponent } from './dice-roll-modal.component';

describe('DiceRollComponent', () => {
  let component: DiceRollModalComponent;
  let fixture: ComponentFixture<DiceRollModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiceRollModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
