import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DatosAnimalesService {

prueba: string = "Prueba del servicio";


  constructor() { 
      
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

  Mamiferos = new Array(
    {
      id: 1,
      nombre: "Elefante",
      nombreCientifico: "Elephantidae",
      nomRuta: "elefante",
      clase: "Mamífero",
      descripcion: "Es el mamífero terrestre más grande. Pueden llegar a pesar más de 7 mil kilos y aunque en promedio suelen medir tres metros de altura. Algunos elefantes llegan a vivir 90 años. Son capaces de comunicarse a través de vibraciones en el suelo.",
      IMG: "https://cdn.pixabay.com/photo/2013/05/29/22/25/elephant-114543_960_720.jpg",
      
    },
    {
      id:2,
      nombre: "Pastor Alemán",
      nombreCientifico: "Canis familiaris",
      nomRuta: "pastor-aleman",
      clase: "Mamífero",
      descripcion: "Es una raza canina que proviene de Alemania. La raza es relativamente nueva, ya que su origen se remonta a 1899. Forman parte del grupo de pastoreo, ya que fueron perros desarrollados originalmente para reunir y vigilar ovejas. Desde entonces, sin embargo, gracias a su fuerza, inteligencia, capacidad de entrenamiento y obediencia,​ los pastores alemanes de todo el mundo son a menudo la raza preferida para muchos otros tipos de trabajo, como son: perro policía, perro guardián, guía de ciegos, animal de rescate, y otros, según el uso que le den las fuerzas y cuerpos de seguridad y el ejército. En muchos países incluso cuentan con unidades específicas denominadas K-9",
      IMG: "https://cdn.pixabay.com/photo/2019/03/23/05/15/schafer-dog-4074699_960_720.jpg"
    },
    {
      id:3,
      nombre: "Gato Atigrado",
      nombreCientifico: "Felis silvestris catus",
      nomRuta: "gato-atigrado",
      clase: "Mamífero",
      descripcion: "Es un gato con un distintivo pelaje de rayas y manchas características. Los gatos atigrados a menudo son, erróneamente, confundidos con una raza de gato pero solo son una variedad de color; de hecho, el patrón que posee el atigrado es una característica que ocurre naturalmente y que podría ser la original coloración de los distantes ancestros de los gatos domésticos",
      IMG: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg"

    },
    {
      id: 4,
      nombre: "Leon",
      nombreCientifico: "Panthera leo",
      nomRuta: "leon",
      clase: "Mamifero",
      descripcion: "El león es uno de los cuatro grandes félidos pertenecientes al género Panthera. El macho adulto es fácilmente reconocible por su gran tamaño y llamativa melena, y tiene un peso aproximado de 150 – 250 kg. Las hembras suelen ser considerablemente más pequeñas, con 110 – 180 kg de peso. Es el segundo félido más grande del mundo, después del tigre. La melena les sirve para proteger su cuello durante las batallas, para protegerse de los matorrales espinosos y es más frondosa cuanto menor sea la temperatura. El color de su pelaje es otra adaptación al medio, pues les sirve de camuflaje para poder cazar, principalmente, ya que no suelen ser presa de otros animales (salvo de hienas en caso de animales enfermos, ancianos o crías). Cazan al acecho (a unos 30 m o menos de su presa) para evitar gastar exceso de energía respecto a la que obtienen de la presa que persiguen, así, nunca corren en exceso (pero pueden alcanzar 56 Km/h).",
      IMG: "https://cdn.pixabay.com/photo/2014/11/03/11/07/lion-515028_960_720.jpg"
    }, 
    {
      id: 5,
      nombre: "Conejo",
      nombreCientifico: "Oryctolagus cuniculus",
      nomRuta: "conejo",
      clase: "Mamífero",
      descripcion: "El conejo se caracteriza por tener un cuerpo cubierto de un pelaje espeso y lanudo, de color pardo pálido a gris o rojizo, que permite su camuflaje para evitar a sus depredadores. Pesa entre 1,5 y 2,5 kg en estado salvaje. Tiene orejas largas de hasta 7 cm las cuales le ayudan a regular la temperatura del cuerpo y una cola muy corta. Sus patas anteriores son más cortas que las posteriores." +
                    "Mide de 33 a 50 cm en condiciones afables, incluso más en razas domésticas para carne. Todas estas características que posee esta especie en estado salvaje pueden variar significativamente según la raza.",
      IMG: "https://cdn.pixabay.com/photo/2020/04/07/20/36/bunny-5014814_960_720.jpg"
    },
    {
      id: 6,
      nombre: "Ballena",
      nombreCientifico: "Balaenidae",
      nomRuta: "ballena",
      clase: "Mamifero",
      descripcion: "Dentro de el orden de los cetáceos y concretamente del de los cetaceos misticetos se encuentran las ballenas, las cuales conforman la familia de los balaénidos o de las ballenas barbadas. Estas están clasificados en tan solo cuatro especies divididas en dos géneros, Balaena y Eubalaena. Estos animales pueden llegar a medir entre 25 y 32 metros y los ejemplares más grandes pueden llegar a pesar hasta 180 toneladas. De hecho, una de estas especies de balaenidos, la ballena azul, es el animal más grande del mundo en la actualidad.",
      IMG: "https://cdn.pixabay.com/photo/2014/09/05/03/38/humpback-whale-436120_960_720.jpg"
    },
    {
      id: 7,
      nombre: "Jirafa",
      nombreCientifico: "Giraffa camelopardalis",
      nomRuta: "jirafa",
      clase: "Mamifero",
      descripcion: "Las jirafas son los mamíferos más altos del mundo, gracias a sus enormes patas y largos cuellos. Las patas de una jirafa son más altas que muchos humanos, alrededor de 180 centímetros, y les permiten correr a más de 55 kilómetros por hora en distancias cortas y a más de 15 kilómetros por hora en distancias más largas. Estos fascinantes animales vagan por las praderas abiertas en pequeños grupos, que suelen ser de aproximadamente media docena. Los machos a veces luchan entre sí golpeando sus largos cuellos y las cabezas. Estos combates no suelen ser peligrosos y terminan cuando uno de los animales se rinde y se va. Las jirafas aprovechan su altura para alcanzar de las copas de los árboles las hojas y los brotes inaccesibles para otros animales, siendo las acacias sus favoritas. ¡Incluso la lengua de la jirafa es larga! La lengua de 50 centímetros les ayuda a arrancar sabrosos bocados de las ramas. Las jirafas pasan la mayor parte del tiempo comiendo y, al igual que las vacas, regurgitan la comida y la mastican como bolo alimenticio. Una jirafa come decenas de kilos de hojas cada semana y debe viajar millas para encontrar suficiente comida.",
      IMG: "https://cdn.pixabay.com/photo/2019/07/02/10/25/giraffe-4312090_960_720.jpg"
    },
    {
      id: 8,
      nombre: "Cerdo",
      nombreCientifico: "Sus scrofa domesticus",
      nomRuta: "cerdo",
      clase: "Mamifero",
      descripcion: "El cerdo es un animal mamífero que puede encontrarse en estado salvaje o doméstico. El nombre científico de la especie en estado natural es Sus scrofa y coloquialmente se lo conoce como jabalí o cerdo silvestre; mientras que aquéllos ejemplares que han sido domesticados reciben el nombre de Sus scrofa domestica. Se trata de un cuadrúpedo con patas cortas y pezuñas, un cuerpo pesado, hocico flexible y cola corta. Cabe señalar que el término cerdo proviene de cerda, lo que hace referencia a su pelo grueso. En libertad, estos animales pueden vivir hasta quince años, sin embargo dado que el ser humano se apropia de sus vidas y los explota para el consumo de su carne, en cautiverio no llegan a los 5 o 6 años de vida, con suerte, porque muchos de ellos son asesinados antes de cumplir el año de vida.",
      IMG: "https://cdn.pixabay.com/photo/2018/11/23/23/10/pig-3834738_960_720.jpg"
    },
    {
      id: 9,
      nombre: "Tigre",
      nombreCientifico: "Panthera Tigris",
      nomRuta: "tigre",
      clase: "Mamifero",
      descripcion: "Existen dos subespecies reconocidas de tigre*: el continental (Panthera tigris tigris) y el Sunda (Panthera tigris sondaica). El tigre, el más grandes de todos los grandes felinos asiáticos, depende principalmente de la vista y el oído en lugar del olfato para cazar. Por lo general caza solo y acecha a sus presas. Un tigre puede consumir más de 80 libras (36 kg) de carne a la vez. En promedio, los tigres dan a luz de dos a cuatro cachorros cada dos años. Si todos los cachorros de una camada mueren, se puede generar una segunda camada en cinco meses. El tigre generalmente se hace independiente alrededor de los dos años de edad y alcanza la madurez sexual a los tres o cuatro años en las hembras y a los cuatro o cinco años en los machos. Sin embargo, la mortalidad juvenil es alta: aproximadamente la mitad de todos los cachorros no sobreviven más de dos años. Se sabe que el tigre puede llegar a vivir hasta 20 años en la naturaleza.",
      IMG: "https://cdn.pixabay.com/photo/2014/10/23/18/56/tiger-500118_960_720.jpg"
    },
    {
      id: 10,
      nombre: "Caballo",
      nombreCientifico: "Equus Caballus",
      nomRuta: "caballo",
      clase: "Mamifero",
      descripcion: "La coloración del cuerpo es muy variable, ya que puede haber ejemplares de un tono uniforme y otros de tonos mezclados que son mejor conocidos como “pintos”. Sobre el cuello presenta una crin larga. Se trata de un animal no territorial y hay 2 tipos de grupos. Uno de machos solamente y otro formado de varias hembras y un macho dominante. Cuando coinciden en una zona dos harenes los machos luchan por la obtención de más hembras. En los grupos de solteros, también hay un macho dominante absoluto y se comporta como si fuera su harén. Las hembras entran en celo varias veces al año o hasta que quedan preñadas. En la actualidad existe cerca de 200 razas de caballos en las que figuran el ponny, los percherones y los pura sangre. Algunos datos curiosos sobre los caballos es que gustan revolcarse en la arena para espantar los insectos que los molestan o bien, usan su cola como abanico para el mismo fin. Es común que algunos caballos se les ponga anteojeras, sobre todo los que se encuentran en ciudades o villas muy transitadas, para evitar que se espanten. Además, el caballo a desempeñado un papel muy importante en la historia de la humanidad pues ha sido empleado como medio de transporte o en guerras o ha sido tema para escritores o poetas.",
      IMG: "https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_960_720.jpg"
    }
  );

  Aves = new Array(
    {
      id:11,
      nombre: "Lechuza",
      nombreCientifico: "tyto alba",
      nomRuta: "lechuza",
      clase: "Aves",
      descripcion: "De tamaño mediano, con cuerpo alargado y cabeza voluminosa libre de penachos, luce un acolchado y tupido plumaje de color pardo anaranjado en el dorso, con tonos grises y finamente punteado de blanco y negro. Las partes inferiores son de un blanco puro o anaranjado (dependiendo de la fase) con pecas negras.",
      IMG: "https://cdn.pixabay.com/photo/2018/07/09/19/07/eastern-screech-owl-3526934_960_720.jpg"
    },
    {
      id:12,
      nombre: "Gallina",
      nombreCientifico: "Gallus gallus domesticus",
      nomRuta: "gallina",
      clase: "Aves",
      descripcion: "Los nombres comunes son: gallo, para el macho; gallina, para la hembra, y pollo, para los subadultos. Es el ave más numerosa del planeta, pues se calcula que el número de ejemplares supera los dieciséis mil millones. Los gallos y gallinas se crían principalmente por su carne y por sus huevos. También se aprovechan sus plumas y algunas variedades se crían y entrenan para su uso en peleas de gallos y como aves ornamentales.",
      IMG: "https://cdn.pixabay.com/photo/2018/10/05/23/24/chicken-3727097_960_720.jpg"
    },
    {
      id:13,
      nombre: "Pato",
      nombreCientifico: "Anas platyrhynchos domesticus",
      nomRuta: "pato",
      clase: "Aves",
      descripcion: "Pato es el nombre común para ciertas aves de la familia Anatidae, principalmente de la subfamilia Anatinae y dentro de ella del género Anas. No son un grupo monofilético, ya que no se incluyen los cisnes ni los gansos.",
      IMG: "https://cdn.pixabay.com/photo/2013/04/22/20/02/ruddy-shelduck-106544_960_720.jpg"
    },
    {
      id: 14,
      nombre: "Paloma",
      nombreCientifico: "Columba livia",
      nomRuta: "paloma",
      clase: "Aves",
      descripcion: "La Paloma Huilota es una paloma de aspecto elegante, cola larga, y cabeza pequeña, que se encuentra en casi toda Norte América. Suele posarse en los cables del alumbrado público y busca semillas en el suelo; su vuelo es rápido y recto como el de un balazo. Su arrullo suave y largo suena como un lamento. Cuando van a emprender vuelo, sus alas suenan como un silbido fuerte o rechinaran. Las Palomas Huilotas son las aves mas cazadas en Norte América.",
      IMG: "https://cdn.pixabay.com/photo/2015/09/02/13/02/pigeon-918848_960_720.jpg"
    },
    {
      id: 15,
      nombre: "Aguila",
      nombreCientifico: "Aquila Chrysaetos",
      nomRuta: "aguila",
      clase: "Aves",
      descripcion: "Majestuosas, sigilosas, veloces, inteligentes y hábiles: si el mar es de los tiburones y la sabana de los leones, la hegemonía del reino de los cielos es delas águilas. Pertenecientes a las familia Accipitridae, este tipo de aves sobrevuelan los cielos de todo el mundo excepto los antárticos. Depredadores por excelencia estos pájaros son temibles aves de presa.  Cuentan con un pico fuerte y robusto acabado en punta y hacia abajo que les facilita la tarea de separar los pedazos de carne de sus víctimas. También gozan de un sentido de la vista extraordinario con el que pueden divisar a sus presas a grandes distancias y además, sus potentes y robustas garras les permiten atrapar animales más grandes que ellas y trasladarlos por el aire. ",
      IMG: "https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg"
    },
    {
      id: 16,
      nombre: "Pavo real",
      nombreCientifico: "Pavo Cristatus",
      nomRuta: "pavo-real",
      clase: "Aves",
      descripcion: "Los pavos reales, pertenecientes a la familia de las Phaisanidae, son aves grandes y muy coloridas (sobre todo azules y verdes) conocidas por su iridiscente cola. Esta llamativa cola, que es el 60 por ciento del cuerpo del animal, luce un ocelo (“ojo”) con variedades de azul, dorado, rojo y otras tonalidades. Los pavos reales utilizan su cola en los rituales de apareamiento y cortejo. Pueden abrirla en un espectacular abanico que se extiende desde la parte dorsal del animal hasta tocar el suelo en cada lado. Se dice que las hembras eligen a sus compañeros en función del tamaño, color y calidad de estas extravagantes colas.",
      IMG: "https://cdn.pixabay.com/photo/2013/03/04/18/49/peacock-90051_960_720.jpg"
    },
    {
      id: 17,
      nombre: "Loro",
      nombreCientifico: "Psittacoidea",
      nomRuta: "loro",
      clase: "Aves",
      descripcion: "Los loros conforman una orden muy amplia que incluye a más de 350 aves, como guacamayos, amazonas, loriquitos, agapornis y cacatúas. A pesar de la gran variedad de aves de esta familia, existen similitudes entre ellos. Todos tienen un pico curvo y patas cigodáctilas, es decir, tienen cuatro dedos en cada pata: dos están dirigidos hacia delante y dos hacia atrás. La mayoría de los loros comen frutas, flores, brotes, frutos secos, semillas y algunos animales pequeños como insectos. Los loros viven en regiones de clima cálido y se encuentran por todo el mundo. En Australasia, América Central y Sudamérica se encuentra la mayor diversidad.",
      IMG: "https://cdn.pixabay.com/photo/2010/12/23/13/36/bird-4078_960_720.jpg"
    },
    {
      id: 18,
      nombre: "Gaviota",
      nombreCientifico: "Laridae",
      nomRuta: "gaviota",
      clase: "Aves",
      descripcion: "Las gaviotas son aves voladoras de la familia Laridae. Se relacionan estrechamente con los gaviotines de la familia Sternidae, y tienen más a distancia con las aves zancudas. La mayoría de las gaviotas pertenece al género Larus. Son en general pájaros grandes, en su mayoría de plumaje gris o blanco, a menudo con señales negras en la cabeza o las alas. Tienen picos robustos, bastante largos. Las gaviotas adultas tienen la cabeza, el cuello, la cola y la parte inferior del cuerpo de un color blanco puro, mientras que la espalda y el dorso de las alas son de color gris pálido, lo que le da el nombre español de gaviota argéntea. En Catalunya se la conoce como “gavià argentat”, “gavota” en Galicia o “kaio” en Euskadi. En inglés se la conoce como “herring gull”.",
      IMG: "https://cdn.pixabay.com/photo/2013/02/09/10/57/seagull-79658_960_720.jpg"
    },
    {
      id: 19,
      nombre: "Colibri",
      nombreCientifico: "Trochiladae",
      nomRuta: "colibri",
      clase: "Aves",
      descripcion: "Es el ave más pequeño del mundo, su peso es de dos gramos, tiene el pico largo y estrecho, y una lengua en forma de trompa. El colibrí tiene las patas débiles y cortas, la cola adopta formas extrañas y está forrada de varios adornos. El pico es muy largo, puntiagudo y guarda en su interior una lengua en forma de trompa, que usa para absorber el néctar de las flores que proporcionan su alimento. Su forma de volar es parecida a la de un insecto y se sostiene en un punto exacto del espacio gracias a la rápida vibración de sus alas. Cuando vuela, es muy difícil distinguirla, y parece como si su cuerpo estuviera suspendido en el vacío mientras recoge el néctar. Esta rápida vibración, provoca un ruido tipo susurro. ",
      IMG: "https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg"
    },
    {
      id: 20,
      nombre: "Tucan",
      nombreCientifico: "Ramphastidae",
      nomRuta: "tucan",
      clase: "Aves",
      descripcion: "El toco tucán presenta un plumaje con una coloración negro mate en casi todo el cuerpo, a excepción de una parte de su pecho, garganta y lados de la cabeza, siendo de color blanco. Una característica bastante llamativa es el pico que posee un vivo color amarillo, y en la punta de la mandíbula superior presenta una parte en color negro, lo mismo que en su base; dentro del grupo de los tucanes es el ave con el pico más grande pues llega a medir hasta 20 cm., de largo y está constituido por una red de fibras óseas lo que le proporciona fuerza y ligereza a la vez. En cuanto a su lengua, ésta es delgada y notablemente larga, puede llegar a medir hasta 15 cm. El macho es más grande que la hembra; sin embargo, ambos sexos poseen la misma coloración en su plumaje. El toco tucán es un ave que gusta de permanecer en las copas altas de los árboles, donde salta de rama en rama. Por lo que respecta a su nido, éste es construido regularmente en los agujeros de los árboles muertos; dichos agujeros llegan a tener hasta 2 m. de profundidad, y pueden ser usados durante varios años. Tanto el macho como la hembra participan en el proceso de incubación.",
      IMG: "https://cdn.pixabay.com/photo/2015/11/03/16/00/keel-billed-toucan-1021048_960_720.jpg"
    }
  );

  Reptiles = new Array(
    {
      id:21,
      nombre: "Cobra India",
      nombreCientifico: "Naja Naja",
      nomRuta: "cobra-india",
      clase: "Reptiles",
      descripcion: "Es una especie de serpiente venenosa originaria del Subcontinente indio. Como otras cobras, la cobra de anteojos es famosa por el capuchón que despliega alrededor de su cabeza cuando se encuentra excitada o amenazada. En la parte de atrás del capuchón tiene dos manchas negras unidas por una línea curva, que da la impresión de ser unos anteojos",
      IMG: "https://cdn.pixabay.com/photo/2017/09/14/15/43/snake-2749383_960_720.jpg"
    },
    {
      id:22,
      nombre: "Caimán",
      nombreCientifico: "Caiman",
      nomRuta: "caiman",
      clase: "Reptiles",
      descripcion: "Es un género de cocodrilos de la familia de los aligatóridos, conocidos vulgarmente como caimanes o yacarés. Se distribuyen en las regiones subtropicales y tropicales de América, desde Florida hasta el sur de Sudamérica.",
      IMG: "https://cdn.pixabay.com/photo/2016/08/09/05/15/alligator-1579916_960_720.jpg"
    },
    {
      id:23,
      nombre: "Iguana",
      nombreCientifico: "Iguanidae",
      nomRuta: "iguana",
      clase: "Reptiles",
      descripcion: "La iguana verde (Iguana iguana) es uno de los lagartos más grandes de América; pueden crecer hasta alcanzar los 2 metros de largo y pesan alrededor de 5 kilogramos. Además, también son mascotas bastante comunes en Estados Unidos, a pesar del hecho de que son un poco difíciles de cuidar y mantener.",
      IMG: "https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719_960_720.jpg"
    },
    {
      id: 24,
      nombre: "Tortuga",
      nombreCientifico: "Testudines",
      nomRuta: "tortuga",
      clase: "Reptiles",
      descripcion: "También conocidos como quelonios, las tortugas son un tipo de reptiles caracterizados por el sólido caparazón que protege sus órganos vitales del que emergen la cabeza, las patas y la cola. Son animales ovíparos que cavan sus nidos en la tierra, donde llevan a cabo la incubación de los huevos. A pesar de que carecen de dientes, cuentan con un fuerte pico que usan para alimentarse. Además de plantas, también comen insectos, caracoles y lombrices. Existen especies marinas y terrestres.  Las tortugas pueden ser animales muy longevos, viven entre 50 y 80 años y en algunos casos llegan a los 100. La tortuga más longeva jamás documentada es Harriet, una tortuga de las Galápagos que alcanzó los 175 años.",
      IMG: "https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_960_720.jpg"
    },
    {
      id: 25,
      nombre: "Cocodrilo",
      nombreCientifico: "Crocodylidae",
      nomRuta: "cocodrilo",
      clase: "Reptiles",
      descripcion: "Los cocodrilos están dotados de una piel escamosa, muy dura y seca. Sus fosas nasales y sus ojos se encuentran en la parte superior de la cabeza, lo que le permite ver y respirar mientras permanece en el agua. Suelen pasar la mayor parte del día parados, a la espera de que una presa se acerque lo suficiente como para lanzar un ataque súbito. Tienen además cuerpos pesados y metabolismos generalmente lentos, aunque pueden controlar la velocidad de su digestión según la abundancia de presas y de la temperatura ambiente. ",
      IMG: "https://cdn.pixabay.com/photo/2019/01/15/22/40/crocodile-3934974_960_720.jpg"
    },
    {
      id: 26,
      nombre: "Serpiente cascabel",
      nombreCientifico: "Crotalus durissus",
      nomRuta: "serpiente-cascabel",
      clase: "Reptiles",
      descripcion: "Las serpientes de cascabel son venenosa. Todas las especies menos una, C. catalinensis, son fácilmente reconocibles por el característico sonido de su cascabel el cual se encuentra en la punta de la cola. Algunas especies de serpiente de cascabel pueden alcanzar hasta 2,5 metros de largo, y los 4 kg de peso. Su piel con círculos amarillos, está marcada en el centro por colores negros (parecidos a diamantes) hace que este tipo de reptil sea el mejor adornado de todo Norteamérica."+
      "Como su nombre lo dice, el cascabel lo forman unos estuches córneos en el extremo de la cola que en caso de peligro les permiten emitir un sonido de aviso de que es peligrosa y quizá proteja la serpiente de ser pisada por los grandes mamíferos.",
      IMG: "https://cdn.pixabay.com/photo/2015/05/03/21/41/snake-751722_960_720.jpg"
    },
    {
      id: 27,
      nombre: "Dragon de Komodo",
      nombreCientifico: "Varanus komodoensis",
      nomRuta: "dragon-de-comodo",
      clase: "Reptiles",
      descripcion: "El dragón de Komodo, (Varanus komodoensis), la especie de lagarto existente más grande del planeta, es un lagarto de la familia Varanidae. También llamado monstruo de Komodo y varano de Komodo, puede encontrarse en la isla de Komodo y algunas islas vecinas de las islas de la Sonda de Indonesia central. El interés popular en el gran tamaño y los hábitos depredadores de este particular lagarto han permitido que esta especie en peligro de extinción se convierta en una atracción ecoturística, lo que ha alentado -afortunadamente- su protección. Eso sí, según la Unión Internacional para la Conservación de la Naturaleza, UICN (organismo dedicado a la conservación de recursos naturales), el dragón de Komodo se encuentra actualmente en estado de conservación “vulnerable”. Este lagarto crece hasta 3 metros de longitud total y puede alcanzar un peso máximo de aproximadamente 135 kg (el promedio son 2 metros de largo y 70 kg de peso). Excava una madriguera de hasta 9 metros y pone huevos que eclosionan en abril o mayo. Las crías recién nacidas, de unos 45 centímetros de largo, viven en árboles durante varios meses.",
      IMG: "https://cdn.pixabay.com/photo/2016/08/12/16/59/monitor-1589200_960_720.jpg"
    },
    {
      id: 28,
      nombre: "Lagartija",
      nombreCientifico: "Lacertilia",
      nomRuta: "lagartija",
      clase: "Reptiles",
      descripcion: "Con el nombre de lagartija se conoce de manera genérica a un conjunto de especies de reptiles con características similares. El número de especies que engloba este apelativo es muy grande, por eso nos referiremos, en esta oportunidad a la lagartija común, también denominada lagartija roquera por su agilidad para trepar muros, rocas y árboles. Estos animales pertenecen a la familia de los Lacértidos y ha sido bautizada científicamente como Podarcis muralis. Es un animal pequeño y que cuenta con una gran velocidad de desplazamiento. Son animalitos pequeños, sus medidas no llegan a alcanzar un máximo de 6 centímetros, sin incluir su cola que, generalmente, es mucho más larga que todo su cuerpo. Pese a ser un reptil, la lagartija se desplaza por medio de sus 4 patas, colocadas a los costados y provistas de dedos prensiles que convierten a estos animales en excelentes trepadores. Esta especia de reptiles presenta escamas en su cuerpo, más abundantes en el dorso que en el vientre, también poseen escamas en sus patas. La cantidad de escamas varías, según se trate de machos o de hembras, siendo los ejemplares masculinos, los que cuentan con la mayor cantidad.",
      IMG: "https://cdn.pixabay.com/photo/2016/03/04/19/07/gecko-1236523_960_720.jpg"
    },
    {
      id: 29,
      nombre: "Tuatara",
      nombreCientifico: "Sphenodon",
      nomRuta: "tuarara",
      clase: "Reptiles",
      descripcion: "Pertenece a la familia Sphenodontidae. Es de color gris o verde oliva con algunos detalles en color rojo. Se caracteriza por tener 2 fosas temporales o fenestras a cada lado del cráneo detrás de la órbita ocular. Tiene un tercer ojo u ojo pineal que aún no ha sido reconocida su función específica. Los machos tienen una cresta en la región posterior del cuello y en el dorso. Tiene dientes especializados grandes y filosos. Es de hábitos nocturnos, es territorialista y los machos al verse amenazados inflan su cuerpo y levantan la cresta. Su reproducción es sexual. Como el macho carece de órganos de copulación la fecundación ocurre con el acercamiento de las regiones de la cloaca de ambos progenitores. La época reproductiva comienza a mediados de la primavera. La hembra deposita entre 5 a 18 huevos. El periodo de incubación es de 12 a 15 meses.",
      IMG: "https://cdn.pixabay.com/photo/2017/03/31/10/06/tuatara-2190866_960_720.jpg"
    },
    {
      id: 30,
      nombre: "Aligator",
      nombreCientifico: "Alligator",
      nomRuta: "aligator",
      clase: "Reptiles",
      descripcion: "Alligator es un género de saurópsidos (reptiles), conocidos popularmente como lagartos o aligátores. Ocasionalmente y de manera coloquial, se los denomina indistintamente, como caimanes, pese a que caimanes y lagartos pertenecen a géneros distintos; ya que taxonómicamente divergen a nivel de subfamilia. Actualmente incluye dos especies vivas, el aligátor chino y el lagarto americano. Tanto el nombre español actual como el latino usado en la clasificación científica proceden del inglés alligator, que a su vez es una deformación del español «el lagarto», con el que los conquistadores españoles de Florida bautizaron inicialmente a este animal. Los aligátores se encuentran casi siempre en aguas dulces, muy raramente se les ve en lagunas salobres y nunca se adentran en el mar. Esto se debe a que carecen de las glándulas secretoras de sal de las que disponen los cocodrilos, por ejemplo, y como resultado de ello no se han expandido hacia las islas del Caribe como sí han hecho varias especies de cocodrilos. Se diferencian fácilmente de los cocodrilos por la forma de su cabeza y morro, más anchos y cortos. Los dientes no sobresalen cuando mantienen la boca cerrada, cosa que sí sucede en los cocodrilos. Los ojos se sitúan en una posición muy atrasada respecto a otros géneros de Crocodilia. El color de la gruesa piel es normalmente oscuro (más en el caso de la especie china) acercándose a veces al negro, aunque no son raros los ejemplares más claros e incluso hay algún caso leucístico.",
      IMG: "https://cdn.pixabay.com/photo/2019/05/22/03/54/aligator-4220630_960_720.jpg"
    }
  );

  Peces = new Array(
    {
      id:31,
      nombre: "Barbo Rosado",
      nombreCientifico: "Pethia conchonius",
      nomRuta: "barbo-rosado",
      clase: "Peces",
      descripcion: "Se trata de un pez que presenta forma ovalada, agradable y muy activo, su coloración es rosácea a anaranjada sobre un fondo base plateado, es característica una pequeña mancha que mantiene en la parte posterior de su cuerpo, un poco anterior al péndulo caudal. Existe dimorfismo sexual, ya que los machos presentan una pequeña coloración oscura en la aleta dorsal y anal, además las hembras poseen colores más apagados. En edad adulta pueden llegar a medir hasta los 14 cm de longitud.",
      IMG: "https://laguiadelacuario.es/wp-content/uploads/2020/11/pethia_conchoniuspda.jpg"
    },
    {
      id:32,
      nombre: "Gurami Enano",
      nombreCientifico: "Osphronemidae",
      nomRuta: "gurami-enano",
      clase: "Peces",
      descripcion: "Su tamaño está entre 6 y 15 cm (hasta 30 en el caso de los ejemplares gigantes), donde se destacan sus dos aletas con forma de hilo para hacerlo más llamativo. La forma de su cuerpo es ovalada pero plana a los lados y con su movimiento realizan un auténtico show bajo el agua. También conocido como pez gourami, es una variedad de peces especialmente resistente entre los peces de agua dulce, de ahí que esté tan extendido entre los acuarios de aficionados a esta disciplina.",
      IMG: "https://cdn.pixabay.com/photo/2020/09/25/19/03/fish-5602367_960_720.jpg"
    },
    {
      id:33,
      nombre: "Guppy",
      nombreCientifico: "Poecillia reticulata",
      nomRuta: "guppy",
      clase: "Peces",
      descripcion: "Los guppies (Poecilia reticulata) pueden medir entre 1,5 y 6 cm. Son peces de agua dulce originarios del noreste de Sudamérica, comunes en acuarios en muchos países del mundo. Los ojos de los guppies son normalmente plateados, pero cuando quiere señalizar que está dispuesto a atacar, sus ojos se vuelven negros.",
      IMG: "https://cdn.pixabay.com/photo/2019/08/30/01/24/water-tank-4440191_960_720.jpg"
    },
    {
      id: 34,
      nombre: "Telescopio",
      nombreCientifico: "Gigantura",
      nomRuta: "telescopio",
      clase: "Peces",
      descripcion: "Dentro de la familia de los carácidos , existe una variedad de peces, bastante peculiar y curiosa, que tiene ojos modificados denominada como telescopios o Demekin. Esta variedad, se originó en China a principios del siglo XVIII, y su característica principal son sus ojos, los cuales parece que brotaran de su cabeza, es decir sobresalen de tal manera que se proyectan hacia fuera. Sin embargo, aunque adquieren el nombre de peces telescopio, su visión es muy limitada. Estos peces se encuentran en infinidad de acuarios y peceras de todo el mundo. Este pez ha sido domesticado por el ser humano criado con fines ornamentales. Cada vez, con el paso de los años, las crías se han ido volviendo más selectiva, dando las variedades que tenemos hoy día.",
      IMG: "https://cdn.pixabay.com/photo/2020/10/06/07/35/aquarium-5631495_960_720.jpg"
    },
    {
      id: 35,
      nombre: "Oscar",
      nombreCientifico: "Astronotus ocellatus",
      nomRuta: "oscar",
      clase: "Peces",
      descripcion: "El pez oscar, astronotus ocellatus, es un pez de la familia de los cíclidos, de la que sólo hay otra variedad el astronotus crassipinnis. Se suele conocer con otros nombre vulgares, como cíclido de terciopelo, óscar rojo, pez óscar tigre o cíclido de mármol. Se trata de un pez muy original, que va cambiando de aspecto a medida que envejece, siendo en su estado juvenil muy atrayentes, con colores amarillos y marrón claro, mientras que cuando envejecen resultan menos vistosos. Son fáciles de reproducir en cautividad, siempre que tengan suficiente espacio y estén bien alimentados.",
      IMG: "https://cdn.pixabay.com/photo/2018/06/04/03/21/astronotus-3452311_960_720.jpg"
    },
    {
      id: 36,
      nombre: "Koi",
      nombreCientifico: "Cyprinus rubrofuscus",
      nomRuta: "koi",
      clase: "Peces",
      descripcion: "El grandioso koi es un pez de colores muy atrayentes originario de Japón y China. También se le llama carpa, ya que proviene de la familia de peces Carpa. Llega a alcanzar un tamaño de unos 50 a casi 90 centímetros. Es adaptable a la variación de temperaturas, bien sean bajas o altas, lo que los hace idóneos para tenerlos en un acuario. Estos peces son muy longevos debido a que llegan a alcanzar gran tamaño. Si tienen el cuidado apropiado, pueden llegar a vivir unos 30 a 40 años aproximadamente, incluso corre el rumor de que estos han llegado a vivir hasta los 65 años. Llegan a pesar desde 9 hasta 40 kilos. Esto no debe de sorprender ya que si bien mencionamos anteriormente pueden llegar a alcanzar gran tamaño.",
      IMG: "https://cdn.pixabay.com/photo/2016/11/05/11/27/koi-1799988_960_720.jpg"
    },
    {
      id: 37,
      nombre: "Beta",
      nombreCientifico: "Betta splendens",
      nomRuta: "beta",
      clase: "Peces",
      descripcion: "El pez Betta es uno de los moradores favoritos de las peceras de los amantes de la acuariofilia por su increíble colorido y su particular personalidad. Sin duda, es difícil resistirse a la espectacularidad de su avance y a ese carácter fuerte que hace que se le denomine Guerrero de Siam. Y es que tanto su nombre como su sobrenombre proceden precisamente de un antiguo clan de guerreros existente en el país de origen de estos peces, Tailandia.",
      IMG: "https://cdn.pixabay.com/photo/2018/05/23/17/25/beta-3424566_960_720.jpg"
    },
    {
      id: 38,
      nombre: "Payaso",
      nombreCientifico: "Amphiprioninae",
      nomRuta: "payaso",
      clase: "Peces",
      descripcion: "El pez payaso es uno de los peces más populares del mundo debido a una cinta de animación, sin embargo, en la vida real, esta especie posee fascinantes cualidades que sorprenden a los expertos, ¿quieres saber cuáles son? No te despegues de este artículo. El pez payaso destaca gracias a sus colores, como el naranja, entremezclados con franjas blancas y bordes negros. En la etapa adulta llega a medir hasta 11 centímetros, desarrolla una cola redonda y once espinas en la aleta dorsal. El pez payaso nace como macho y conforme va creciendo, se integra con otros de su especie en pequeños bandos para residir en una anémona. Cuando llega a la etapa adulta, es momento de reproducirse, por lo que el ejemplar de mayor tamaño y líder de la manada se transforma en hembra para asegurar la continuidad de los peces.",
      IMG: "https://cdn.pixabay.com/photo/2014/08/24/19/10/clownfish-426567_960_720.jpg"
    },
    {
      id: 39,
      nombre: "Pez Globo",
      nombreCientifico: "Tetraodontinae",
      nomRuta: "pez-globo",
      clase: "Peces",
      descripcion: "Los biólogos creen que el pez globo desarrolló su famosa habilidad para inflarse debido a que su estilo para nadar es lento y torpe. Eso los hace vulnerables frente a los depredadores. En lugar de escapar, el pez globo utilizar su elástico estómago muy elástica y su capacidad de ingerir rápidamente grandes cantidades de agua (e incluso de aire si es necesario) para que se convierta en una bola prácticamente increíble que dobla varias veces su tamaño normal. Algunas especies también tienen espinas en la piel para evitar ser comidas. Un depredador que logra atrapar a un pez globo antes de que se infle, no se sentirá afortunado por mucho tiempo. Casi todos los peces globo contienen tetrodo toxina, una sustancia que hace que el pez globo tenga un sabor muy desagradable, a menudo letal para los peces. Para los humanos, el tetrodo toxina es mortal, hasta 1.200 veces más venenosa que el cianuro. En pez globo contiene suficiente tetrodo toxina para matar a 30 seres humanos adultos, y no hay antídoto conocido.",
      IMG: "https://cdn.pixabay.com/photo/2019/03/20/15/05/puffer-fish-4068750_960_720.jpg"
    },
    {
      id: 40,
      nombre: "Piraña",
      nombreCientifico: "Pygocentrus nattereri",
      nomRuta: "pirana",
      clase: "Peces",
      descripcion: "La piraña o serrasalmus, son peces de agua dulce que forman parte de la familia de los carácidos. Es uno de los peces con peor reputación que existen, por su agresivo temperamento y sus dientes increíblemente afilados que cortan todo lo que muerden. La piraña es un pez grande que puede llegar a medir entre 25 y 30 centímetros. En libertad, algunos ejemplares pueden llegar hasta los 40 o 50 centímetros. Se caracteriza por su gruesa cabeza, dotada de una mandíbula inferior prominente y unos dientes triangulares, muy afilados que le otorgan una imagen aterradora y peligrosa.",
      IMG: "https://cdn.pixabay.com/photo/2021/01/14/22/42/piranha-5918098_960_720.jpg"
    }
  );

  Insectos = new Array(
    {
      id:41,
      nombre: "Cucaracha",
      nombreCientifico: "Blattodea",
      nomRuta: "cucaracha",
      clase: "Insecto",
      descripcion: "Se conocen más de 4500 especies de cucarachas en cerca de 500 géneros. uelen ser de color castaño, rojo u oscuro y de cuerpo aplanado. Algunas especies tienen colores llamativos.",
      IMG: "https://cdn.pixabay.com/photo/2014/12/13/15/38/cockroach-566712_960_720.jpg"
    },
    {
      id:42,
      nombre: "Grillo",
      nombreCientifico: "Grylladae",
      nomRuta: "grillo",
      clase: "Insecto",
      descripcion: "Los grillos están emparentados con las Acrididae (saltamontes). Sus patas están adaptadas al salto, sin embargo saltan menos que los saltamontes, lo que los hace más torpes. En cambio, corren por el suelo con rapidez. Excavan una madriguera en el suelo, que consiste en una galería de más de medio metro, y que termina en una habitación esférica.",
      IMG: "https://cdn.pixabay.com/photo/2014/03/04/16/07/grasshopper-279532_960_720.jpg"
    },
    {
      id:43,
      nombre: "Escorpión",
      nombreCientifico: "Scorpiones",
      nomRuta: "escorpion",
      clase: "Insecto",
      descripcion: "Los escorpiones pertenecen a la clase de los arácnidos, y están estrechamente emparentados con las arañas, los caros y las garrapatas. Se los asocia comúnmente con el desierto, pero también están presentes en la selva brasilea, Columbia Britnica, Carolina del Norte e incluso la cordillera del Himalaya. Estos resistentes y adaptables artrópodos existen desde hace cientos de millones de años, y son unos auténticos supervivientes.",
      IMG: "https://cdn.pixabay.com/photo/2015/09/09/14/06/scorpion-931561_960_720.jpg"
    },
    {
      id: 44,
      nombre: "Hormiga",
      nombreCientifico: "Formicidae",
      nomRuta: "hormiga",
      clase: "Insecto",
      descripcion: "Las hormigas son insectos muy comunes, sin embargo están dotados de algunas cualidades realmente excepcionales y únicas. En raras ocasiones superan los dos centímetros de longitud, sin embargo son uno de los animales más fuertes del mundo, siendo capaces de levantar casi tres veces el peso de su cuerpo. Comparten rasgos muy parecidos con las avispas y las abejas, ya que evolucionaron a partir de un antepasado común. ",
      IMG: "https://cdn.pixabay.com/photo/2014/12/13/10/06/insects-566408_960_720.jpg"
    },
    {
      id: 45,
      nombre: "Mariposa",
      nombreCientifico: "Lepidoptera",
      nomRuta: "mariposa",
      clase: "Insecto",
      descripcion: "Los lepidópteros, mas conocidos comúnmente como mariposas, son unos insectos pertenecientes al orden de los homometábolos, un grupo de insectos superiores, los cuales, a lo largo de su vida sufren una serie de transformaciones complejas conocida como metamorfosis, y en la que se suceden las fases de embrión, larva, pupa e imago. Las mariposas son un tipo de insecto muy popular por los llamativos colores que tiñen sus alas y por su vuelo vacilante cuando se acerca el buen tiempo. Se han descrito unas 24.000 especies diferentes.",
      IMG: "https://cdn.pixabay.com/photo/2013/06/30/18/56/butterfly-142506_960_720.jpg"
    },
    {
      id: 46,
      nombre: "Mosquito",
      nombreCientifico: "Culicidae",
      nomRuta: "mosquito",
      clase: "Insecto",
      descripcion: "El mosquito común se caracteriza por ser un insecto volador y por poseer un cuerpo delgado, patas largas y finas. Los adultos pueden llegar a medir hasta 15 milímetros, y es importante saber que las larvas se desarrollan siempre en el agua, por esta razón es que cuando existe epidemia por alguna enfermedad transmitida por los mosquitos, se pide que se elimine de los hogares todo tipo de contenedores de agua que favorezca la reproducción veloz de los mosquitos. ",
      IMG: "https://cdn.pixabay.com/photo/2012/05/18/21/45/mosquito-49141_960_720.jpg"
    },
    {
      id: 47,
      nombre: "Lombriz",
      nombreCientifico: "Lumbricidae",
      nomRuta: "lombriz",
      clase: "Insecto",
      descripcion: "La lombriz de tierra, de color gris rojizo, es un animal familiar para todo aquel que tenga un jardín o una caña de pescar. Es oriunda de Europa, pero en la actualidad abunda también en Norteamérica y en Asia occidental. Aunque por lo general apenas mide 7 u 8 centímetros, se sabe que algunos miembros de la especie alcanzan hasta 35 centímetros de longitud con el cuerpo enrollado. El cuerpo de la lombriz de tierra está formado por segmentos llamados anillos o metámeros. Estos segmentos están recubiertos de sedas, o pequeñas cerdas, que la lombriz usa para remover y escarbar la tierra. La lombriz tiene la boca en el primer segmento del cuerpo. A medida que cava la tierra la va ingiriendo, extrayendo de ella nutrientes que provienen de la descomposición de materia orgánica, como hojas o raíces. La lombriz de tierra es vital para la salud del suelo, ya que transporta nutrientes y minerales hasta la superficie mediante sus deshechos y los túneles que excava oxigenan la tierra. Una lombriz puede comer en un día el equivalente a un tercio de su peso corporal.",
      IMG: "https://cdn.pixabay.com/photo/2020/01/13/18/56/worm-4763219_960_720.jpg"
    },
    {
      id: 48,
      nombre: "Avispa",
      nombreCientifico: "Vespula vulgaris",
      nomRuta: "avispa",
      clase: "Insecto",
      descripcion: "Estamos familiarizados con las avispas de colores vivos y zumbidos furiosos que vuelan a nuestro alrededor y nos amedrentan con sus dolorosas picaduras. Pero la verdad es que la gran mayoría de las avispas son insectos solitarios e inofensivos para el ser humano. Por el contrario, en lugar de ser dañinas, son sumamente beneficiosas para el hombre ya que controlan las plagas. Las avispas se distinguen de las abejas por su abdomen inferior puntiagudo y su estrecha «cintura» que se denomina pecíolo y separa el abdomen del tórax. Estos insectos ostentan todos los colores que podamos imaginar, desde el amarillo al que ya estamos acostumbrados, al marrón, el azul metálico o el rojo vivo. Generalmente, las especies de colores más brillantes pertenecen a la familia de las Vespidae, es decir, las avispas que pican.",
      IMG: "https://cdn.pixabay.com/photo/2018/04/25/18/41/hornet-3350248_960_720.jpg"
    },
    {
      id: 49,
      nombre: "Polilla",
      nombreCientifico: "Tinea pellionella",
      nomRuta: "polilla",
      clase: "Insecto",
      descripcion: "Las polillas son lepidópteros de pequeño tamaño que se han adaptado a convivir con nosotros en el interior de los edificios, convirtiéndose a veces en una plaga que devora alimentos, ropas, papel y otros bienes materiales que atesoramos los humanos. Los expertos en conservación del patrimonio en museos y casa antiguas del English Heritage saben bien cómo mantenerlas a raya de los materiales textiles y nos dan sus mejores consejos para prevenir su presencia en casa. En la naturaleza, las polillas se consideran unas excelentes recicladoras de la materia orgánica. Al alimentarse, sus larvas contribuyen a la transformación de la materia orgánica en los procesos de degradación que se llevan a cabo durante el compostaje, realizando una valiosa tarea de limpieza de desechos orgánicos y aprovechamiento de nutrientes dentro de la cadena trófica.",
      IMG: "https://cdn.pixabay.com/photo/2017/06/22/20/22/moth-2432376_960_720.jpg"
    },
    {
      id: 50,
      nombre: "Araña",
      nombreCientifico: "Araneae",
      nomRuta: "arana",
      clase: "Insecto",
      descripcion: "Las arañas son un conjunto de animales artrópodos muy abundante en todo el mundo y del que se conocen aproximadamente unas 45.000 especies diferentes. Son el orden más numeroso de la clase Arachnida y están lejanamente emparentadas con otros grupos de artrópodos, como los insectos. Se trata además de uno de los grupos más diversos, colocándose en cuanto al resto de organismos en el séptimo lugar respecto a su diversidad. Las arañas tienen el cuerpo dividido en dos partes denominadas tagmas, y cuentan con cuatro pares de patas. Se sabe que durante la prehistoria existieron algunas arañas que podían llegar a medir 50 centímetros, pero actualmente la más grande que existe tiene un tamaño de 30 centímetros. Por regla general son animales solitarios y depredadores de pequeños insectos a los cuales pueden dar caza a través de técnicas muy variadas. Algunas, de hecho, poseen potentes venenos los cuales un pequeña cantidad, puede acabar con la vida de un ser humano.",
      IMG: "https://cdn.pixabay.com/photo/2017/10/24/12/45/spider-2884460_960_720.jpg"
    }
  );

  Anfibios = new Array(

    {
        id: 51,
        nombre: "Rana",
        nombreCientifico: "Anura",
        nomRuta: "rana",
        clase: "Anfibio",
        descripcion: "Son un tipo de anfibios caracterizados principalmente por su gran capacidad de salto gracias a la morfología de sus extremidades posteriores, potentes y muy desarrolladas. Los ejemplares más pequeños miden aproximadamente 8 centímetros, mientras que los más grandes pueden alcanzar los 30 centímetros. Se han descrito unas 6.600 especies, la mayoría de las cuales reparte su vida entre el medio acuático y el terrestre. Se reproducen mediante huevos y se alimentan de pequeños invertebrados. Su hábitat se distribuye sobretodo en los bosques de las regiones tropicales, pero se pueden encontrar algunas hasta en las regiones subárticas. Las ranas se distinguen de los sapos básicamente por su piel, que en el caso de los sapos presenta algunas verrugas.",
        IMG: "https://cdn.pixabay.com/photo/2017/07/21/08/49/animal-2525109_960_720.jpg"
    },
    {
        id: 52,
        nombre: "Sapo",
        nombreCientifico: "Bufonidae",
        nomRuta: "sapo",
        clase: "Anfibio",
        descripcion: "Los bufónidos son una familia del orden Anura, un grupo de los anfibios conocidos. Muchas de sus especies se conocen con el nombre común de sapos; no obstante, numerosas especies pertenecientes a otras familias también son comúnmente denominados sapos. Esto es así porque las características que popularmente se utilizan para distinguir a las ranas de los sapos no son las mismas que se utilizan en la clasificación científica. Según la cultura popular, se diferencian en que las ranas tienen la piel lisa y húmeda, mientras que los sapos tienen la piel áspera y seca y son más caminadores que saltadores, de ahí que sus patas sean más cortas.",
        IMG: "https://cdn.pixabay.com/photo/2014/07/30/09/20/toad-405121_960_720.jpg"
    },
    {
        id: 53,
        nombre: "Salamandra",
        nombreCientifico: "Caudata",
        nomRuta: "salamandra",
        clase: "Anfibio",
        descripcion: "La salamandra es una especie de anfibio urodelo de la familia Salamandridae. Es el más común de los urodelos en Europa. De hábitos terrestres, únicamente entra en el agua para parir, y muchas subespecies lo hacen en tierra. Es un urodelo inconfundible, de fondo negro y manchas variadas amarillas muy intensas que pueden llegar a cubrir la casi totalidad del cuerpo. A veces también se aprecian manchas de color rojizo. ",
        IMG: "https://cdn.pixabay.com/photo/2014/03/23/15/14/fire-salamander-293324_960_720.jpg"
    },
    {
        id: 54,
        nombre: "Triton",
        nombreCientifico: "Triturus",
        nomRuta: "triton",
        clase: "Anfibio",
        descripcion: "Triturus es un género de anfibios caudados de la familia Salamandridae, compuesto por una serie de especies de Europa y Asia que se encuentran en cuerpos de agua, como estanques poco profundos, lagunas, arroyos y aguas profundas tranquilas; y terrestres, como páramos, pantanos y bosques. Este género se ha usado como especie indicadora debido a que su presencia o ausencia puede indicar la salud del ambiente, por ejemplo el pH del agua y otros contaminantes. Es considerado por la IUCN como una especie de preocupación menor; sin embargo, las poblaciones de las distintas especies han ido decreciendo y en otras se encuentran estables",
        IMG: "https://cdn.pixabay.com/photo/2018/05/16/21/03/newt-3407060_960_720.jpg"
    },
    {
        id: 55,
        nombre: "Gallipato",
        nombreCientifico: "Pleurodeles waltl",
        nomRuta: "gallipato",
        clase: "Anfibio",
        descripcion: "Es la especie de anfibio urodelo más grande que existe en Europa. En cuanto a la familia del gallipato, este anfibio es el representante más grande de la familia de Salamandridae, es decir, que es de la misma familia que las salamandras. Se trata de una especie de anfibio muy grande, con un tamaño que puede alcanza los 31 centímetros de longitud para los machos y unos 29 centímetros para las hembras, aunque los ejemplares criados en cautividad solo alcanzan entre 15 y 25 centímetros.",
        IMG: "https://www.brutal.org.es/wp-content/uploads/2018/10/gallipato-Ra%C3%BAl.jpg"
    }
);

Crustaceos = new Array(
    {
        id: 56,
        nombre: "Langosta",
        nombreCientifico: "Palinurus elephas",
        nomRuta: "langosta",
        clase: "Crustáceo",
        descripcion: "La langosta es un invertebrado crustáceo de color, en general, rojizo con algunas franjas amarillas o marrones. Los individuos más jóvenes tienen una franja roja en la parte superior del cuerpo. Los dos pares de antenas son de color amarillo. El segundo par de antenas es más largo que el cuerpo y puede llegar a medir 80 cm. Igual que el resto de decápodos tiene 5 pares de patas marchadoras, pero sin pinzas. Su tamaño máximo es de 50 cm. Los adultos pueden llegar a pesar hasta 8 kg. Es un animal de hábitos nocturnos y durante el día se esconde en cuevas o grietas, y sólo deja fuera las antenas, que pueden llegar a medir hasta 80 cm. Se alimenta de bivalvos y caracoles, a los que puede romper la concha aunque no tenga pinzas, y también carroña. La langosta es ovípara. Se ha observado hembras con huevos en septiembre y octubre.",
        IMG: "https://cdn.pixabay.com/photo/2016/10/09/19/23/lobster-1726627_960_720.jpg"
    },
    {
        id: 57,
        nombre: "Camaron",
        nombreCientifico: "Caridea",
        nomRuta: "camaron",
        clase: "Crustáceo",
        descripcion: "El camarón, llamado realmente carídeo (Caridea), es un crústaceo marino al que podemos encontrar en todos los fondos marinos del mundo. Son muy pequeños y algunas especies son realmente pequeños, tanto que muchos animales son incapaces de detectarlos. Hay más de 2.000 especies diferentes de camarones, siendo todos ellos animales invertebrados, es decir ninguna de esas especies posee de espina dorsal. Sin embargo, posee un exoesqueleto duro (cáscara) que suele ser transparentes e incoloro, lo que hace difíciles de ver en el agua.",
        IMG: "https://cdn.pixabay.com/photo/2017/06/11/22/55/shrimp-2393818_960_720.jpg"
    },
    {
        id: 58,
        nombre: "Cangrejo",
        nombreCientifico: "Brachyura",
        nomRuta: "cangrejo",
        clase: "Crustáceo",
        descripcion: "Los cangrejos son los crustáceos más populares de este planeta. Ya sea por su divertida forma de caminar de lado o por sus curiosas pinzas con las que se defienden, son uno de los animales que más simpatía despiertan. En este artículo le ofrecemos toda la información sobre estos decápodos con diez patas. Los cangrejos, como todos los crustáceos, se caracterizan por tener un exoesqueleto compuesto de quitina que actúa como un verdadero caparazón que les protege. Poseen cinco pares de patas, de las cuales, una de cada lado, han evolucionado hasta convertirse en pinzas que utilizan para alimentarse, para el cortejo y para defenderse de sus depredadores.",
        IMG: "https://cdn.pixabay.com/photo/2017/03/03/12/59/crab-2113971_960_720.jpg"
    },
    {
        id: 59,
        nombre: "Cangrejo Ermitaño",
        nombreCientifico: "Paguroidea",
        nomRuta: "cangrejo-ermitano",
        clase: "Crustáceo",
        descripcion: "Los paguroideos (Paguroidea) son una superfamilia de crustáceos decápodos, conocidos popularmente como cangrejos ermitaños o paguros. Estos crustáceos tienen en común el uso de conchas de caracol para cubrir su abdomen, que es más blando que el de otros cangrejos. Este tipo de relación interespecífica que mantiene con las conchas de los moluscos muertos se denomina tanatocresis, y es uno de los pocos animales que la realiza. Existen alrededor de 500 especies de cangrejos ermitaños alrededor del mundo, siendo la mayoría acuáticos, pero existiendo algunos terrestres. Solo la parte delantera está cubierta por un exoesqueleto rígido. Para protegerse se refugia dentro de conchas vacías de moluscos. Su abdomen está enroscado para que pueda caber dentro de la concha; además, sus patas y pinzas le permiten bloquear la entrada. A medida que el cangrejo crece, debe cambiar de casa. Empieza por inspeccionar detenidamente con sus pinzas las conchas vacías y cuando encuentra la adecuada, se muda rápidamente. Para los cangrejos ermitaños encontrar una concha vacía es cuestión de vida o muerte, por lo que son frecuentes las luchas entre ellos cuando hay pocas disponibles.",
        IMG: "https://cdn.pixabay.com/photo/2019/02/17/16/11/hermit-crab-4002529_960_720.jpg"
    },
    {
        id: 60,
        nombre: "Percebes",
        nombreCientifico: "Pollicipes pollicipes",
        nomRuta: "percebes",
        clase: "Crustáceo",
        descripcion: "Es un crustáceo cirrópodo, es decir, son crustáceos marinos, hermafroditas, que viven fijos al fondo o como parásitos, con el cuerpo cubierto por un caparazón, y sus patas torácicas, en forma de cirros, actúan como filtros en la captura de las partículas alimenticias. Viven en zonas de fuertes resacas donde el mar rompe violentamente. Forma grupos o piñas que están fijadas al sustrato por unas glándulas cementantes segregadas por unas glándulas situadas tras la cabeza. Mantiene competencia con el mejillón por estos enclaves. Se alimenta del fitoplancton de las aguas que baten las olas, por medio de una especie de pluma filamentosa que emerge de su uña en cada recogida de la ola, conocida como cirro, el cual puede moverse unas 140 veces por minuto.",
        IMG: "https://cdn.pixabay.com/photo/2014/08/15/21/52/mussels-419050_960_720.jpg"
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
