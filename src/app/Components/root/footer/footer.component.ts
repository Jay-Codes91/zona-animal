import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  fecha = new Date();
  diaSemana = new Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado");
  meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre",
    "Octubre", "Noviembre", "Diciembre");
  dia;
  mes;
  fechaCompleta;

  constructor() { 
    this.dia = this.fecha.getDay();
    this.mes = this.fecha.getMonth();
    this.fechaCompleta = this.diaSemana[this.dia] + " " + this.fecha.getDate() + " de " + this.meses[this.mes] + ", " + this.fecha.getFullYear();
  }

  ngOnInit(): void {
  }

}
