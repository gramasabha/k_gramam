import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-ividinganalla',
  templateUrl: './ividinganalla.component.html',
  styleUrls: ['./ividinganalla.component.scss'],
})
export class IvidinganallaComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  count = Math.floor((Date.now() - 1604643929025) / 10000);
}
