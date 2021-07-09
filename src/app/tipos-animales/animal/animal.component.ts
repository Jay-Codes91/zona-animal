import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAnimalesService } from 'src/app/datos-animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

 mamiferos:any[] = [];

  constructor(private servicio: DatosAnimalesService, private ruta: ActivatedRoute) { 
   
    
  }

 

  ngOnInit(): void {
  }

}
