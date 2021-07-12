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
 aves: any[] = [];
 reptiles:any[] = [];
 insectos:any[] = [];
 peces:any[] = [];

  constructor(private servicio: DatosAnimalesService) { 
     this.animales = this.servicio.listaDescripcionEspecies();
     this.mamiferos = this.servicio.listaMamiferos();
     this.aves = this.servicio.listaAves();
     this.reptiles = this.servicio.listaReptiles();
     this.insectos = this.servicio.listaInsectos();
     this.peces = this.servicio.listaPeces();
  }


  ngOnInit(): void {}

}
