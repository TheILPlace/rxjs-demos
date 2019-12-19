import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { interval, of } from 'rxjs';
import { map, mapTo, delay, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: '../../../base.component.html',
  styles: []
})
export class MapComponent extends BaseComponent implements OnInit {
  freeText = 'Using map Operator';
  title = 'map / mapTo operators';

  constructor() {
    super();
  }

  init() {

    const source = interval(1000);
    this.sub = source.pipe(
      // takeUntil(this.stop$),

      map(val => val + 10),
      // concatMap( item => of(item).pipe ( delay( 1000 ) )),
      // mapTo(20)

    ).subscribe(data => this.log(data));
  }
}
