import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { interval, of } from 'rxjs';
import { map, mapTo, delay, concatMap, tap, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: '../../../base.component.html',
  styles: []
})
export class SwitchMapComponent extends BaseComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  freeText = ' when using switchMap each inner subscription is completed when the source emits, allowing only one active inner subscription.';
  title = 'switchMap operator';

  constructor() {
    super();
  }

  init() {

    const switched = (x) => of(x * 10);

    const source = interval(1000);
    this.sub = source.pipe(
       tap(value => this.log('interval '  + value)),
      switchMap(value =>  {
        // if (value === 2) return of('whoohoo');
        return switched(value);//.pipe(map(x => x * 10));
      }),

       switchMap(value2 => switched(value2).pipe(map(data => [value2, data])))// .pipe(delay(500 + (+value) * 100)))
        


    ).subscribe(data => this.log(data[0] + '-' + data[1]));
  }
}
