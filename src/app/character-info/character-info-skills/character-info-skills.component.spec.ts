import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoSkillsComponent } from './character-info-skills.component';

describe('CharacterInfoSkillsComponent', () => {
  let component: CharacterInfoSkillsComponent;
  let fixture: ComponentFixture<CharacterInfoSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterInfoSkillsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
