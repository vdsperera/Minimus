import { Component, OnInit } from '@angular/core';
import { UiServiceService } from './ui-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  showMenu = false;
  darkModeActive: boolean;

  constructor(public ui: UiServiceService)
  {

  }

  ngOnInit()
  {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  toggleMenu()
  {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch()
  {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

}
