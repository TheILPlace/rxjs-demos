import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-base',
    template: '',
    styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnDestroy {
    result = [];
    sub: Subscription;
    title = '';
    buttonTitle = '';
    buttonClass = '';
    freeText = '';

    constructor() { }

    ngOnInit(): void {

        this.init();
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    init() {

    }

    log(value: any) {
        this.result.push(value);
    }

    buttonClick() {

    }

    getButtonClass() {
        return '';
    }
}
