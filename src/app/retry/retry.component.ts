import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  template: `
  <button (click)="getData()">Get Data</button>
  <div *ngIf="data">
        {{data}}
  </div>`,
})
export class RetryComponent {
  data: any;

  constructor(private http : HttpClient){
    this.getData()

  }
  getData(){
    this.http.get<any>('https://example.com/api/data')
      .pipe(
        retry(2)
      )
      .subscribe(value => {this.data = value},error => console.log('An error occurred',error))
  }
}
