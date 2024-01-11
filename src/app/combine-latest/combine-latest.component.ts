import { Component } from '@angular/core';
import { Observable, combineLatest, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  template: '<ul><li *ngFor="let val of arr">{{val}}</li></ul>',
})
export class CombineLatestComponent {
  ob1: Observable<string> = of("ABC");
  ob2 : Observable<number> = of(50);
  arr! : Array<string | number>;
  constructor(){
    combineLatest([this.ob1,this.ob2])
    .pipe(
      tap((val) =>{ console.log(val);}),
    ).subscribe((val) =>{
      this.arr = val;
    })
  }
}
