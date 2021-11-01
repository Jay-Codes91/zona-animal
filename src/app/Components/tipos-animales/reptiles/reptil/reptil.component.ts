import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-reptil',
  templateUrl: './reptil.component.html',
  styleUrls: ['./reptil.component.scss']
})
export class ReptilComponent implements OnInit {

  reptiles: any = [];
  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) { 
    this.ruta.params.subscribe(pars => {
      this.reptiles = this.servicio.obtenerReptile(pars['id']);
    })
  }

  ngOnInit(): void {
  }

}
