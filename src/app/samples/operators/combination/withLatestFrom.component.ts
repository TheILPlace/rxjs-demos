import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { interval, BehaviorSubject, Subject, of } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: '../../../base.component.html',
  styles: []
})
export class WithLatestFromComponent extends BaseComponent implements OnInit {
  buttonTitle = 'set user';
  freeText = 'the first obs1 fires, then the second gets the latest value from obs2';
  title = 'withLatestFrom operator';

  user$ = new Subject() ; // BehaviorSubject('achi');
  counter = 1;
  constructor() {
    super();
  }

  init() {

    const isLoading$ = new BehaviorSubject('loading!');


    const source = interval(2000);
    this.sub = source.pipe(
      withLatestFrom(this.user$, isLoading$),
      // tap(([num, name, loading]: [number, string, string]) => {
      //     this.log(`tap: ${num} - ${name}, ${loading}`);

      // })

    ).subscribe(([num, name, loading]: [number, string, string]) => {
      this.log(`${num} - ${name}, ${loading}`);
    });
  }


  buttonClick() {
    this.user$.next('achi! ' + this.counter);
    this.counter++;
  }
}
