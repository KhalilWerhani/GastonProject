import { Component } from '@angular/core';
  

interface SideNavToggle {
  screenWidth : number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet';

  isSidenaveCollpased = false;
  screenWidth = 0;

  onToggleSidenav(data: SideNavToggle):void {
     this.screenWidth = data.screenWidth;
     this.isSidenaveCollpased = data.collapsed;
  }
}
