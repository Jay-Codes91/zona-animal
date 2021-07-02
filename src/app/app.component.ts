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
  ngOnInit() {

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
