import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

declare var AOS: any;
declare var alertify: any;

@Component({
  selector: 'app-tipos-animales',
  templateUrl: './tipos-animales.component.html',
  styleUrls: ['./tipos-animales.component.scss']
})
export class TiposAnimalesComponent implements OnInit {

  animales: any[] = [];
  mamiferos: any[] = [];
  aves: any[] = [];
  reptiles: any[] = [];
  insectos: any[] = [];
  peces: any[] = [];
  anfibios: any[] = [];
  crustaceos: any[] = [];
  todosAnimales: any[] = [];
  buscar = '';
  mostrarContenido: boolean = false;

  constructor(private servicio: DatosAnimalesService) {
    this.animales = this.servicio.listaDescripcionEspecies();
    this.mamiferos = this.servicio.listaMamiferos();
    this.aves = this.servicio.listaAves();
    this.reptiles = this.servicio.listaReptiles();
    this.insectos = this.servicio.listaInsectos();
    this.peces = this.servicio.listaPeces();
    this.anfibios = this.servicio.listaAnfibios();
    this.crustaceos = this.servicio.listaCrustaceos();
    this.todosAnimales = this.servicio.listaTodosAnimales();
  }

  ngOnInit(): void {
    alertify.defaults.transition = "zoom";
  }

  descripcion(titulo: string, desc: string) {
    alertify.alert(titulo, desc)
  }

}
