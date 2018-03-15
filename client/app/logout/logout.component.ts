import { Component, OnInit } from '@angular/core';
import { AuthService, AppGlobals } from '../shared/services';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private appGlobals: AppGlobals ) { }

  ngOnInit() {
    this.auth.logout();
    this.appGlobals.userInfo = {};
  }

}
