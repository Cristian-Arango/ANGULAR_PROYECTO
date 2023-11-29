import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DasboardAdminComponent } from './dasboard-admin/dasboard-admin.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { OfertasadminComponent } from './ofertasadmin/ofertasadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    DashboardComponent,
    DasboardAdminComponent,
    OfertasComponent,
    OfertasadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
