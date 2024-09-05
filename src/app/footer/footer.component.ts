import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialImages = [
    '../../assets/images/whatsapp.svg',
    '../../assets/images/youtube.svg',
    '../../assets/images/facebook.svg',
    '../../assets/images/instagram.svg'
  ]

  footerLinks = [
    'Contact',
    'Disclaimer',
    'Privacy Policy'
  ]
}
