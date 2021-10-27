import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-register';

  visibleLogin: boolean = true;
  visibleSignin: boolean = false; //debe ir en false

  login = {
    name: '',
    birthday: '',
    email: '',
    password: ''
  }

  signin = {
    email: '',
    pasword: ''
  }

  showLogin() {
    this.visibleLogin = !this.visibleLogin;
  }

  showSignin(){
    this.visibleSignin = !this.visibleSignin;
    this.visibleLogin = !this.visibleLogin;
  }

  onLogin(){
    // console.log(this.login);
    alert("Registrado. ¡Ya puedes iniciar sesion!");
    this.login = {
      name: '',
      birthday: '',
      email: '',
      password: ''
    }
  }
}
