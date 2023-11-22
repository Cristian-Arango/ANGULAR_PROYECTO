import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginData: any = {
    username: '',
    password: ''
  };

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user: any) => user.username === this.loginData.username && user.password === this.loginData.password);

    if(this.loginData.username=='' || this.loginData.password==''){
      Swal.fire({
        icon: "error",
        title: "Algo Salio MAL...",
        text: "Tiene Que ingresar Datos",
      });
    }
    else{


    if (foundUser) {
      Swal.fire({ 
        title: `Bienvenido! ${this.loginData.username}`,
        text: "Sus credenciales son correctas!",
        icon: "success"
      });
     this.router.navigateByUrl("/dashborar")
    }
    else{
      if(this.loginData.username=="Admin" && this.loginData.password=="12345"){
        Swal.fire("Tiene Acceso al panel de Admin, Bienvenido!");
         this.router.navigateByUrl("/dashborarAdmin")

      
      } else {
      Swal.fire({
        title: "Datos erroneos?",
        text: "Tiene que registrarse!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Registrarse"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl("/registrar")

        }
      });
      }
  }
  }
}
   

clic(){
  console.log("helou");
  this.router.navigateByUrl("/registrar")
  
}
}
