import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-samples';

  links = [
    {
      title: 'utility', items: [
        { name: 'tap', link: '/operators/utility/tap' },
        { name: 'delay', link: '/operators/utility/delay' },
        { name: 'timeout', link: '/operators/utility/timeout' },
        { name: 'timeoutWith', link: '/operators/utility/timeoutWith' }
      ]
    },
    {
      title: 'Transformation', items: [
        { name: 'map', link: '/operators/transformation/map' },
        { name: 'switchMap', link: '/operators/transformation/switchMap' },
        { name: 'concatMap', link: '/operators/transformation/concatMap' },
        { name: 'mergeMap', link: '/operators/transformation/mergeMap' }
      ]
    },
    {
      title: 'combination', items: [
        { name: 'withLatestFrom', link: '/operators/combination/withLatestFrom' },
        { name: 'combineLatest', link: '/operators/combination/combineLatest' },
        // { name: 'tap', link: '/operators/utility/tap' }
      ]
    },
    {
      title: 'custom', items: [
        { name: 'custom operator', link: '/operators/custom/customOperator' },
        
      ]
    },
    {
      title: 'multicasting', items: [
        
        { name: 'shareReplay', link: 'operators/multicasting/shareReplay' },
        { name: '', link: '' },
      ]
    }

  ];
}
