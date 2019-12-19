import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import {  Subject } from 'rxjs';
import { tap, delay, mapTo } from 'rxjs/operators';

@Component({
    selector: 'app-delay',
    templateUrl: '../../../base.component.html',
    styleUrls: []
})
export class DelayComponent extends BaseComponent implements OnInit {

buttonTitle = 'emit';
buttonClass = 'button-blue';
freeText = 'Using delay';
title = 'delay operator';

source;

    constructor() { super(); }

    init() {


        this.source = new Subject();
        // transparently log values from source with 'tap'
        this.sub = this.source.pipe(
            delay(1000),

            mapTo('clicked !')

        ).subscribe(data => this.log(data));


    }

    buttonClick() {
        this.source.next(true);
    }

    getButtonClass() {
        return this.buttonClass;
    }

}
