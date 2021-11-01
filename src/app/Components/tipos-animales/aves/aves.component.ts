import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-aves',
  templateUrl: './aves.component.html',
  styleUrls: ['./aves.component.scss']
})
export class AvesComponent implements OnInit {

  aves: any[] = [];
  constructor(private servicio: DatosAnimalesService) { 
    this.aves = servicio.listaAves();
  }

  ngOnInit(): void {
  }

}
