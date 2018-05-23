import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.less']
})
export class DesktopComponent implements OnInit {
  news = [
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'Відзначення Дня перемоги над нацизмом у Другій світовій війні',
      'data': {
        'month': 'травень',
        'day': '09',
        'year': '2018'
      }
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'Відзначення Дня перемоги над нацизмом у Другій світовій війні',
      'data': {
        'month': 'травень',
        'day': '09',
        'year': '2018'
      }
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'Відзначення Дня перемоги над нацизмом у Другій світовій війні',
      'data': {
        'month': 'травень',
        'day': '09',
        'year': '2018'
      }
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'Відзначення Дня перемоги над нацизмом у Другій світовій війні',
      'data': {
        'month': 'травень',
        'day': '09',
        'year': '2018'
      }
    }
  ];

  infos = [
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'ОСВІТНІЙ ПРОЦЕС',
      'description': 'інформація про навчальний процес у закладі, структуру року, ДПА, ЗНО, навчальні плани',
      'bg': '#f2b930'
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'ПОЗАКЛАСНА РОБОТА',
      'description': 'виховна робота у закладі, загальношкільні заходи, робота гуртків та секцій',
      'bg': '#d93ad0'
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'ВЧИТЕЛЯМ ШКОЛИ',
      'description': 'матеріали та документи для здійснення професійної діяльності учителями школи',
      'bg': '#6c98e1'
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'ІНФОРМАЦІЯ ДЛЯ УЧНІВ',
      'description': 'матеріали актуальні для учнів школи, акції, опитування, проекти, заходи для молоді',
      'bg': '#ba0417'
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'БАТЬКІВСЬКИЙ НАВІГАТОР',
      'description': 'інформація для батьків учнів школи, що охоплює всі аспекти роботи школи.',
      'bg': '#48a7d4'
    },
    {
      'img': 'http://kzsh37.dp.ua/wp-content/uploads/2018/05/n_9may.jpg',
      'title': 'БЕЗПЕКА У ЗАКЛАДІ',
      'description': 'інформація про безпекові аспекти роботи навчального закладу',
      'bg': '#84c54e'

    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
