import { defer, Observable, Subject } from 'rxjs';
import { YfjNgxPrintFileService } from './yfj-ngx-print-file.service';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { finalize, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[yfjNgxPrintFile]',
})
export class YfjNgxPrintFileDirective implements OnDestroy {
  @Input() set yfjNgxPrintFile(src$: Observable<Blob>) {
    this.src$ = src$;
  }

  @HostListener('click') handleClick(): void {
    defer(() => {
      this.elRef.nativeElement.disabled = true;

      return this.src$?.pipe(
        finalize(() => (this.elRef.nativeElement.disabled = false)),
        takeUntil(this.destroy$$)
      );
    }).subscribe((obj) => {
      this.objUrl = this.service.createObjURL(obj);
      this.service.printObj(this.objUrl);
    });
  }

  private src$: Observable<Blob> | undefined;
  private destroy$$: Subject<void> = new Subject<void>();
  private objUrl: string | undefined;

  constructor(
    private service: YfjNgxPrintFileService,
    private elRef: ElementRef
  ) {}

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
    this.service.revokeObjURL(this.objUrl);
  }
}
