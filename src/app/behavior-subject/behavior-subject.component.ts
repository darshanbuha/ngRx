import { Component } from '@angular/core';
import { BehaviorSubject, pairwise, scan, startWith } from 'rxjs';
import { BehaviorSubjectService } from './behavior-subject.service';

@Component({
  selector: 'app-behavior-subject',
  template: '<div class="modal" *ngIf="isOpen$ | async"><div class="modal-content"><p>This is Modal Window</p><button (click)="close()">Click Me</button></div></div>',
})
export class BehaviorSubjectComponent {
  isOpen$ = this.behaviorService.isOpen$;
  
  constructor(private behaviorService : BehaviorSubjectService){}
  
  close(){
    this.behaviorService.close();
  }
}
