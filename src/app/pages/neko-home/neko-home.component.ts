import { Component, OnInit } from '@angular/core';
import { NekoService } from '@app/services/neko.service';
import { AppService } from '@app/services/app.service';
import { BehaviorSubject, combineLatest, Subject, defer } from 'rxjs';
import { NekoImageMd } from '@app/models/neko-image';
import {
  distinctUntilChanged,
  map,
  startWith,
  tap,
  debounceTime,
  filter,
  switchMap,
  first,
  take,
  finalize
} from 'rxjs/operators';
import { Logger } from '@app/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSelectChange } from '@angular/material/select';

const log = new Logger('NekoHomeComponent');

@Component({
  selector: 'app-neko-home',
  templateUrl: './neko-home.component.html',
  styleUrls: ['./neko-home.component.scss']
})
export class NekoHomeComponent implements OnInit {
  readonly refresh = new Subject<boolean>();
  readonly refresh$ = this.refresh.asObservable();
  private loading = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loading.asObservable().pipe(distinctUntilChanged());
  private _items = new BehaviorSubject<NekoImageMd[]>(null);
  readonly items = this._items.asObservable().pipe(distinctUntilChanged());
  readonly items$ = combineLatest([
    this.items.pipe(startWith(null)),
    this.refresh$.pipe(startWith(null)),
    this.appService.enableNSFW$.pipe(startWith(false))
  ]).pipe(
    debounceTime(200),
    tap(x => log.debug(x)),
    map(([items, r, enableNSFW]) => items.filter(x => (!!enableNSFW ? true : !x.isNsfw)))
  );
  readonly defaultItem = this.items.pipe(map(x => x.find(y => y.name === 'fox')));
  private selectedItem = new BehaviorSubject<NekoImageMd>(null);
  readonly selectedItem$ = this.selectedItem.asObservable().pipe(distinctUntilChanged());
  readonly image$ = combineLatest([
    this.selectedItem$.pipe(filter(x => !!x)),
    this.refresh$.pipe(startWith(null))
  ]).pipe(
    map(([item]) => item),
    switchMap(x =>
      defer(() => {
        this.loading.next(true);
        return this.nekoService.requestImage(x);
      })
    ),
    map(x => this.sanitization.bypassSecurityTrustResourceUrl(x.url))
  );
  constructor(private nekoService: NekoService, private appService: AppService, private sanitization: DomSanitizer) {
    this.nekoService.getImages().subscribe(x => this._items.next(x));
    this.items
      .pipe(
        filter(x => !!x),
        take(1),
        map(x => x.find(y => y.name === 'fox'))
      )
      .subscribe(x => this.selectedItem.next(x));
  }
  changeSelection(ev: MatSelectChange) {
    this.selectedItem.next(ev.value);
  }
  imageDoneLoading(ev: Event) {
    this.loading.next(false);
  }
  ngOnInit() {}
}
