import { NgModule } from '@angular/core';
import { YfjNgxPrintFileDirective } from './yfj-ngx-print-file.directive';
import { YfjNgxPrintFileService } from './yfj-ngx-print-file.service';

@NgModule({
  declarations: [YfjNgxPrintFileDirective],
  providers: [YfjNgxPrintFileService],
  exports: [YfjNgxPrintFileDirective],
})
export class YfjNgxPrintFileModule {}
