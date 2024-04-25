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

  insertarEquipoRequest(datos_equipo:{nombre_equipo:string, contrasenna_equipo:string,nombre_p1:string,id_p1:number,edad_p1:number, sexo_p1:string, pais_p1:string, nombre_p2:string,id_p2:number,edad_p2:number, sexo_p2:string, pais_p2:string,  nombre_p3:string,id_p3:number,edad_p3:number, sexo_p3:string, pais_p3:string}){
    return this.http.get<any>('http://localhost/Backend_David/Ingresar_equipo.php', { params: { nombre_equipo: datos_equipo.nombre_equipo,
    contrasenna_equipo:datos_equipo.contrasenna_equipo,
    nombre_p1:datos_equipo.nombre_p1 ,
    id_p1:datos_equipo.nombre_p1,
    edad_p1:datos_equipo.edad_p1,
    sexo_p1:datos_equipo.sexo_p1, 
    pais_p1:datos_equipo.pais_p1, 
    nombre_p2:datos_equipo.nombre_p2,
    id_p2:datos_equipo.id_p2,
    edad_p2:datos_equipo.edad_p2,
    sexo_p2:datos_equipo.sexo_p2, 
    pais_p2:datos_equipo.pais_p2,  
    nombre_p3:datos_equipo.nombre_p3,
    id_p3:datos_equipo.id_p3,
    edad_p3:datos_equipo.edad_p3,
    sexo_p3:datos_equipo.sexo_p3, 
    pais_p3:datos_equipo.pais_p3} })

  }
  
 }
