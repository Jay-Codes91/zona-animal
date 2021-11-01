import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-anfibio',
  templateUrl: './anfibio.component.html',
  styleUrls: ['./anfibio.component.scss']
})
export class AnfibioComponent implements OnInit {

  anfibios: any = [];

  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) { 
    this.ruta.params.subscribe(pars => {
      this.anfibios = this.servicio.obtenerAnfibio(pars['id']);
    })
  }

  ngOnInit(): void {
  }

}
