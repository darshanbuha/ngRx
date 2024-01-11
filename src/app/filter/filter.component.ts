import { Component } from '@angular/core';
import { Observable,filter } from 'rxjs';

@Component({
  selector: 'app-filter',
  template: '<div></div>',
})
export class FilterComponent {
  arr : any[] = []

  constructor(){
    const myObservable = new Observable((val) =>{
      val.next(1);
      val.next(2);
      val.next(3);
      val.next(4);
      val.next(5);
      val.next(6);
      val.next(7);
      val.next(8);
      val.complete();
    })
    myObservable.pipe(
      filter((value: any) => value > 3)
    ).subscribe(res => {
      // console.log(res,'result');
    })
  }
}
