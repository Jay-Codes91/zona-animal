import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina404',
  templateUrl: './pagina404.component.html',
  styleUrls: ['./pagina404.component.scss']
})
export class Pagina404Component implements OnInit {

  mensajePantalla = "Página no encontrada";
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
