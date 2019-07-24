import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _darkMode = new BehaviorSubject(JSON.parse(localStorage.getItem('darkMode') || 'false'));
  readonly darkMode$ = this._darkMode.asObservable().pipe(distinctUntilChanged());
  get darkMode() {
    return this._darkMode.getValue();
  }
  set darkMode(val: boolean) {
    localStorage.setItem('darkMode', JSON.stringify(!!val));
    this._darkMode.next(!!val);
  }
  private _enableNSFW = new BehaviorSubject(JSON.parse(localStorage.getItem('enableNSFW') || 'false'));
  readonly enableNSFW$ = this._enableNSFW.asObservable().pipe(distinctUntilChanged());
  get enableNSFW() {
    return this._enableNSFW.getValue();
  }
  set enableNSFW(val: boolean) {
    localStorage.setItem('enableNSFW', JSON.stringify(!!val));
    this._enableNSFW.next(!!val);
  }
  constructor() {}
}
