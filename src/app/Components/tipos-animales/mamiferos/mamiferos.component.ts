import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-mamiferos',
  templateUrl: './mamiferos.component.html',
  styleUrls: ['./mamiferos.component.scss']
})
export class MamiferosComponent implements OnInit {

  mamiferos: any[] = [];
  
  constructor(private servicio: DatosAnimalesService) {
      this.mamiferos = servicio.listaMamiferos();
   }

  ngOnInit(): void {
  }

}
