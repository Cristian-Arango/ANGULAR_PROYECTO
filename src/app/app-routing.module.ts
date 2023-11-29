import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DasboardAdminComponent } from './dasboard-admin/dasboard-admin.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { OfertasadminComponent } from './ofertasadmin/ofertasadmin.component';

const routes: Routes = [
  {path :'', component:LoginComponent},
  {path :'registrar', component:RegistrarComponent},
  {path :'dashborar', component:DashboardComponent},
  {path :'dashborarAdmin', component:DasboardAdminComponent},
  {path :'ofertas', component:OfertasComponent},
  {path :'ofertasadmin', component:OfertasadminComponent},





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
