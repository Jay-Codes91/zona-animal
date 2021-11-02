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

  mamiferos: any[] = [];
  todosAnimales: any[] = [];
  //Solución temporal de los arreglos
  animalesAleatorios: number[] = [];
  animalesAleatorios2: number[] = [];
  animalesAleatorios3: number[] = [];
  animalesAleatorios4: number[] = [];

  animalesCarousel: number[] = [];
  animalesCarousel2: number[] = [];
  animalesCarousel3: number[] = [];
  animalesCarousel4: number[] = [];
  animalesCarousel5: number[] = [];

  min: number;
  max: number;

  constructor(private servicio: DatosAnimalesService) { 
    this.mamiferos = servicio.listaMamiferos();
    this.todosAnimales = servicio.listaTodosAnimales();
    this.min = 1;
    this.max = this.todosAnimales.length;
    this.animalesAleatorios.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
    this.animalesAleatorios2.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
    this.animalesAleatorios3.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
    this.animalesAleatorios4.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));

    this.animalesCarousel.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
    this.animalesCarousel2.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
    this.animalesCarousel3.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
    this.animalesCarousel4.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
    this.animalesCarousel5.push(Math.floor(Math.random() * ((this.max +1)- this.min) + this.min));
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
