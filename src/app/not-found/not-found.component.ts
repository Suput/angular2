import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}
  type = 7;
  ngOnInit(): void {}

  changeTheme() {
    let type = 'dark';

    if (type === 'light') {
      console.log('light');
    } else if (type === 'blue') {
      console.log('blue');
    } else if (type === 'dark') {
      console.log('dark');
    } else if (type === 'red') {
      console.log('red');
    } else if (type === 'green') {
      console.log('green');
    } else if (type === 'coral') {
      console.log('coral');
    } else if (type === 'azure') {
      console.log('azure');
    } else {
      console.log('else');
    }

    switch (type) {
      case 'light':
        console.log('light');
        break;
      case 'blue':
        console.log('blue');
        break;
      case 'dark':
        console.log('dark');
        break;
      case 'red':
        console.log('red');
        break;
      case 'green':
        console.log('green');
        break;
      case 'coral':
        console.log('coral');
        break;
      case 'azure':
        console.log('azure');
        break;
      default:
        console.log('else');
        break;
    }

    this.type += 1;

    if (0) { // no
      console.log(0);
    }
    if (1) { // yes
      console.log(1);
    }
    if (10) { // yes
      console.log(10);
    }
    if (-1) { // yes
      console.log(-1);
    }
    if (-10) { // yes
      console.log(-10);
    }
    if (true) { // yes
      console.log(true);
    }
    if (false) { // yes
      console.log(false);
    }
    if ("1") { // yes
      console.log("1111");
    }
    if ("0") { // yes
      console.log("0000");
    }
    if ("true") { // yes
      console.log("true");
    }
    if ("false") { // yes
      console.log("false");
    }

    for (let i = 0; i < 5; i += 1) {
      console.log(i);
      if (i === 3) {
        break;
      }
    }
    for (let i = 0; i < 5; i += 1) {
      console.log(i);
      if (i === 3) {
        continue;
      }
    }
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        console.log(i);
        if (j === 3) {
          break;
        }
      }
    }
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        console.log(i);
        if (j === 3) {
          continue;
        }
      }
    }
  }
}
