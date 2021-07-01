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

    $("#navegacion > li:nth-child(2)").hover(function () {

      $("#menuAnimales").show();
    }, function () {
      $("#menuAnimales").hide();
    }

    );//Hover
  
  
  }//ngOnInit


}
