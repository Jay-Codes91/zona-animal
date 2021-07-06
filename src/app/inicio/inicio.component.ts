import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from '../datos-animales.service';
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  mensaje: string = "";
  mamiferos: any[] = [];
  todosAnimales: any[] = [];

  constructor(private servicio: DatosAnimalesService) { 
    this.mensaje = servicio.prueba;
    this.mamiferos = servicio.listaMamiferos();
    this.todosAnimales = servicio.listaTodosAnimales();

  }


  ngOnInit(): void {}

}
