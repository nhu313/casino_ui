import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HighloGameService {
  readonly COMPONENT_PATH = 'games/highlo/';

  constructor(private api: ApiService) { }

  create(){
    return this.api.post(this.COMPONENT_PATH + 'new', "");
  }

}
