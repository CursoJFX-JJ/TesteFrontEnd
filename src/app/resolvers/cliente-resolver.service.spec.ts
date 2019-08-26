import { TestBed } from '@angular/core/testing';

import { ClienteResolverService } from './cliente-resolver.service';

describe('ClienteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteResolverService = TestBed.get(ClienteResolverService);
    expect(service).toBeTruthy();
  });
});
