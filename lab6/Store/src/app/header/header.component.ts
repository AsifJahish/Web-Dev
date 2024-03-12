import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showNavigation = false;

  toggleNavigation(): void {
    this.showNavigation = !this.showNavigation;
  }

}
