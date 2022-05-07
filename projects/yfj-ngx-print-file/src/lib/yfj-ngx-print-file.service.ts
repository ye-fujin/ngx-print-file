import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YfjNgxPrintFileService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone
  ) {}

  printObj(objURL: string | undefined | null): void {
    if (objURL) {
      const windRef = this.document.defaultView?.open(objURL, '_blank');

      if (windRef) {
        windRef.onload = () => {
          this.ngZone.runOutsideAngular(() => windRef.print());
        };
      }
    }
  }

  createObjURL(obj: Blob | undefined | null): string | undefined {
    if (obj instanceof Blob) {
      return URL.createObjectURL(obj);
    }

    return undefined;
  }

  revokeObjURL(objURL: string | undefined): void {
    if (objURL) {
      URL.revokeObjectURL(objURL);
    }
  }
}
