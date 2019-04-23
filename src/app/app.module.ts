import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighloComponent } from './highlo/highlo.component';

import { AppRoutingModule } from './app-routing.module';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewGameComponent } from './new-game/new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HighloComponent,
    NewPlayerComponent,
    NewGameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
