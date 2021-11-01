import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';
declare var $:any;
@Component({
  selector: 'app-reptiles',
  templateUrl: './reptiles.component.html',
  styleUrls: ['./reptiles.component.scss']
})
export class ReptilesComponent implements OnInit {

  reptiles: any[] = [];
  mostrarInfo: boolean = true;
  
  constructor(private servicio: DatosAnimalesService) {
    this.reptiles = servicio.listaReptiles();
   }

  ngOnInit(): void {
    
  }

  

}
