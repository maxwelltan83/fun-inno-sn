import { Component, OnInit, HostListener } from '@angular/core';
import * as firebase from 'firebase';
import { AppStringService } from './private/app-string.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @HostListener('window:beforeunload') goToPage() {
    this.router.navigate(['/signup']);
  }

  constructor(private appStringService: AppStringService,
              private authService: AuthService,
              private router: Router) {
      window.onscroll = (ev) => {
        this.positonHeaderOnTop();
      };
  }

  ngOnInit() {
    const config = this.appStringService.getDatabaseConfig();
    firebase.initializeApp(config);
  }

  positonHeaderOnTop() {
    const header: HTMLElement = document.getElementById('mainHeader');
    const sticky: number = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
}
