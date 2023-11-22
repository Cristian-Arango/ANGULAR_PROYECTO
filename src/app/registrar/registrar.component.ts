import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(this.users.email=='' || this.users.username=='' || this.users.password==''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete Todos los Campos!",
      });
    }
    else{

    if(emailRegex.test(this.users.email)){
      if(this.users.password.length>8){ 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Envio Registrado",
          showConfirmButton: false,
          timer: 1500
        });
        this.usuariosRegistrados.push(this.users);

        // Guardar la lista actualizada en el local storage
        localStorage.setItem('users', JSON.stringify(this.usuariosRegistrados));
    
        // Limpiar los campos después de guardar los datos
        this.users = {
          email: '',
          username: '', 
          password: ''
        };
      

      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ingrese un Una contraseña de minimo 8 caracteres !",
        });
      }
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un Correo Valido!",
      });
    }
  }
   
  }

  click() {
    this.router.navigateByUrl("/");
  }
}
