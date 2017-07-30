import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };

  constructor(@Inject('auth') private _authService, @Inject('BASE_URL') public url) {
  }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f);
    let result = this._authService.loginWithCredentials(this.user);
    console.log('Result is ' + result);
  }

}
