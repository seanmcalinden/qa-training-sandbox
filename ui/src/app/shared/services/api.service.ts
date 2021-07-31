import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(resource: string, cacheBust = true): Observable<T> {
    if (cacheBust) {
      return this.http.get<T>(`${resource}?d=${Math.round(new Date().getTime() / 1000)}`).pipe(shareReplay());
    }
    return this.http.get<T>(resource);
  }
}
