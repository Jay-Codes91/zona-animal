import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-insectos',
  templateUrl: './insectos.component.html',
  styleUrls: ['./insectos.component.scss']
})
export class InsectosComponent implements OnInit {

  insectos: any[] = [];
  constructor(private servicio: DatosAnimalesService) {
      this.insectos = servicio.listaInsectos();
   }

  ngOnInit(): void {
  }

}
