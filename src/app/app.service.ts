import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getFile(): Observable<Blob> {
    return of(new Blob()).pipe(delay(1500));
  }
}
