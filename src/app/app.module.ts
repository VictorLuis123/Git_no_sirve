import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { VistaConcursantesComponent } from './vista-concursantes/vista-concursantes.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',component: AppComponent},
  { path: 'vista_concursante', component: VistaConcursantesComponent }, 
  // Agrega aquí otras rutas necesarias para tu aplicación
];


@NgModule({
  declarations: [
    AppComponent,
    VistaConcursantesComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
