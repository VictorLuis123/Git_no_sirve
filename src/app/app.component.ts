import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private dataservice:DataserviceService){}

  submitFormTeam(team_data:{nombre:string, contrasenna:string}){
    console.log(team_data.nombre)
    console.log(team_data.contrasenna)

    this.dataservice.comprobarLoggin(team_data.nombre,team_data.contrasenna).subscribe(
      (response:any) => {
        console.log(response);
        alert('Puede entrar al sistema');
       },
       (error: any) =>{
        alert('No puedessss');
       }
    );
  }
}
