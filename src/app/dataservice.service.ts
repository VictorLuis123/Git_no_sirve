import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  // getData(tableName: string):any{
  //   return this.http.get<any>('http://localhost/BackendEtecsa/show_tables.php', { params: { nombre_tabla: tableName } });
  // } 

}
