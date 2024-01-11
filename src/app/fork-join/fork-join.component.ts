import { Component } from '@angular/core';
import { forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  template: `<ul><li *ngFor="let value of arr">{{value}}</li></ul>`,
})
export class ForkJoinComponent {
  arr 
  constructor(){
    const promise = (val : any) =>
      new Promise(res =>{
        setTimeout(() => {
          res(`Promise Resolved : ${val}`)
        }, 5000);
      })
      const source = of([1,2,3,4,5]);
      const example = source.pipe(mergeMap(q => forkJoin(...q.map(promise))))

      const sub = example.subscribe((val) =>console.log(val))
    }
}
