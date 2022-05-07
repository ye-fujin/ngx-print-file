import { TestBed } from '@angular/core/testing';

import { YfjNgxPrintFileService } from './yfj-ngx-print-file.service';

describe('YfjNgxPrintFileService', () => {
  let service: YfjNgxPrintFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YfjNgxPrintFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
