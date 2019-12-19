import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateObservableComponent } from './samples/create-observable.component';
import { CustomOperatorComponent } from './samples/operators/custom-operator/custom-operator.component';
import { TapComponent } from './samples/operators/utility/tap.component';
import { MapComponent } from './samples/operators/transformation/map.component';
import { DelayComponent } from './samples/operators/utility/delay.component';
import { TimeoutComponent } from './samples/operators/utility/timeout.component';
import { TimeoutWithComponent } from './samples/operators/utility/timeoutWith.component';
import { SwitchMapComponent } from './samples/operators/transformation/switchMap.component';
import { ConcatMapComponent } from './samples/operators/transformation/concatMap.component';
import { MergeMapComponent } from './samples/operators/transformation/mergeMap.component';
import { WithLatestFromComponent } from './samples/operators/combination/withLatestFrom.component';
import { CombineLatestComponent } from './samples/operators/combination/combineLatest.component';
import { ShareReplayComponent } from './samples/operators/multicasting/shareReplay.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateObservableComponent,
    CustomOperatorComponent,
    TapComponent,
    MapComponent,
    DelayComponent,
    TimeoutComponent,
    TimeoutWithComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    MergeMapComponent,
    WithLatestFromComponent,
    CombineLatestComponent,
    CustomOperatorComponent,
    ShareReplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
