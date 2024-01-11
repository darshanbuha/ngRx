import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { MergeComponent } from './merge/merge.component';
import { DeBounceTimeComponent } from './de-bounce-time/de-bounce-time.component';
import SwitchMapComponent from './switch-map/switch-map.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { RetryComponent } from './retry/retry.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterComponent,
    MergeComponent,
    DeBounceTimeComponent,
    SwitchMapComponent,
    CombineLatestComponent,
    RetryComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ForkJoinComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
