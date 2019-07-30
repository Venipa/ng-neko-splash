import { Component, OnInit, Injectable, Input, AfterViewInit, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { startWith, distinctUntilChanged } from 'rxjs/operators';
import { transition, animate, style, trigger } from '@angular/animations';

const fadeInTimeMS = 1000;
const DEFAULT_WIDTH = 200;
const DEFAULT_CIRCLE_WIDTH = 24;

const FadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    // :enter is alias to 'void => *'
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    // :leave is alias to '* => void'
    animate(300, style({ opacity: 0 }))
  ])
]);
const FadeOut = trigger('fadeOut', [
  transition(':leave', [
    // :leave is alias to '* => void'
    animate(300, style({ opacity: 0 }))
  ])
]);

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [FadeInOut, FadeOut]
})
export class LoaderComponent implements OnInit, AfterViewInit {
  private _isActive = new BehaviorSubject(true);
  readonly isActive$ = this._isActive.asObservable().pipe(
    startWith(this._isActive.getValue()),
    distinctUntilChanged()
  );
  @Input() get isActive() {
    return this._isActive.getValue();
  }
  set isActive(val: boolean) {
    this._isActive.next(val);
  }
  @Input() isAfterViewInit = false;
  @Input() statusText = '';
  @Input() logoImageUrl: string;
  @Input() enableCircle = true;
  @Input() width = DEFAULT_WIDTH;
  @Input() customBackColor: string;
  @Input() coverType: 'fixed' | 'cover' | undefined = 'cover';
  constructor(private loaderel: ElementRef) {}
  ngOnInit(): void {
    if (this.enableCircle && this.width === DEFAULT_WIDTH) {
      this.width = DEFAULT_CIRCLE_WIDTH;
    }
  }
  ngAfterViewInit(): void {
    if (this.isAfterViewInit) {
      setTimeout(() => {
        this.isActive = false;
      }, fadeInTimeMS);
    }
  }
}
