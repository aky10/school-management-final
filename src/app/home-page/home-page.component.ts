// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './home-page.component.html',
//   styleUrl: './home-page.component.css'
// })
// export class HomePageComponent {

// }
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
  })
export class HomePageComponent implements OnInit {

  // slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    // this.slides[0] = {
    //   src: './assets/img/angular.jpg',
    // };
    // this.slides[1] = {
    //   src: './assets/img/react.jpg',
    // }
    // this.slides[2] = {
    //   src: './assets/img/vue.jpg',
    // }
  }
}
