import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HighLoGame } from './../models/highlo-game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighloGameService {
  readonly COMPONENT_PATH = 'games/highlo/';

  constructor(private api: ApiService<HighLoGame>) { }

  create() : Observable<HighLoGame> {
    return this.api.post(this.COMPONENT_PATH + 'new', "");
  }

  createPlayer(gameId: number, playerName: String): Observable<HighLoGame> {
    return this.api.post(this.COMPONENT_PATH + gameId + '/players/new', {name: playerName})
  }

  getGame(gameId: number) : Observable<HighLoGame> {
    return this.api.get(this.COMPONENT_PATH + gameId);
  }

  deal(gameId: number) : Observable<HighLoGame>{
    return this.api.put(this.COMPONENT_PATH + gameId + '/deal', "");
  }

  makeChoice(gameId: number, choices) {
    return this.api.put(this.COMPONENT_PATH + gameId + '/choice', choices);
  }

}
