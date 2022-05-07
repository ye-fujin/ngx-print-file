import { AppService } from './app.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { finalize } from 'rxjs/operators';
import { defer, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'yfj-ngx-print-file-sample-app';
  loading = false;

  constructor(private service: AppService, private cdr: ChangeDetectorRef) {}

  getFile(): Observable<Blob> {
    return defer(() => {
      this.loading = true;
      this.cdr.markForCheck();

      return this.service.getFile().pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
      );
    });
  }
}
