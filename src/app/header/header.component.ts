import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mainHeaderLinks = [
    'Home',
    'How it works',
    'Available Franchises',
    'Franchising Guide'
  ]
}
