import { global } from '@angular/compiler/src/util';
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

  describe('printObj', () => {
    it('should call window.open and trigger window.print on load if objURL is string', () => {
      global.open = (
        url?: string | URL | undefined,
        target?: string | undefined
      ) => {};

      global.print = () => {};

      global.onload = () => {
        global.print();
      };

      const openSpy = jest.spyOn(global, 'open');
      const printSpy = jest.spyOn(global, 'print');
      service.printObj('objectURL');
      global.dispatchEvent(new Event('load'));

      expect(openSpy.mock.calls.length).toBe(1);
      expect(printSpy.mock.calls.length).toBe(1);
    });

    it('should not call window.open if objURL is undefined', () => {
      const spy = jest.spyOn(service, 'printObj');

      global.open = (
        url?: string | URL | undefined,
        target?: string | undefined
      ) => {};

      const windowSpy = jest.spyOn(global, 'open');
      service.printObj(undefined);

      expect(windowSpy.mock.calls.length).toBe(0);
    });

    it('should not call window.open if objURL is null', () => {
      const spy = jest.spyOn(service, 'printObj');

      global.open = (
        url?: string | URL | undefined,
        target?: string | undefined
      ) => {};

      const windowSpy = jest.spyOn(global, 'open');
      service.printObj(null);

      expect(windowSpy.mock.calls.length).toBe(0);
    });
  });

  describe('createObjURL', () => {
    it('should call URL.createObjectURL and return undefined if object is an instance of Blob', () => {
      const spy = jest.spyOn(service, 'createObjURL');
      global.URL = { createObjectURL: () => 'objectURL' };
      const urlSpy = jest.spyOn(global.URL, 'createObjectURL');
      const obj = new Blob();
      service.createObjURL(obj);

      expect(urlSpy.mock.calls.length).toEqual(1);
      expect(urlSpy.mock.calls[0][0]).toEqual(obj);
      expect(spy.mock.results[0].value).toBe('objectURL');
    });

    it('should return undefined if object is undefined', () => {
      const spy = jest.spyOn(service, 'createObjURL');
      global.URL = { createObjectURL: () => 'objectURL' };
      const urlSpy = jest.spyOn(global.URL, 'createObjectURL');
      service.createObjURL(null);

      expect(urlSpy.mock.calls.length).toEqual(0);
      expect(spy.mock.results[0].value).not.toBeDefined();
    });

    it('should return undefined if object is null', () => {
      const spy = jest.spyOn(service, 'createObjURL');
      global.URL = { createObjectURL: () => 'objectURL' };
      const urlSpy = jest.spyOn(global.URL, 'createObjectURL');
      service.createObjURL(null);

      expect(urlSpy.mock.calls.length).toEqual(0);
      expect(spy.mock.results[0].value).not.toBeDefined();
    });
  });

  describe('revokeObjURL', () => {
    it('should call URL.revokeObjectURL if objURL is string', () => {
      global.URL = { revokeObjectURL: () => {} };
      const urlSpy = jest.spyOn(global.URL, 'revokeObjectURL');
      service.revokeObjURL('objectURL');

      expect(urlSpy.mock.calls.length).toEqual(1);
    });

    it('should not call URL.revokeObjectURL if objURL is undefined', () => {
      global.URL = { revokeObjectURL: () => {} };
      const urlSpy = jest.spyOn(global.URL, 'revokeObjectURL');
      service.revokeObjURL(undefined);

      expect(urlSpy.mock.calls.length).toEqual(0);
    });
  });
});
