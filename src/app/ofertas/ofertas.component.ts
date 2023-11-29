import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  ofertas: any[] = []; // Define la propiedad ofertas

  constructor(public router: Router) {}

  ngOnInit() {
    // Obtener datos del LocalStorage
    const ofertasString = localStorage.getItem('ofertas');
  
    if (ofertasString) {
      // Convertir los datos a objetos utilizables y asignarlos a this.ofertas
      this.ofertas = JSON.parse(ofertasString);
      
      // Ahora 'ofertas' contiene los datos recuperados del LocalStorage y puedes utilizarlos como desees
      console.log(this.ofertas);
    }
  }


  volverdasboard(){
    this.router.navigateByUrl("/dashborar")
  }
   

}

