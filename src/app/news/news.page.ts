import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private news;
  constructor() {
    this.news ={
      image:"http://s2.glbimg.com/VD9XgaIKvSsGQCXNttt1lZHHY9o=/695x0/s.glbimg.com/po/tt2/f/original/2015/09/28/android.jpg",
      texto: "Atualmente, o sistema operacional móvel do Google é o mais utilizado em todo o mundo, e está presente em milhares de aparelhos, de várias marcas. Mesmo com toda a dimensão que o sistema atingiu, a sua história é bastante recente. O primeiro dispositivo Android foi lançado há apenas seis anos!"
    }
   }

  ngOnInit() {
  }

}
