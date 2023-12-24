import { TestBed } from '@angular/core/testing';

import { NgxCookiesManagerService } from './ngx-cookies-manager.service';

describe('NgxCookiesManagerService', () => {
  let service: NgxCookiesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookiesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
