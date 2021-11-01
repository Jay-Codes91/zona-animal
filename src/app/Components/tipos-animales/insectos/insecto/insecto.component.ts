import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-insecto',
  templateUrl: './insecto.component.html',
  styleUrls: ['./insecto.component.scss']
})
export class InsectoComponent implements OnInit {

  insectos: any = [];
  
  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) {
    this.ruta.params.subscribe(pars => {
      this.insectos = this.servicio.obtenerInsecto(pars['id']);
    })
   }

  ngOnInit(): void {
  }

}
