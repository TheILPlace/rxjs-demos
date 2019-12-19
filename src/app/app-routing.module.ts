import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path: '1', component: CreateObservableComponent },
  {path: 'operators/utility/tap', component: TapComponent},
  {path: 'operators/utility/delay', component: DelayComponent},
  {path: 'operators/utility/timeout', component: TimeoutComponent},
  {path: 'operators/utility/timeoutWith', component: TimeoutWithComponent},
  {path: 'operators/transformation/map', component: MapComponent},
  {path: 'operators/transformation/switchMap', component: SwitchMapComponent},
  {path: 'operators/transformation/concatMap', component: ConcatMapComponent},
  {path: 'operators/transformation/mergeMap', component: MergeMapComponent},


  {path: 'operators/combination/withLatestFrom', component: WithLatestFromComponent},
  {path: 'operators/combination/combineLatest', component: CombineLatestComponent}
,
{path: 'operators/custom/customOperator', component: CustomOperatorComponent},
{path: 'operators/multicasting/shareReplay', component: ShareReplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
