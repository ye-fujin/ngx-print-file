import { ElementRef } from '@angular/core';
import { YfjNgxPrintFileDirective } from './yfj-ngx-print-file.directive';
import { YfjNgxPrintFileService } from './yfj-ngx-print-file.service';

describe('YfjNgxPrintFileDirective', () => {
  it('should create an instance', () => {
    const mockService = {
      createObjectURL: jest.fn(),
      revokeObjectURL: jest.fn(),
    } as unknown as YfjNgxPrintFileService;

    const mockElementRef = new ElementRef({});
    const directive = new YfjNgxPrintFileDirective(mockService, mockElementRef);
    expect(directive).toBeTruthy();
  });
});
