import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular2';
  isUserLogin: boolean = false;
  username: string = '';

  updateMenu() {
    let user = localStorage.getItem('user');
    if (user == null || user == undefined) {
      return;
    }
    let user_object = JSON.parse(user);

    this.username = user_object.email;
    this.isUserLogin = true;
  }

  exit() {
    localStorage.clear();
    this.username = "";
    this.isUserLogin = false;
  }
}
