import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private status = new BehaviorSubject(false);
  currentStatus = this.status.asObservable();

  constructor() {
  }

  changeStatus(statusPram: boolean) {
    this.status.next(statusPram);
  }
}
