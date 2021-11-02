import { Injectable } from '@angular/core';
import { animales } from '../Interface/animales';
import { mamiferos, anfibios, aves, crustaceos, insectos, peces, reptiles } 
       from "./Clases/index";
@Injectable({
  providedIn: 'root'
})

export class DatosAnimalesService {

  especies1 = new mamiferos(); 
  especies2 = new anfibios();
  especies3 = new aves();
  especies4 = new crustaceos();
  especies5 = new insectos();
  especies6 = new peces();
  especies7 = new reptiles();

  Mamiferos = new Array<animales>();
  Aves= new Array<animales>();
  Anfibios = new Array<animales>();
  Insectos = new Array<animales>();
  Crustaceos = new Array<animales>();
  Reptiles = new Array<animales>();
  Peces = new Array<animales>();
  
  constructor() {
    this.Mamiferos = this.especies1.listaDeMamiferos();
    this.Anfibios = this.especies2.listaDeAnfibios();
    this.Aves = this.especies3.listaDeAves();
    this.Crustaceos = this.especies4.listaDeCrustaceos();
    this.Insectos = this.especies5.listaDeInsectos();
    this.Peces = this.especies6.listaDePeces();
    this.Reptiles = this.especies7.listaDeReptiles(); 
   }

  tiposAnimales = new Array(
    {
      mamiferos:
        "Los mamíferos son un grupo de animales que engloba seres muy diversos: desde la enorme ballena azul al murciélago. Aún así, todos ellos comparten una característica común: tienen unas glándulas mamarias productoras de leche mediante las que alimentan a las crías. Todos son vivíparos a excepción del orden de los monotremas en el que se incluyen animales tan excepcionales como el ornitorrinco y los equidnas. Y todos descienden de un antepasado común que probablemente se remonta a finales del Triásico, hace más de 200 millones de años." +
        "Habitan en la gran mayoría de ecosistemas del planeta excepto algunas tierras heladas de la Antártida– gracias a la capacidad de adaptación que han demostrado a lo largo de toda su historia evolutiva. Se han descrito casi 5.500 especies diferentes, suelen tener grandes capacidades de aprendizaje debido a que su volumen encefálico es mayor que el de otras especies y puede tener dietas muy variadas, algo que también ha contribuido a una mejor adaptación al medio."
    },
    {
      aves:
        "Las aves son animales vertebrados generalmente adaptados al vuelo, aunque muchos también pueden correr, saltar, nadar y bucear. Algunos, como los pingüinos, han perdido la capacidad de volar, pero conservaron sus alas como vestigio. Las aves se encuentran en todo el mundo y en todos los hábitats y cuentan con una gran diversidad de tamaños, siendo el ave más grande es el avestruz que puede llegar a a alcanzar los 2,5 metros de altura, y el más pequeño el colibrí, con apenas unos escasos centímetros."
    },

    {
      reptiles:
        "La principal característica de estos animales vertebrados es que tienen la piel recubierta de escamas y tienen un origen prehistórico, aparecieron hace 315 millones de años aproximadamente. Han sido capaces de sobrevivir, entre otras cosas, gracias a la capacidad que tienen de controlar su temperatura corporal." +
        "Todos los animales de esta especie son ovíparos, pero algunos son carnívoros y otros herbívoros. Tienen un metabolismo lento por lo que los grandes ejemplares, como algunos cocodrilos o serpientes, son capaces de vivir durante un largo periodo de tiempo gracias a una comida abundante. Se pueden encontrar reptiles en todos los continentes excepto en la Antártida"
    },

    {
      peces:
        "Podemos encontrar más de 27.900 especies de peces, tanto de agua dulce como salada y capaces de habitar en entornos que oscilan entre los 40 y los -2 ºC. Por tanto ¿Qué características unen a un grupo tan diverso de animales?:" +
        "Todos viven en un medio acuático y tienen un cerebro protegido por una caja craneal y una región bien diferenciada a modo de cabeza donde se albergan los ojos, dientes y otros órganos sensoriales.  La mayoría de los peces son vertebrados cuyas vértebras se disponen protegiendo la médula espinal, respiran principalmente mediante branquias y tienen diversos pares de miembros en un número variable y en forma de aletas mediante los cuales se desplazan. También se trata de organismos incapaces de regular su temperatura corporal interna y cuyo cuerpo se encuentra cubierto de escamas destinadas a protegerles."
    },

    {
      insectos:
        "Los insectos son animales invertebrados del filo de los artrópodos. Comprenden el grupo de animales más diverso de la Tierra de los que se conocen aproximadamente un millón de especies diferentes, cada una de ellas con una cantidad de miembros muy abundante. También se cree que aún quedan por describir unos 30 millones de especies más. Pueden encontrarse en casi todos los lugares del planeta, aunque solo un pequeño número de especies ha conseguido adaptarse a la vida en los océanos.  Los insectos no solo presentan una gran diversidad, sino que también son increíblemente abundantes. Algunas estimaciones hablan que existen 200 millones de insectos por cada ser humano." +
        "Se caracterizan por tener dos antenas, seis patas y dos alas, a pesar de que en ocasiones no les sirven para volar. Tienen el cuerpo dividido en tres partes: cabeza, tórax y abdomen y en algún momento de su vida, por lo general cuando pasan a la etapa adulta, experimentan un cambio drástico llamado metamorfosis. Aquí tienes una galería fotográfica con cientos de imágenes de insectos: "
    },

    {
      anfibios:
      "Su nombre proviene del griego y significa 'ambos medios', pues su vida transcurre entre el medio acuático y el terrestre. Se tratan los ancestros de los anfibios del primer grupo de vertebrados que colonizó el continente y se adaptó a una vida semiterrestre. Se encuentran prácticamente en todas las regiones del mundo excepto en aquellas donde las condiciones climáticas son más duras como el Ártico, la Antártida y los desiertos más extremos.  Los anfibios se caracterizan a diferencia del resto de vertebrados de pasar por diversos cambios y estadios morfológicos a lo largo de sus ciclos de vida. Transformaciones que de producirse de forma brusca reciben el nombre de metamorfosis."
    },

    {
      crustaceos:
      "Los crustáceos son animales marinos que se caracterizan por la presencia de un exoesqueleto de quitina articulado. Los crustáceos están divididos en seis clases siendo la más conocida la clase Malacostrata que reune a los cangrejos, camarones, galeras y langostas. El nombre científico del grupo, procede del griego, y significa “concha blanda”, haciendo alusión a su exoesqueleto de quitina. Los diferentes segmentos en los que se divide el cuerpo articulado de estos animales, se agrupan en tres grandes regiones: Céfala, Torax y Pleon. La región Céfala agrupa a los segmentos de la cabeza, apéndices de la cabeza y aparato bucal. La región del Torax está formada por ocho segmentos, algunos fusionados con la cabeza, y las patas marchadoras. La región del Pleon integra el abdomen y los cinco pares de apéndices traseros."
    }
  );

  Todo = new Array();
  
  nombre: any;
  listaDescripcionEspecies() {return this.tiposAnimales}
  listaMamiferos() {return this.Mamiferos;}
  listaAves() {return this.Aves;}
  listaReptiles() {return this.Reptiles;}
  listaPeces() {return this.Peces;}
  listaInsectos() {return this.Insectos;}
  listaAnfibios() {return this.Anfibios;}
  listaCrustaceos() {return this.Crustaceos;}
 
  obtenerMamifero(id:number){
    return this.Mamiferos[id];
  }

  obtenerAve(id:number){
     return this.Aves[id];
  }

  obtenerReptile(id:number){
    return this.Reptiles[id];
  }

  obtenerInsecto(id:number){
    return this.Insectos[id];
  }

  obtenerPez(id:number){
    return this.Peces[id];
  }

  obtenerAnfibio(id:number){
    return this.Anfibios[id];
  }

  obtenerCrustaceo(id:number){
    return this.Crustaceos[id];
  }

  listaTodosAnimales() {return this.Todo = this.Mamiferos.concat(this.Aves, this.Reptiles, this.Peces, this.Insectos, this.Anfibios, this.Crustaceos);}

  
  
   
}
