import { Component } from '@angular/core';
import { ReplaySubjectService } from './replay-subject.service';

@Component({
  selector: 'app-replay-subject',
  template: '<div *ngIf="isAuthenticated"> User is Authenticated</div><div *ngIf="!isAuthenticated"> User is not Authenticated</div><button (click)="onClick()">Click me</button>',
})
export class ReplaySubjectComponent {
  isAuthenticated : boolean = false;

  constructor(private replayService : ReplaySubjectService){}

  ngOnInit(): void {
    this.replayService.getAuthenticationState().subscribe(isAuth =>{
      this.isAuthenticated = isAuth;
    })
  }

  onClick(){
    this.replayService.logIn();
  }
}
