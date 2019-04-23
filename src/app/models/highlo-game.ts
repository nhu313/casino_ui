import { Player } from './player';

export class HighLoGame {
  id: number;
  players: Player[];

  public constructor(fields?:Partial<HighLoGame>) {
    fields['players'] = fields['playerList'].map(x => new Player(x));
    Object.assign(this, fields);
  }
}
