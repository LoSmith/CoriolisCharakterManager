import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { CharacterInfoComponent } from './character-info.component';
import { CharacterInfoRoutingRoutingModule } from '@app/character-info/character-info-routing.module';
import { CharacterInfoSkillsComponent } from './character-info-skills/character-info-skills.component';
import { DicableComponent } from './dicable/dicable.component';

@NgModule({
  declarations: [CharacterInfoComponent, CharacterInfoSkillsComponent, DicableComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    FlexLayoutModule,
    MaterialModule,
    CharacterInfoRoutingRoutingModule
  ]
})
export class CharacterInfoModule {}
