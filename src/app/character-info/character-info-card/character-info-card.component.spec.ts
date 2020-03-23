import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoCardComponent } from './character-info-card.component';

describe('CharacterInfoCardComponent', () => {
  let component: CharacterInfoCardComponent;
  let fixture: ComponentFixture<CharacterInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterInfoCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
