import { Component } from '@angular/core';
import { AsyncSubjectService } from './async-subject.service';

@Component({
  selector: 'app-async-subject',
  template: '<div> Result : {{result}}</div>'
})
export class AsyncSubjectComponent {
  result! : number;

  constructor(private asyncService : AsyncSubjectService){}

  ngOnInit(): void {
    this.asyncService.performCalculation().subscribe((res) =>{
      this.result = res;
    })
  }
}
