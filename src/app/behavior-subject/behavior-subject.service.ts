import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {
  private isOpen = new BehaviorSubject<boolean>(true);

  get isOpen$() {
    return this.isOpen.asObservable();
  }

  open(){
    this.isOpen.next(true);
  }

  close(){
    this.isOpen.next(false);
  }
}
