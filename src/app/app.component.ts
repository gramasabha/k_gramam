import { Component, OnInit } from '@angular/core';

import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService, TipsService } from './@shared/services';
import { Observable, Subscription } from 'rxjs';
import { Tip, User } from './@shared/models';
import { AnonymousModal } from './modals/anonymous.modal';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex;

  loggedIn = true;
  dark = false;

  public appPages = [
    {
      title: 'അറിയിപ്പുകൾ',
      url: '/ente/gramam/messages',
      icon: 'mail'
    },
    {
      url: '/ente/gramam/meetings',
      icon: 'calendar',
      title: 'ഗ്രാമസഭ '
    },
    {
      url: '/ente/gramam/projects',
      icon: 'people',
      title: 'പദ്ധതികൾ '
    },
    {
      url: '/ente/gramam/articles',
      icon: 'information-circle',
      title: 'രേഖകൾ'
    }
  ];
  public labels = ['ദേശീയം', 'സംസ്ഥാനം', 'ജില്ല', 'ബ്ലോക്ക്', 'ഗ്രാമം', 'വാർഡ്'];
  name: string;
  $currentUser: Observable<User>;
  $anonymousTip: Subscription;
  modelData: Tip;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    public modalController: ModalController,
    private tipsService: TipsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.$currentUser = this.authService.UserAsObservable();
    this.$anonymousTip = this.tipsService.getTipByKey('anonymous').subscribe(data => this.modelData = data);

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AnonymousModal,
      cssClass: 'my-custom-class',
      componentProps: this.modelData
    });
    return await modal.present();
  }

  strangeFriend() {
    if (this.dark) {
      this.presentModal();
    }
  }
}

