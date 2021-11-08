import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  user = {
    email: '',
    password: '',
    passwordrepeat: '',
  };
  isError = false;
  error = '';
  errorType = '';
  constructor() {}

  ngOnInit(): void {}

  makeLogin() {
    this.isError = false;
    if (this.user.email === '' || this.user.password === '') {
      this.isError = true;
      this.error = 'Введите все данные';
      this.errorType = 'alert alert-danger';
    } else {
      let user = localStorage.getItem('user');
      if (user == null || user == undefined) {
        this.isError = true;
        this.error = 'Нет такого аккаунта';
        this.errorType = 'alert alert-danger';
      } else {
        this.isError = true;
        this.error = 'Вы вошли';
        this.errorType = 'alert alert-success';
      }
    }
  }

  registerUser() {
    this.isError = false;
    if (
      this.user.email === '' ||
      this.user.password === '' ||
      this.user.passwordrepeat === ''
    ) {
      this.isError = true;
      this.error = 'Введите все данные';
      this.errorType = 'alert alert-danger';
    } else if (this.user.password !== this.user.passwordrepeat) {
      this.isError = true;
      this.error = 'Разные пароли!';
      this.errorType = 'alert alert-danger';
    } else {
      let user_in_json = JSON.stringify(this.user);
      localStorage.setItem('user', user_in_json);
      this.isLogin = true;

      this.isError = true;
      this.error = 'Вы зарегистрированы';
      this.errorType = 'alert alert-success';
    }
  }
}
