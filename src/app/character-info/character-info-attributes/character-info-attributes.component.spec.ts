import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoAttributesComponent } from './character-info-attributes.component';

describe('CharacterInfoAttributesComponent', () => {
  let component: CharacterInfoAttributesComponent;
  let fixture: ComponentFixture<CharacterInfoAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterInfoAttributesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
