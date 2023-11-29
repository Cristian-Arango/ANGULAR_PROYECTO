import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router){

  }

  llamardatos(){
    const usuariollogged=localStorage.getItem('usuactual');
    console.log(usuariollogged);
    
  }

  clic(){
    console.log("helou");
    this.router.navigateByUrl("/")
  }
  ofertas(){
    this.router.navigateByUrl("/ofertas")
  }

}

