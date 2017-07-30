import {Injectable} from '@angular/core';
import {User} from "../models/user.model";

@Injectable()
export class AuthService {

  constructor() {
  }

  loginWithCredentials(user:User): Boolean {
    if (user.username === 'admin' && user.password === '1234') {
      return true;
    }
    return false;
  }
}
