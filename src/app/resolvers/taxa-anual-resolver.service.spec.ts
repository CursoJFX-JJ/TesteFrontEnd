import { TestBed } from '@angular/core/testing';

import { TaxaAnualResolverService } from './taxa-anual-resolver.service';

describe('TaxaAnualResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaxaAnualResolverService = TestBed.get(TaxaAnualResolverService);
    expect(service).toBeTruthy();
  });
});
