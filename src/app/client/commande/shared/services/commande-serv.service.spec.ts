import { TestBed } from '@angular/core/testing';

import { CommandeServService } from './commande-serv.service';

describe('CommandeServService', () => {
  let service: CommandeServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
