import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  constructor(public router: Router) {}

  usuariosRegistrados: any[] = [];
  users: any = {
    email: '',
    username: '',
    password: ''
  };

  guardarDatosLocalStorage() {
    // Agregar el nuevo usuario a la lista de usuarios registrados
    this.usuariosRegistrados.push(this.users);

    // Guardar la lista actualizada en el local storage
    localStorage.setItem('users', JSON.stringify(this.usuariosRegistrados));

    // Limpiar los campos después de guardar los datos
    this.users = {
      email: '',
      username: '',
      password: ''
    };
  }

  click() {
    console.log("¡Hola!");
    this.router.navigateByUrl("/");
  }
}
