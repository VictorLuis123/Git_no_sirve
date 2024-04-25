import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dataservice:DataserviceService,private router: Router){}
  submitFormTeam(team_data:{nombre:string, contrasenna:string}){
    console.log(team_data.nombre)
    console.log(team_data.contrasenna)

    this.dataservice.comprobarLoggin(team_data.nombre,team_data.contrasenna).subscribe(
      (response:any) => {
        console.log(response);
        if(response[0].mensaje=='existe'){
        alert('Puede entrar al sistema');
         this.navigateToVistaConcursante();
        }else{
        alert('No puedesss')

       }
      }
    );
  }

  navigateToVistaConcursante():void{
    console.log('si entraaaaaa')
       this.router.navigate(['/vista_concursante'])


  }
}
