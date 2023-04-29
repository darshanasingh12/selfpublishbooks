import { TestBed } from '@angular/core/testing';

import { PubformService } from './pubform.service';

describe('PubformService', () => {
  let service: PubformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
