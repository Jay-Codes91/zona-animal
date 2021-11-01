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

  constructor() {}

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

  }//ngOnInit


}
