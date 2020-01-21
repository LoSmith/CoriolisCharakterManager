import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoBasicsComponent } from './character-info-basics.component';

describe('CharacterInfoBasicsComponent', () => {
  let component: CharacterInfoBasicsComponent;
  let fixture: ComponentFixture<CharacterInfoBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterInfoBasicsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
