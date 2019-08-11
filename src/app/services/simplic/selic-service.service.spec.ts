import { TestBed } from '@angular/core/testing';

import { SelicServiceService } from './selic-service.service';

describe('SelicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelicServiceService = TestBed.get(SelicServiceService);
    expect(service).toBeTruthy();
  });
});
