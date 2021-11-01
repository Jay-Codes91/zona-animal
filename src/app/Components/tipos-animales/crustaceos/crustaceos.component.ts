import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';

@Component({
  selector: 'app-crustaceos',
  templateUrl: './crustaceos.component.html',
  styleUrls: ['./crustaceos.component.scss']
})
export class CrustaceosComponent implements OnInit {

  crustaceos: any[] = [];

  constructor(private servicio: DatosAnimalesService) { 
    this.crustaceos = servicio.listaCrustaceos();
  }

  ngOnInit(): void {
  }

}
