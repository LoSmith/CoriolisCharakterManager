import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { CharacterInfoComponent } from './character-info.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/characterInfo', pathMatch: 'full' },
    { path: 'characterInfo', component: CharacterInfoComponent, data: { title: extract('CHARACTER_INFO') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CharacterInfoRoutingRoutingModule {}
