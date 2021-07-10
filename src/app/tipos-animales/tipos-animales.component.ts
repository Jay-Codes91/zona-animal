import { Component, OnInit } from '@angular/core';
declare var AOS: any;
@Component({
  selector: 'app-tipos-animales',
  templateUrl: './tipos-animales.component.html',
  styleUrls: ['./tipos-animales.component.scss']
})
export class TiposAnimalesComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 120,
	    delay: 300,
	    duration: 500,
	    easing: 'ease-in-out'
    });
  }

}
