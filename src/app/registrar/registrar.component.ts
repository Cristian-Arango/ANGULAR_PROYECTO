import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  constructor(
    public router:Router
    ){
  
    }
  
    // Variables para almacenar los datos del formulario
    email: string = '';
    username: string = '';
    password: string = '';
  
    local() {
      // Guardar los datos en el localStorage
      const userData = {
        email: this.email,
        username: this.username,
        password: this.password
      };
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  
  clicK(){
    console.log("helou");
    this.router.navigateByUrl("/")
   }  
}

