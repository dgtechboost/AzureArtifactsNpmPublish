import { TestBed } from '@angular/core/testing';

import { AzureNpmNgLibService } from './azure-npm-ng-lib.service';

describe('AzureNpmNgLibService', () => {
  let service: AzureNpmNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureNpmNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
