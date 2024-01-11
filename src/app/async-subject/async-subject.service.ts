import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncSubjectService {
 private resultSubject  = new AsyncSubject<number>();
 
  performCalculation(): AsyncSubject<number>{
    this.setCalculate();
    return this.resultSubject;
  }

  setCalculate():AsyncSubject<number>{
    let result = 0;
    let i=0;
    let calculate = () => {
      for(;i<1000000000; i++){
        result += i;
        this.resultSubject.next(result);
      }
      this.resultSubject.complete();
    }
    // setImmediate(calculate);
    return this.resultSubject;
  }
}
