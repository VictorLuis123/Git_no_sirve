import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  permitido_entrar:boolean=false;

  comprobarLoggin(nombre_equipo1:string, contrasenna1:string):any{
    return this.http.get<any>('http://localhost/Backend_David/validar_login.php', { params: { nombre_equipo: nombre_equipo1, contrasenna:contrasenna1 } });
  } 
  getData(){
    return this.http.get<any>('http://localhost/Backend_David/mostrar_concursantes.php');
  }
 }
