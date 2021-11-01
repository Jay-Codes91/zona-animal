import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-anfibios',
  templateUrl: './anfibios.component.html',
  styleUrls: ['./anfibios.component.scss']
})
export class AnfibiosComponent implements OnInit {

  anfibios: any[] = [];

  constructor(private servicio: DatosAnimalesService) {
     this.anfibios = servicio.listaAnfibios();
   }

  ngOnInit(): void {
  }

}
