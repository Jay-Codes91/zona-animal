import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-crustaceo',
  templateUrl: './crustaceo.component.html',
  styleUrls: ['./crustaceo.component.scss']
})
export class CrustaceoComponent implements OnInit {

  crustaceos: any = [];

  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) { 
    this.ruta.params.subscribe(pars => {
      this.crustaceos = this.servicio.obtenerCrustaceo(pars['id']);
    })
  }

  ngOnInit(): void {
  }

}
