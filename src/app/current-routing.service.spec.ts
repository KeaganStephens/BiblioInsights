import { TestBed } from '@angular/core/testing';

import { CurrentRoutingService } from './current-routing.service';

describe('CurrentRoutingService', () => {
  let service: CurrentRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
