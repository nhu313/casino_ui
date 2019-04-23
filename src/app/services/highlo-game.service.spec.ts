import { TestBed } from '@angular/core/testing';

import { HighloGameService } from './highlo-game.service';

describe('HighloGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighloGameService = TestBed.get(HighloGameService);
    expect(service).toBeTruthy();
  });
});
