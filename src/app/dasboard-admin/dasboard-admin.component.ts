import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard-admin',
  templateUrl: './dasboard-admin.component.html',
  styleUrls: ['./dasboard-admin.component.css']
})
export class DasboardAdminComponent {

  
  constructor(private router:Router){

  }

  clic(){
    console.log("helou");
    this.router.navigateByUrl("/")
  }
}
