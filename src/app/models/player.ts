import { Card } from './card';

export class Player {
  id: number;
  name: string;
  hand: Card[];
  choice: string;

  public constructor(fields?:Partial<Player>) {
    fields['hand'] = fields['hand']['cardList'].map(x => new Card(x));
    Object.assign(this, fields);
  }

  public getCurrentCard(): Card{
    return this.hand[this.hand.length - 1];
  }
}
