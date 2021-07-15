import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DatosAnimalesService } from '../datos-animales.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['inicio', 'tipos-animales', 'informacion', 'tipos-animales/mamiferos'];
  input = "";
  dato = "";
  animales: any = [];

  constructor(private _servicio: DatosAnimalesService) { 
     this.animales = this._servicio.listaTodosAnimales();
  }

  ngOnInit(): void {
    
  }

  obtenerDato(ino:string){
     this.input = ino;
  }

}
