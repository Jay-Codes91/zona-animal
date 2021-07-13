import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/datos-animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

 mamiferos:any = [];
 aves: any = [];
 reptiles: any = [];
 insectos: any = [];
 peces: any = [];

  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) { 
   
    this.ruta.params.subscribe(pars => {
      this.mamiferos = this.servicio.obtenerMamifero(pars['id']);
    })

    this.ruta.params.subscribe(pars => {
      this.aves = this.servicio.obtenerAve(pars['id']);
    })

    this.ruta.params.subscribe(pars => {
      this.reptiles = this.servicio.obtenerReptile(pars['id']);
    })

    this.ruta.params.subscribe(pars => {
      this.insectos = this.servicio.obtenerInsecto(pars['id']);
    })

    this.ruta.params.subscribe(pars => {
      this.peces = this.servicio.obtenerPez(pars['id']);
    })
  }

 

  ngOnInit(): void {
  }

}
