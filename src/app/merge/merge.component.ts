import { Component } from '@angular/core';
import { Observable, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  template: '<ul><li *ngFor="let value of arr">{{value}}</li></ul>',
})
export class MergeComponent {
arr : any [] = [];

constructor(){
  const ob1 = new Observable(val =>{
    setTimeout(() => {
      val.next('value from Observable 1')
    }, 1000);
  })

  const ob2 = new Observable(val =>{
    setTimeout(() => {
      val.next('value from Observable 2')
    }, 2000);
  })
  const ob3 = new Observable(val =>{
    setTimeout(() => {
      val.next('value from Observable 3')
    }, 3000);
  })
  const ob4 = new Observable(val =>{
    setTimeout(() => {
      val.next('value from Observable 4')
    }, 4000);
  })
  const ob5 = new Observable(val =>{
    setTimeout(() => {
      val.next('value from Observable 5')
    }, 5000);
  })
  const ob6 = new Observable(val =>{
    setTimeout(() => {
      val.next('value from Observable 6')
    }, 6000);
  })
  const mergeOb = merge(ob1,ob2,ob3,ob4,ob5,ob6);
  
  mergeOb.subscribe(arg => {
    this.arr.push(arg);
    console.log(arg);
    
  });
}
}
