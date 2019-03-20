import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UiServiceService
{
  darkModeState: BehaviorSubject<boolean>;
  constructor()
  {
    this.darkModeState = new BehaviorSubject<boolean>(false);
  }
}
