export class Card {
  rank: string;
  suit: string;
  rankNumber: number;

  public constructor(fields?:Partial<Card>) {
      fields['suit'] = fields['suit'].toLowerCase();
      Object.assign(this, fields);
  }
}
