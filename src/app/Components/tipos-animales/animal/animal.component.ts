import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

 mamiferos:any = [];

  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) { 
   
    this.ruta.params.subscribe(pars => {
      this.mamiferos = this.servicio.obtenerMamifero(pars['id']);
    })

  }

 

  ngOnInit(): void {
  }

}
