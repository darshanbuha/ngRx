import { Component } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-map',
  template: '<div *ngFor="let a of arr">{{a}}</div>',
})
export class MapComponent {
  arr : any[] = []
  constructor(){
    of(1, 2, 3, 4, 5)
    .pipe(
      map((value: number) => value * 2),

    ).subscribe(res => {
      this.arr.push(res);
      // console.log(res,'result');
      
    })
    
  }

}
