import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  unReadCount = 0;
  $msgSub: Observable<number>;
  showSearchbar = false;
  ios = false;
  queryText = '';

  constructor(private dataService: DataService, private platform: Platform) { }

  ngOnInit() {
    this.$msgSub = this.dataService.messageCount;

    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        // console.log('android');
      } else if (this.platform.is('ios')) {
        // console.log('ios');
        this.ios = true;
      } else {
        //fallback to browser APIs or
        // console.log('The platform is not supported');
      }
    });
  }

  updateSchedule() { }
}
