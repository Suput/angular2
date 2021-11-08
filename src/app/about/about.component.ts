import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  partners = [
    {
      name: 'Microsoft',
      address: 'USA',
      year: '2015-2017',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1072427015612063744/H2-TQKDY_400x400.jpg',
      rating: 5,
    },
    {
      name: 'Irland',
      address: 'Canada',
      year: '2015-2016',
      imageUrl:
        'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true',
      rating: 3,
    },
    {
      name: 'Telegram',
      address: 'Russia',
      year: '2017-',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png',

      rating: 1,
    },
    {
      name: 'Snapchat',
      address: 'USA',
      year: '2015-2016',
      imageUrl:
        'https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo',
    },
    {
      name: 'Mail Group',
      address: 'Russia',
      year: '2018-2021',
      imageUrl: 'https://limg.imgsmail.ru/splash/v/i/share-fp-a2954bf3df.png',
    },
    {
      name: 'Vk',
      address: 'Russia',
      year: '2021-',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/200px-VK_Compact_Logo_%282021-present%29.svg.png',
    },
    {
      name: 'Meta',
      address: 'USA',
      year: '2021-',
      imageUrl:
        'https://www.m24.ru/b/d/nBkSUhL2hFUvkce1Jr6BvMKnxdDs95C-ziTNnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=Bv9eS9aK_jq9DzG5ljPiVg.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
