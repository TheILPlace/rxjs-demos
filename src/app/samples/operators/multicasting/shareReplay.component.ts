import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { interval, BehaviorSubject, Subject, of, Subscription, forkJoin, Observable, NEVER, EMPTY } from 'rxjs';
import { tap, withLatestFrom, share, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: '../../../base.component.html',
  styles: []
})
export class ShareReplayComponent extends BaseComponent implements OnInit {
  buttonTitle = 'get Joke';
  freeText = 'caching';
  title = 'shareReplay operator';

  subs: Array<Subscription> = [];
  private cache$: Observable<any>;
  counter = 0;


  constructor(private httpClient: HttpClient) {
    super();
  }

  loadJokeCache() {
    if (!this.cache$) {
      this.cache$ = this.httpClient.get('https://api.chucknorris.io/jokes/random').pipe(
        shareReplay(1)
      );
    }

    return this.cache$;

  }

  loadJoke() {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }


  init() {


    const source = [];
    for (let i = 0; i < 5; i++) {
      source.push(this.loadJokeCache());
    }

    this.sub = forkJoin(source).subscribe(data => {
        data.forEach((item: any) => this.log(item.value));
    });


  }


  buttonClick() {
    this.counter ++;
    if (this.counter % 5 == 0) this.cache$ = null;
    this.subs.push(
      this.loadJokeCache().subscribe((data: any) => {
        this.log(data.value);
      }
      )
    );


  }
}
