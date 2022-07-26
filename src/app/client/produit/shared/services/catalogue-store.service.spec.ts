import { TestBed } from '@angular/core/testing';

import { CatalogueStoreService } from './catalogue-store.service';

describe('CatalogueStoreService', () => {
  let service: CatalogueStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogueStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
