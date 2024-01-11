import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-de-bounce-time',
  template: `<input type="text" (input)="onSearch($event)"/> 
              <ul>
                <li *ngFor="let val of arr">{{val}}</li>
              </ul>`,
})
export class DeBounceTimeComponent implements OnInit{
  private searchTeam = new Subject<string>();
  arr : any[] = [];

  ngOnInit(){
    this.searchTeam
      .pipe(
        debounceTime(500)
      )
      .subscribe((team : string) =>{
        this.arr = ['Result 1','Result 2','Result 3'];
      })
  }
  onSearch(eve : Event) : void{
    this.arr = [];
    this.searchTeam
    .next(
        (<HTMLInputElement>eve.target).value
    );
  }
}
