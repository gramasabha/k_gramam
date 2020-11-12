import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '@env/environment';

import { User } from '../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({});;
  private currentUser: Observable<User>;

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.get('currentUser').then((value) => {
      this.currentUserSubject.next(value);
    });
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public UserAsObservable(): Observable<User> {
    return this.currentUser
  }

}
