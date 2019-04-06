import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogIn(form: NgForm) {
    const email: string = form.value.emailTextBox;
    const password: string = form.value.passwordTextBox;
    console.log(`email => ${email}`);
    console.log(`password => ${password}`);
    this.authService.login(email, password);
  }
}
