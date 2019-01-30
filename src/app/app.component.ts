import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AppStringService } from './private/app-string.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appStringService: AppStringService) { }

  ngOnInit() {
    // const config = this.appStringService.getDatabaseConfig();
    // firebase.initializeApp(config);
  }
}
