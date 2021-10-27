import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-register';

  visibleLogin: boolean = true;
  visibleSignin: boolean = false;

  showLogin() {
    this.visibleLogin = !this.visibleLogin;
  }

  showSignin(){
    this.visibleSignin = !this.visibleSignin;
    this.visibleLogin = !this.visibleLogin;
  }
}
