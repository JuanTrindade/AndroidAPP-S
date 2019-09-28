import { TestBed } from '@angular/core/testing';

import { CrudeService } from './crude.service';

describe('CrudeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudeService = TestBed.get(CrudeService);
    expect(service).toBeTruthy();
  });
});
