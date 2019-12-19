import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { interval, of } from 'rxjs';
import { map, mapTo, delay, concatMap, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: '../../../base.component.html',
  styles: []
})
export class ConcatMapComponent extends BaseComponent implements OnInit {
  freeText = 'concatMap does not subscribe to the next observable until the previous completes';
  title = 'concatMap operator';

  constructor() {
    super();
  }

  init() {

    const switched = (id) => of('http response ' + id);

    const source = interval(1000);
    this.sub = source.pipe(
      tap(value => this.log('>outer: ' + value)),
      // switchMap(value => switched)
      concatMap(value => {
        this.log('*started inner ' + value);
        return switched(value).pipe(
          delay(500 + value * 100),
          tap(() => this.log('!!inner: ' + value)));
      }
      )

    ).subscribe(data => this.log('<' + data));
  }
}
