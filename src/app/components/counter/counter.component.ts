import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterInterface } from './state/counter.model';
import { getCounter, getTitle } from './state/counter.selectors';
import { Appstate } from './../../../app/app-store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter$: Observable<any>;
  title$: Observable<any>;
  constructor(private store: Store<Appstate>) {}

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
    this.title$ = this.store.select(getTitle);
  }
}
