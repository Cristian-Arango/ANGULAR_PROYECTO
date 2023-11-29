import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ofertasadmin',
  templateUrl: './ofertasadmin.component.html',
  styleUrls: ['./ofertasadmin.component.css']
})
export class OfertasadminComponent {
  constructor(public router: Router) {}

  ofertas: any[] = [];

  oferts: any = {
    name:'',
    Vacantes:'',
    descripcion:'',
    Logo: '',
  };
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      // Aquí podrías realizar operaciones con el archivo, como cargarlo a un servicio o
      // convertirlo a una representación de datos que puedas asignar a this.oferts.Logo
      // Por ejemplo, para mostrar la imagen directamente en la interfaz:
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.oferts.Logo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  guardarDatosLocalStorage() {
    // Obtener ofertas existentes del LocalStorage
    const ofertasGuardadas = localStorage.getItem('ofertas');

    if (ofertasGuardadas) {
      // Si hay ofertas existentes, cargarlas en this.ofertas
      this.ofertas = JSON.parse(ofertasGuardadas);
    }

    // Agregar la nueva oferta a this.ofertas
    this.ofertas.push(this.oferts);

    // Guardar todas las ofertas (existentes y nuevas) en el LocalStorage
    localStorage.setItem('ofertas', JSON.stringify(this.ofertas));

    // Limpiar los campos después de guardar los datos
    this.oferts = {
      name:'',
      Vacantes:'',
      descripcion:'',
      Logo: '',
    };
  }

  click() {
    this.router.navigateByUrl("/");
  }
}
