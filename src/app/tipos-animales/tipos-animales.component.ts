import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/datos-animales.service';

declare var AOS: any;
@Component({
  selector: 'app-tipos-animales',
  templateUrl: './tipos-animales.component.html',
  styleUrls: ['./tipos-animales.component.scss']
})
export class TiposAnimalesComponent implements OnInit {

 animales: any[] = [];
 mamiferos: any[] = [];
  constructor(private servicio: DatosAnimalesService) { 
     this.animales = this.servicio.listaDescripcionEspecies();
     this.mamiferos = this.servicio.listaMamiferos();
  }


  ngOnInit(): void {}

}
