import { Component, OnInit } from '@angular/core';
import { HighloGameService } from '../services/highlo-game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private service : HighloGameService,
              private router: Router ) { }

  ngOnInit() {
  }

  create(){
    this.service.create().subscribe(game => this.router.navigate(['/games/highlo/' + game.id + '/players/new']));
  }

}
