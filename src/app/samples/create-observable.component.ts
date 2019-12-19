import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-create-observable',
    templateUrl: '../base.component.html',
    styleUrls: []
})
export class CreateObservableComponent extends BaseComponent implements OnInit {
    constructor() {
        super();
    }

    init() {
        const hello = Observable.create((observer) => {
            observer.next('Hello');
            setTimeout(() => {
                observer.next('World');
                observer.complete();
            }, 1000);


        });

        const subscribe = hello.subscribe(x => {
            this.log(x);
        });

    }
}
