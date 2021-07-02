import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DatosAnimalesService {

prueba: string = "Prueba del servicio";

  constructor() { 
   
  }

  Mamiferos:any = [
     {
       id: 1,
       nombre: "Elefante",
       IMG: "https://cdn.pixabay.com/photo/2013/05/29/22/25/elephant-114543_960_720.jpg"
     },
     {
       id:2,
       nombre: "Perro Pastor Alemán",
       IMG: "https://cdn.pixabay.com/photo/2019/03/23/05/15/schafer-dog-4074699_960_720.jpg"
     },
     {
       id:3,
       nombre: "Gato Atigrado",
       IMG: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg"
     }
  ]

  Aves:any = [

  ]

  Reptiles:any = [

  ]

  Peces:any = [

  ]

  Insectos:any = [

  ]

  listaMamiferos(){
    return this.Mamiferos;

  }


   
}
