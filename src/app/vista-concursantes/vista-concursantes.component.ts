import { Component,OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vista-concursantes',
  templateUrl: './vista-concursantes.component.html',
  styleUrls: ['./vista-concursantes.component.css']
})
export class VistaConcursantesComponent implements OnInit {
  constructor(private dataService:DataserviceService, private router: Router) { }

  elementos:any[]=[]
  atributos:any[]=[]
  ngOnInit():void{
    this.dataService.getData().subscribe((data:any) => {
      data.forEach((item:any) => {
        this.atributos=Object.keys(item);
        this.elementos.push(item);
      });
    });
  }
  
}
