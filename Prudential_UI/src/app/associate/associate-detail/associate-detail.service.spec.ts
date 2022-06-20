import { TestBed } from '@angular/core/testing';

import { AssociateDetailService } from './associate-detail.service';

describe('AssociateDetailService', () => {
  let service: AssociateDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociateDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
