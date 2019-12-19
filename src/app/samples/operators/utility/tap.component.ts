import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { of, from, timer, interval, Subject } from 'rxjs';
import { tap, map, delay, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-tap',
    templateUrl: '../../../base.component.html',
    styleUrls: []
})
export class TapComponent extends BaseComponent implements OnInit {
stop$ = new Subject<boolean>();
 buttonTitle = 'stop';
buttonClass = 'button-red';
freeText = 'Using tap for side effects + takeUntil';
title = 'tap operator';

    constructor() { super(); }

    init() {


        const source = interval(1000);
        // transparently log values from source with 'tap'
        this.sub = source.pipe(
            takeUntil(this.stop$),
            tap(val => this.log(`BEFORE MAP: ${val}`)),
            map(val => val + 10),
            tap(val => this.log(`AFTER MAP: ${val}`))
        ).subscribe();


    }

    buttonClick() {
        this.stop$.next(true);
    }

    getButtonClass() {
        return this.buttonClass;
    }

}
