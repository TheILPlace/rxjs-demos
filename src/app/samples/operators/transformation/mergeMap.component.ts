import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { interval, of } from 'rxjs';
import { map, mapTo, delay, concatMap, tap, switchMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: '../../../base.component.html',
  styles: []
})
export class MergeMapComponent extends BaseComponent implements OnInit {
  freeText = 'mergeMap subscribes immediately to inner observables, t';
  title = 'MergeMap operator';

  constructor() {
    super();
  }

  init() {

    const switched = (id) => of('http response ' + id);

    const source = interval(1000);
    this.sub = source.pipe(
      tap(value => this.log('>outer: ' + value)),
      // switchMap(value => switched)
      mergeMap(value => {
        this.log('*started inner ' + value);
        return switched(value).pipe(
          delay(500 + value * 200),
          tap(() => this.log('!!inner: ' + value)));
      }
      )

    ).subscribe(data => this.log('<' + data));
  }
}
