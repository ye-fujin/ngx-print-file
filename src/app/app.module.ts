import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YfjNgxPrintFileModule } from 'yfj-ngx-print-file';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, YfjNgxPrintFileModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
