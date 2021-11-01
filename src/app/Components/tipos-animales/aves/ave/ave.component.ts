import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-ave',
  templateUrl: './ave.component.html',
  styleUrls: ['./ave.component.scss']
})
export class AveComponent implements OnInit {

  aves: any = [];

  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) { 
    this.ruta.params.subscribe(pars => {
      this.aves = this.servicio.obtenerAve(pars['id']);
    })
  }

  ngOnInit(): void {
  }

}
