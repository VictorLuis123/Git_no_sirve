import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent {
  
  constructor(private dataservice:DataserviceService,private router: Router){}

  insertTeam(datos_equipo:{nombre_equipo:string, contrasenna_equipo:string,nombre_p1:string,id_p1:number,edad_p1:number, sexo_p1:string, pais_p1:string, nombre_p2:string,id_p2:number,edad_p2:number, sexo_p2:string, pais_p2:string,  nombre_p3:string,id_p3:number,edad_p3:number, sexo_p3:string, pais_p3:string}){
    this.dataservice.insertarEquipoRequest(datos_equipo).subscribe();

    // this.dataservice.comprobarLoggin(team_data.nombre,team_data.contrasenna).subscribe(
    //   (response:any) => {
    //     console.log(response);
    //     if(response[0].mensaje=='existe'){
    //     alert('Puede entrar al sistema');
    //     this.dataservice.permitido_entrar=true;  
    //     this.navigateToVistaConcursante();
    //     }else{
    //     alert('No puedesss')
    //    }
    //   }
    // );
  }

}
