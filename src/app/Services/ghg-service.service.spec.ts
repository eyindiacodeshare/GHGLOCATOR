import { TestBed } from '@angular/core/testing';

import { GhgServiceService } from './ghg-service.service';

describe('GhgServiceService', () => {
  let service: GhgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
