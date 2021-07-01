import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Proyecto';
  center = "text-center";
  ngOnInit(){
    /*$("h1").text("Titulo");
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";*/
  }

  
}
