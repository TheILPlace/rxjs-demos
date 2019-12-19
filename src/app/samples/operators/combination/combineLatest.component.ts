import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { interval, BehaviorSubject, Subject, of, combineLatest, from } from 'rxjs';
import { tap, withLatestFrom, concatMap, delay, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: '../../../base.component.html',
  styles: []
})
export class CombineLatestComponent extends BaseComponent implements OnInit {
  buttonTitle = 'set user';
  freeText = 'at least one value from each ovs. then emition after each outer obs, no matter which one';
  title = 'combineLatest *function*';

  user$ = new Subject() ; // BehaviorSubject('achi');
  counter = 1;

  constructor() {
    super();
  }

  init() {

    const isLoading$ = new BehaviorSubject('loading!');

    // const isLoading$  =  from(['1', '2', '3', '4', '5', '6', '7', '8']).pipe(
    //   concatMap( item => of(item).pipe ( delay( 500 ) )),
    //   );

    const source = interval(2000);
    this.sub = combineLatest(source, this.user$, isLoading$ )


    .subscribe(([num, name, loading]: [number, string, string]) => {
      this.log(`${num} - ${name}, ${loading}`);
    });
  }


  buttonClick() {
    this.user$.next('achi! ' + this.counter);
    this.counter++;
  }
}
