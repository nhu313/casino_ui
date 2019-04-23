import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPlayerComponent } from './new-player/new-player.component'

const appRoutes: Routes = [
  {
    path: 'players/new',
    component: NewPlayerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
