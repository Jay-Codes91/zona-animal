import { Component, OnInit } from '@angular/core';
declare var alertify: any;


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {


  ngOnInit(): void {
  
  }

  mensaje(){
    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";
    alertify.alert("Alerta");
   
  }


}
