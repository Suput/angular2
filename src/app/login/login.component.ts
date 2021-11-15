import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  user = {
    name: '',
    lastname: '',
    pluslastname: '',
    email: '',
    gender: false,
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
      //Im lazy to create normal login system, yes?
      if (true) {
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

  //Fresh code from stackoverflow
  validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.user.email);
  }

  registerUser() {
    this.isError = false;
    if (
      this.user.email === '' ||
      this.user.password === '' ||
      this.user.passwordrepeat === '' ||
      this.user.name === '' ||
      this.user.lastname === '' ||
      this.user.pluslastname === ''
    ) {
      this.isError = true;
      this.error = 'Введите все данные';
      this.errorType = 'alert alert-danger';
    } else if (this.user.password !== this.user.passwordrepeat) {
      this.isError = true;
      this.error = 'Разные пароли!';
      this.errorType = 'alert alert-danger';
    } else if (this.user.name.length > 20 || this.user.lastname.length > 20 || this.user.pluslastname.length > 20 || (this.user.email.length > 300 || !this.validateEmail()) || (this.user.password.length < 10 || this.user.password.length > 300) || (this.user.passwordrepeat.length < 10 || this.user.passwordrepeat.length > 300)) {
      this.isError = true;
      this.error = 'Один или несколько элементов формы не соответствуют нормам!';
      this.errorType = 'alert alert-danger';
    }
    
    else {
      let user_in_json = JSON.stringify(this.user);
      localStorage.setItem('user', user_in_json);
      this.isLogin = true;

      this.isError = true;
      this.error = 'Вы зарегистрированы';
      this.errorType = 'alert alert-success';
    }
  }
}
