import { Component, OnInit } from '@angular/core';
import {
  interval,
  map,
  take,
  concat,
  Observable,
  filter,
  of,
  from,
  mergeMap,
  tap,
  exhaustMap,
  combineLatest,
  concatMap,
  switchMap,
  delay,
  fromEvent,
  timer,
  Observer,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'rxjscom',
  templateUrl: './rxjscom.component.html',
  styleUrls: ['./rxjscom.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class RxjscomComponent implements OnInit {
  public numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}
  public users = [
    { id: 1, name: 'kushan shanuka', age: 32, isActive: true },
    { id: 2, name: 'Sameera nuwan', age: 31, isActive: false },
    { id: 3, name: 'thilina anuruda', age: 23, isActive: true },
    { id: 4, name: 'john logg', age: 30, isActive: true },
    { id: 5, name: 'adam silva', age: 25, isActive: true },
    { id: 6, name: 'kavish prathap', age: 29, isActive: false },
    { id: 7, name: 'banu haris', age: 37, isActive: true },
    { id: 8, name: 'godam gul', age: 19, isActive: true },
    { id: 9, name: 'bross kovish', age: 28, isActive: false },
    { id: 10, name: 'anu malik', age: 35, isActive: false },
    { id: 11, name: 'lal kru', age: 42, isActive: true },
  ];

  public bullets: number[] = [];

  ngOnInit() {
    this.mapClass();
    // let source1$ = interval(1000).pipe(
    //   map((val) => 'value from source1 ' + val),
    //   take(5)
    // );
    // let source2$ = interval(500).pipe(
    //   map((val) => 'value from source2 ' + val),
    //   take(3)
    // );
    // concat(source1$, source2$).subscribe((data) => {
    //   console.log(data);
    // });

    // let x = interval(1000);

    // interval(10)
    //   .pipe(
    //     filter((id) => id > 0),
    //     tap((id) => console.log('id', id)),
    //     exhaustMap((id) => {
    //       return fetch(`https://jsonplaceholder.typicode.com/posts/` + id);
    //     }),
    //     take(6)
    //   )
    //   .subscribe((v: any) => {
    //     console.log(v);
    //   });

    // let y = interval(2000);
    // let z = of('val3');

    // combineLatest([x, y, z]).subscribe((data) => {
    //   console.log(data);
    // });
    const foo$ = this.getUser(1).pipe(
      concatMap((user) => this.getUserDetails(user))
    );
    const bar$ = of(1, 2, 3, 4, 5, 6).pipe(
      exhaustMap((id) => this.getUser(id))
    );

    // foo$.subscribe((data) => console.log('foo', data));
    // bar$.subscribe((data) => console.log('bar', data));

    const example$ = from([1, 2, 3, 4, 5]).pipe(
      concatMap((x) => of(x * 10).pipe(delay(1000))),
      take(3)
    );

    // example$.subscribe({
    //   next: (v) => console.log('returnVal ', v),
    //   complete: () => console.log('Completed'),
    // });
  }

  getUser(id: number): Observable<UserInterface> {
    const user = this.users.find((usr) => usr.id == id)!;
    return of(user);
  }
  getUserDetails(user: UserInterface) {
    return of({
      id: user.id,
      name: user.name,
      age: user.name,
      isActive: user.isActive,
    });
  }

  // getNumInterval() {
  //   return of(...this.numArray).pipe(concatMap((num) => of(num)));
  // }

  mapClass() {
    const btn = document.getElementById('button');
    const btnClick$ = fromEvent(btn, 'click');
    const observer$ = btnClick$
      .pipe(switchMap(() => timer(0, 500).pipe(take(5))))
      .subscribe({
        next: (i) => {
          this.bullets.push(i + 1);
          console.log(i + 1);
        },
        complete: () => console.log('complete'),
      });
  }
}

export interface UserInterface {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}
