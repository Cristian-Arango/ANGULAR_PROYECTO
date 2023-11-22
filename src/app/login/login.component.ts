import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginData: any = {
    email: '',
    password: ''
  };

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user: any) => user.email === this.loginData.email && user.password === this.loginData.password);

    if (foundUser) {
      // Usuario válido, redirigir a otra página (por ejemplo, la página de inicio)
    console.log(`hola ${this.loginData.email}`);
    this.router.navigateByUrl("/dashborar")}
    if(this.loginData.email=="Admin" && this.loginData.password=="12345"){
      alert("Tiene Acceso al panel de Admin, Bienvenido")
      this.router.navigateByUrl("/dashborarAdmin")

    
    } else {
      // Usuario inválido, manejar el error o mostrar un mensaje al usuario
      alert('Credenciales inválidas');
    }
  }

clic(){
  console.log("helou");
  this.router.navigateByUrl("/registrar")
  
}
}
