import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/datos-animales.service';
@Component({
  selector: 'app-reptiles',
  templateUrl: './reptiles.component.html',
  styleUrls: ['./reptiles.component.scss']
})
export class ReptilesComponent implements OnInit {

  reptiles: any[] = [];

  constructor(private servicio: DatosAnimalesService) {
    this.reptiles = servicio.listaReptiles();
   }

  ngOnInit(): void {
  }

}
