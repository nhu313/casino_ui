import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPlayerComponent } from './new-player/new-player.component';
import { NewGameComponent } from './new-game/new-game.component';
import { HighloComponent } from './highlo/highlo.component';

const appRoutes: Routes = [
  {path: 'games/highlo/:id',
   children: [
      {
        path: 'players/new',
        component: NewPlayerComponent
      },
      {
        path: '',
        component: HighloComponent
      },

    ]
  },
  {
    path: '',
    component: NewGameComponent
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
