import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
//Yes
export class AboutComponent implements OnInit {
  posts = [
    {
      name: 'HowToEat.com - The Best eating guide!',
      Date: '11/13/2021',
      text:
        'How to eat: The guide, only at howtoeat.com',
      author:
        'HowToEat.com - The Best eating guide!'
    },
    {
      name: 'Sussie',
      Date: '11/12/2021',
      text:
        'Sussie (Susie) joined the party!',
      author:
        'Rose of Wind fan 13'
    },
    {
      name: 'РАСПРОДАЖА НА АЛИЭКСПРЕСС',
      Date: '11/11/2021',
      text:
        'НА АЛИЭКСПРЕСС ТОЛЬКО НА АЛИ ЭКСПРЕСС!!11!',
        author:
          'Admin'
    },
    {
      name: 'Тестирую посты',
      Date: '11/10/2021',
      text:
        'I making mac and cheese. AND NOBODY CAN STOP ME',
        author:
          'Admin'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
