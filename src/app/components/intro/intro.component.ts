import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit, AfterViewInit {

  test = false
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.test = true;
    }, 3000)
  }

}
