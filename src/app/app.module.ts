import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighloComponent } from './highlo/highlo.component';

import { AppRoutingModule } from './app-routing.module';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewGameComponent } from './new-game/new-game.component';
//
// import { HighloGameService } from './services/highlo-game.service';
// import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HighloComponent,
    NewPlayerComponent,
    NewGameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // HighloGameService,
    // ApiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
