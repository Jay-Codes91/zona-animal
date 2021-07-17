import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Proyecto';
  center = "text-center";

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
    this.fechaCompleta = this.diaSemana[this.dia] + " " + this.fecha.getDate() + " de " + this.meses[this.mes] + " del " + this.fecha.getFullYear();
  }
  ngOnInit() {
    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";

    $("#menuAnimales").hide();
    $("#menuAnimales2").hide();

    $("#navegacion > li:nth-child(2)").hover(function () {

      $("#menuAnimales").show();
    }, function () {
      $("#menuAnimales").hide();
    }

    );//Hover

    $("#navegacion-2 > li:nth-child(2)").hover(function () {

      $("#menuAnimales2").show();
    }, function () {
      $("#menuAnimales2").hide();
    }

    );//Hover

    $("#navOculto").css("left", "-100%");

    $("#encabezado > #btnMenu").click(function () {
      $("#navOculto").animate({
        left: "0"
      })

      $("#navOculto > #header2 > .cerrar2").click(function () {
        $("#navOculto").animate({
          left: "-100%"
        })

      });

    });



  }//ngOnInit


}
