import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private servicio:DataserviceService){}

  puedeEntrar(){
    return this.servicio.permitido_entrar;
  }
  hacerFalso(){
    this.servicio.permitido_entrar=false;
  }

  
}
