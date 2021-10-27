import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-register';

  visibleLogin: boolean = true; //debe ser true
  visibleSignin: boolean = false; //debe ir en false

  login = {
    name: '',
    birthday: '',
    email: '',
    password: ''
  }

  signin = {
    email: '',
    password: ''
  }

  showLogin() {
    if(this.visibleSignin) {
      this.visibleSignin = false;
      this.visibleLogin = !this.visibleLogin;
    }
  }

  showSignin(){
    if (this.visibleLogin){
      this.visibleLogin = false;
      this.visibleSignin = !this.visibleSignin;
    }
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

  onSignin(){
    // console.log(this.login);
    alert("Te extrañamos 😞");
    this.signin = {
      email: '',
      password: ''
    }
  }
}
