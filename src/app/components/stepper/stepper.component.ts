import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Tip } from '@shared/models';
import { TipsService } from '@shared/services';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit, OnDestroy {
  tips: Tip[];
  slideOpts = {
    speed: 400,
    autoplay: { delay: 60000 },
    direction: 'horizontal'
  };

  @ViewChild('player') player;

  url: string;
  showSkip = true;

  private subscription: Subscription = new Subscription();

  constructor(public router: Router, public storage: Storage,
    private tipsService: TipsService) { }

  ngOnInit() {
    let url = this.tipsService.currentTipValue;
    if (!url) {
      let { queryParams } = this.router.parseUrl(this.router.url);
      if (queryParams && queryParams.retUrl) {
        url = queryParams.retUrl;
      }
    }
    this.tipsService.getTipByKey(url).subscribe((tip) => {
      if (tip) {
        if (Array.isArray(tip)) {
          this.tips = tip;
        }
        else {
          this.tips = [tip]
        }
      }
      this.url = url;
    });
    this.subscription.add(timer(360000).subscribe(val => { this.skipTip() }));

  }
  ngAfterViewInit() {
    this.player.startAutoplay();
  }

  imageLinks = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/200'
  ]

  skipTip() {
    this.router
      .navigateByUrl(this.url, { replaceUrl: true })
      .then(() => this.storage.set('tips_shown', true));
  }

  async goPrev() {
    let beginning = await this.player.isBeginning();
    if (beginning) {
      // this.skipTip();
      let items = await this.player.length();
      this.player.slideTo(items);
    }
    else {
      this.player.slidePrev();
    }
  }
  async goNext() {
    let end = await this.player.isEnd();
    if (end) {
      this.skipTip();
    }
    else {
      this.player.slideNext();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
