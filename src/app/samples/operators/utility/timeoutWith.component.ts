import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { Subject, of } from 'rxjs';
import { tap, delay, mapTo, concatMap, timeout, catchError, timeoutWith } from 'rxjs/operators';

@Component({
    selector: 'app-timeout',
    templateUrl: '../../../base.component.html',
    styleUrls: []
})
export class TimeoutWithComponent extends BaseComponent implements OnInit {

    buttonTitle = '';
    buttonClass = 'button-blue';
    freeText = 'Using timeoutWith';
    title = 'timeoutWith operator';

    source;

    constructor() { super(); }


    makeRequest(delayms) {
        return of('Request Complete!' + delayms).pipe(delay(delayms));
    }



    init() {

        const requestTimeoutLogger = of('logging request timeout');

        this.source = of(4000, 3000, 2000);
        // transparently log values from source with 'tap'
        this.sub = this.source.pipe(
            concatMap(duration => this.makeRequest(duration).pipe(

                timeoutWith(2500, requestTimeoutLogger)

            ))



        ).subscribe(data => this.log(data));


    }

    buttonClick() {
        this.source.next(true);
    }

    getButtonClass() {
        return this.buttonClass;
    }

}
