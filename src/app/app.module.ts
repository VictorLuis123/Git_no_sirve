import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { Routes, RouterModule } from '@angular/router';

import { VistaConcursantesComponent } from './vista-concursantes/vista-concursantes.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '',component: LoginComponent},
  { path: 'participantes', component: VistaConcursantesComponent }, 
  // Agrega aquí otras rutas necesarias para tu aplicación
];


@NgModule({
  declarations: [
    AppComponent,
    VistaConcursantesComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  //exports: [RouterModule],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
