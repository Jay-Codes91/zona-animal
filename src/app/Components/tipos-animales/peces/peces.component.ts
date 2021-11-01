import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';
@Component({
  selector: 'app-peces',
  templateUrl: './peces.component.html',
  styleUrls: ['./peces.component.scss']
})
export class PecesComponent implements OnInit {

  peces: any[] = [];
  constructor(private servicio: DatosAnimalesService) { 
     this.peces = servicio.listaPeces();
  }

  ngOnInit(): void {
  }

}
