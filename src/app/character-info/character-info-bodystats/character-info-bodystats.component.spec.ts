import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoBodystatsComponent } from './character-info-bodystats.component';

describe('CharacterInfoBodystatsComponent', () => {
  let component: CharacterInfoBodystatsComponent;
  let fixture: ComponentFixture<CharacterInfoBodystatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterInfoBodystatsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoBodystatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
