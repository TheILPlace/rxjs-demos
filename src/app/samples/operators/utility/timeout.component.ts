import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { Subject, of } from 'rxjs';
import { tap, delay, mapTo, concatMap, timeout, catchError } from 'rxjs/operators';

@Component({
    selector: 'app-timeout',
    templateUrl: '../../../base.component.html',
    styleUrls: []
})
export class TimeoutComponent extends BaseComponent implements OnInit {

    buttonTitle = '';
    buttonClass = 'button-blue';
    freeText = 'Using timeout';
    title = 'timeout operator';

    source;

    constructor() { super(); }


    makeRequest(delayms) {
        return of('Request Complete!' + delayms).pipe(delay(delayms));
    }

    init() {


        this.source = of(4000, 3000, 2000);
        // transparently log values from source with 'tap'
        this.sub = this.source.pipe(
            concatMap(duration => this.makeRequest(duration).pipe(
                timeout(2500),
                catchError(err => of('request timed out ! ' + duration))))



        ).subscribe(data => this.log(data));


    }

    buttonClick() {
        this.source.next(true);
    }

    getButtonClass() {
        return this.buttonClass;
    }

}
