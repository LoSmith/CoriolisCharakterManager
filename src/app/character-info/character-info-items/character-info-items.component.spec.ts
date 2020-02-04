import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoItemsComponent } from './character-info-items.component';

describe('CharacterInfoItemsComponent', () => {
  let component: CharacterInfoItemsComponent;
  let fixture: ComponentFixture<CharacterInfoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterInfoItemsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
