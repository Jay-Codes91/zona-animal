import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-pez',
  templateUrl: './pez.component.html',
  styleUrls: ['./pez.component.scss']
})
export class PezComponent implements OnInit {

  peces: any = [];
  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) {
    this.ruta.params.subscribe(pars => {
      this.peces = this.servicio.obtenerPez(pars['id']);
    })
   }

  ngOnInit(): void {
  }

}
