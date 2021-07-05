import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DatosAnimalesService {

prueba: string = "Prueba del servicio";

  constructor() { 
   
  }

  Mamiferos = new Array(
    {
      id: 1,
      nombre: "Elefante",
      nombreCientifico: "Elephantidae",
      clase: "Mamífero",
      descripcion: "Es el mamífero terrestre más grande. Pueden llegar a pesar más de 7 mil kilos y aunque en promedio suelen medir tres metros de altura. Algunos elefantes llegan a vivir 90 años. Son capaces de comunicarse a través de vibraciones en el suelo.",
      IMG: "https://cdn.pixabay.com/photo/2013/05/29/22/25/elephant-114543_960_720.jpg"
    },
    {
      id:2,
      nombre: "Perro Pastor Alemán",
      nombreCientifico: "Canis familiaris",
      clase: "Mamífero",
      descripcion: "Es una raza canina que proviene de Alemania. La raza es relativamente nueva, ya que su origen se remonta a 1899. Forman parte del grupo de pastoreo, ya que fueron perros desarrollados originalmente para reunir y vigilar ovejas. Desde entonces, sin embargo, gracias a su fuerza, inteligencia, capacidad de entrenamiento y obediencia,​ los pastores alemanes de todo el mundo son a menudo la raza preferida para muchos otros tipos de trabajo, como son: perro policía, perro guardián, guía de ciegos, animal de rescate, y otros, según el uso que le den las fuerzas y cuerpos de seguridad y el ejército. En muchos países incluso cuentan con unidades específicas denominadas K-9",
      IMG: "https://cdn.pixabay.com/photo/2019/03/23/05/15/schafer-dog-4074699_960_720.jpg"
    },
    {
      id:3,
      nombre: "Gato Atigrado",
      nombreCientifico: "Felis silvestris catus",
      clase: "Mamífero",
      descripcion: "Es un gato con un distintivo pelaje de rayas y manchas características. Los gatos atigrados a menudo son, erróneamente, confundidos con una raza de gato pero solo son una variedad de color; de hecho, el patrón que posee el atigrado es una característica que ocurre naturalmente y que podría ser la original coloración de los distantes ancestros de los gatos domésticos",
      IMG: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg"
    }
  );

  Aves = new Array(
    {
      id:11,
      nombre: "Lechuza",
      nombreCientifico: "",
      clase: "Aves",
      descripcion: "De tamaño mediano, con cuerpo alargado y cabeza voluminosa libre de penachos, luce un acolchado y tupido plumaje de color pardo anaranjado en el dorso, con tonos grises y finamente punteado de blanco y negro. Las partes inferiores son de un blanco puro o anaranjado (dependiendo de la fase) con pecas negras.",
      IMG: "https://cdn.pixabay.com/photo/2018/07/09/19/07/eastern-screech-owl-3526934_960_720.jpg"
    },
    {
      id:12,
      nombre: "Gallina",
      nombreCientifico: "Gallus gallus domesticus",
      clase: "Aves",
      descripcion: "Los nombres comunes son: gallo, para el macho; gallina, para la hembra, y pollo, para los subadultos. Es el ave más numerosa del planeta, pues se calcula que el número de ejemplares supera los dieciséis mil millones. Los gallos y gallinas se crían principalmente por su carne y por sus huevos. También se aprovechan sus plumas y algunas variedades se crían y entrenan para su uso en peleas de gallos y como aves ornamentales.",
      IMG: "https://cdn.pixabay.com/photo/2018/10/05/23/24/chicken-3727097_960_720.jpg"
    },
    {
      id:13,
      nombre: "Pato",
      nombreCientifico: "",
      clase: "Aves",
      descripcion: "Pato es el nombre común para ciertas aves de la familia Anatidae, principalmente de la subfamilia Anatinae y dentro de ella del género Anas. No son un grupo monofilético, ya que no se incluyen los cisnes ni los gansos.",
      IMG: "https://cdn.pixabay.com/photo/2013/04/22/20/02/ruddy-shelduck-106544_960_720.jpg"
    }
  );

  Reptiles = new Array(
    {
      id:21,
      nombre: "Cobra India",
      nombreCientifico: "Naja Naja",
      clase: "Reptiles",
      descripcion: "Es una especie de serpiente venenosa originaria del Subcontinente indio. Como otras cobras, la cobra de anteojos es famosa por el capuchón que despliega alrededor de su cabeza cuando se encuentra excitada o amenazada. En la parte de atrás del capuchón tiene dos manchas negras unidas por una línea curva, que da la impresión de ser unos anteojos",
      IMG: "https://cdn.pixabay.com/photo/2017/09/14/15/43/snake-2749383_960_720.jpg"
    },
    {
      id:22,
      nombre: "Caimán",
      nombreCientifico: "Caiman",
      clase: "Reptiles",
      descripcion: "Es un género de cocodrilos de la familia de los aligatóridos, conocidos vulgarmente como caimanes o yacarés. Se distribuyen en las regiones subtropicales y tropicales de América, desde Florida hasta el sur de Sudamérica.",
      IMG: "https://cdn.pixabay.com/photo/2016/08/09/05/15/alligator-1579916_960_720.jpg"
    },
    {
      id:23,
      nombre: "Iguana",
      nombreCientifico: "Iguanidae",
      clase: "Reptiles",
      descripcion: "La iguana verde (Iguana iguana) es uno de los lagartos más grandes de América; pueden crecer hasta alcanzar los 2 metros de largo y pesan alrededor de 5 kilogramos. Además, también son mascotas bastante comunes en Estados Unidos, a pesar del hecho de que son un poco difíciles de cuidar y mantener.",
      IMG: "https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719_960_720.jpg"
    }
  );

  Peces = new Array(
    {
      id:31,
      nombre: "Barbo Rosado",
      nombreCientifico: "",
      clase: "Peces",
      descripcion: "",
      IMG: ""
    },
    {
      id:32,
      nombre: "Gurami Enano",
      nombreCientifico: "Osphronemidae",
      clase: "Peces",
      descripcion: "",
      IMG: "https://cdn.pixabay.com/photo/2020/09/25/19/03/fish-5602367_960_720.jpg"
    },
    {
      id:33,
      nombre: "Guppies",
      nombreCientifico: "Poecillia reticulata",
      clase: "Peces",
      descripcion: "",
      IMG: "https://cdn.pixabay.com/photo/2019/08/30/01/24/water-tank-4440191_960_720.jpg"
    }
  );

  Insectos = new Array(
    {
      id:11,
      nombre: "Cucaracha",
      nombreCientifico: "Blattodea",
      clase: "Insecto",
      descripcion: "Se conocen más de 4500 especies de cucarachas en cerca de 500 géneros. uelen ser de color castaño, rojo u oscuro y de cuerpo aplanado. Algunas especies tienen colores llamativos.",
      IMG: "https://cdn.pixabay.com/photo/2014/12/13/15/38/cockroach-566712_960_720.jpg"
    },
    {
      id:11,
      nombre: "Grillo",
      nombreCientifico: "Grylladae",
      clase: "Insecto",
      descripcion: "Los grillos están emparentados con las Acrididae (saltamontes). Sus patas están adaptadas al salto, sin embargo saltan menos que los saltamontes, lo que los hace más torpes. En cambio, corren por el suelo con rapidez. Excavan una madriguera en el suelo, que consiste en una galería de más de medio metro, y que termina en una habitación esférica.",
      IMG: "https://cdn.pixabay.com/photo/2014/03/04/16/07/grasshopper-279532_960_720.jpg"
    },
    {
      id:11,
      nombre: "Escorpión",
      nombreCientifico: "Scorpiones",
      clase: "Insecto",
      descripcion: "Los escorpiones pertenecen a la clase de los arácnidos, y están estrechamente emparentados con las arañas, los caros y las garrapatas. Se los asocia comúnmente con el desierto, pero también están presentes en la selva brasilea, Columbia Britnica, Carolina del Norte e incluso la cordillera del Himalaya. Estos resistentes y adaptables artrópodos existen desde hace cientos de millones de años, y son unos auténticos supervivientes.",
      IMG: "https://cdn.pixabay.com/photo/2015/09/09/14/06/scorpion-931561_960_720.jpg"
    }
  );

  Todo = new Array();

  listaMamiferos() {return this.Mamiferos;}
  listaAves() {return this.Aves;}
  listaReptiles() {return this.Reptiles;}
  listaPeces() {return this.Peces;}
  listaInsectos() {return this.Insectos;}
  listaTodosAnimales() {return this.Todo = this.Mamiferos.concat(this.Aves, this.Reptiles, this.Peces, this.Insectos);}

   
}
