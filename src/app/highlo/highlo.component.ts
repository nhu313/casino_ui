import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HighloGameService } from './../services/highlo-game.service';
import { HighLoGame } from './../models/highlo-game';

@Component({
  selector: 'highlo-game',
  templateUrl: './highlo.component.html',
  styleUrls: ['./highlo.component.css']
})
export class HighloComponent implements OnInit {
  gameId : number;
  game = {};
  result = {};
  newGame = true;

  constructor(private route : ActivatedRoute,
              private service: HighloGameService) {
    this.gameId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.getGame(this.gameId).subscribe(response => this.game = response);
  }

  deal(){
    this.newGame = false;
    this.service.deal(this.gameId).subscribe(response => this.game = new HighLoGame(response));
  }

  high(player){
    let choice = {playerId : player.id, choice: "HI"}
    this.service.makeChoice(this.gameId, [choice]).subscribe(response => this.updateResponse(response));
  }

  updateResponse(response) {
    this.result = response;
    console.log(this.result);
  }

  low(player){
    let choice = {playerId : player.id, choice: "LO"}
    this.service.makeChoice(this.gameId, [choice]).subscribe(response => this.result = response);
  }

  cardDesc(card) {
    if (card) {
      return 'rank' + card.primaryValue + '_' + card.suit.toLowerCase();
    } else {
      return '';
    }
  }

  getResult(player) {
    if (this.result['result']) {
      return this.result['result'][player.id];
    }
    return '';
  }

}
