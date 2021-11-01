import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from '../../Services/datos-animales.service';


declare var $: any;
declare var AOS: any;
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


  ngOnInit(): void {
    AOS.init({
      offset: 120,
	    delay: 300,
	    duration: 500,
	    easing: 'ease-in-out'
    });
  }

}
