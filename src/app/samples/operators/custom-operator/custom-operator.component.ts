import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { from, interval, pipe } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-operator',
  templateUrl: '../../../base.component.html',
  styleUrls: []
})
export class CustomOperatorComponent extends BaseComponent implements OnInit {
  freeText = 'reusing operators';
  title = 'custom operator';

  constructor() { super(); }



  init() {

    const customPipe = () =>
    pipe(
     map((data: number) => (data * 10)),
     tap(data => this.log('inner ' + data)),
     filter(data => data % 30 === 0)
   );


    const data$ = interval(1000);

    this.sub = data$.pipe(
    customPipe()
    ).subscribe(result => this.log('!!!result ' + result));

  }

}
