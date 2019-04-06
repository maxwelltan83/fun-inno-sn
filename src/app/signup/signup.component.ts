import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(ngform: NgForm) {
    const email: string = ngform.value.emailTextBox;
    const password: string = ngform.value.passwordTextBox;
    console.log(`email => ${email}`);
    console.log(`password => ${password}`);
    this.authService.siginUpNewUser(email, password);
  }
}
