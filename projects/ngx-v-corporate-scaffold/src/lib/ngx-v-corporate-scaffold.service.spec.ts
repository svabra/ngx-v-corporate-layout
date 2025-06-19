import { TestBed } from '@angular/core/testing';

import { NgxVCorporateScaffoldService } from './ngx-v-corporate-scaffold.service';

describe('NgxVCorporateScaffoldService', () => {
  let service: NgxVCorporateScaffoldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVCorporateScaffoldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
