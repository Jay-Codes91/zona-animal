import { animales } from '../../Interface/animales';

export class aves{

    Aves = new Array<animales>(
        {
          id:13,
          nombre: "Lechuza",
          nombreCientifico: "tyto alba",
          nomRuta: "lechuza",
          clase: "Aves",
          descripcion: "De tamaño mediano, con cuerpo alargado y cabeza voluminosa libre de penachos, luce un acolchado y tupido plumaje de color pardo anaranjado en el dorso, con tonos grises y finamente punteado de blanco y negro. Las partes inferiores son de un blanco puro o anaranjado (dependiendo de la fase) con pecas negras.",
          IMG: "https://cdn.pixabay.com/photo/2018/07/09/19/07/eastern-screech-owl-3526934_960_720.jpg"
        },
        {
          id:14,
          nombre: "Gallina",
          nombreCientifico: "Gallus gallus domesticus",
          nomRuta: "gallina",
          clase: "Aves",
          descripcion: "Los nombres comunes son: gallo, para el macho; gallina, para la hembra, y pollo, para los subadultos. Es el ave más numerosa del planeta, pues se calcula que el número de ejemplares supera los dieciséis mil millones. Los gallos y gallinas se crían principalmente por su carne y por sus huevos. También se aprovechan sus plumas y algunas variedades se crían y entrenan para su uso en peleas de gallos y como aves ornamentales.",
          IMG: "https://cdn.pixabay.com/photo/2018/10/05/23/24/chicken-3727097_960_720.jpg"
        },
        {
          id:15,
          nombre: "Pato",
          nombreCientifico: "Anas platyrhynchos domesticus",
          nomRuta: "pato",
          clase: "Aves",
          descripcion: "Pato es el nombre común para ciertas aves de la familia Anatidae, principalmente de la subfamilia Anatinae y dentro de ella del género Anas. No son un grupo monofilético, ya que no se incluyen los cisnes ni los gansos.",
          IMG: "https://cdn.pixabay.com/photo/2013/04/22/20/02/ruddy-shelduck-106544_960_720.jpg"
        },
        {
          id: 16,
          nombre: "Paloma",
          nombreCientifico: "Columba livia",
          nomRuta: "paloma",
          clase: "Aves",
          descripcion: "La Paloma Huilota es una paloma de aspecto elegante, cola larga, y cabeza pequeña, que se encuentra en casi toda Norte América. Suele posarse en los cables del alumbrado público y busca semillas en el suelo; su vuelo es rápido y recto como el de un balazo. Su arrullo suave y largo suena como un lamento. Cuando van a emprender vuelo, sus alas suenan como un silbido fuerte o rechinaran. Las Palomas Huilotas son las aves mas cazadas en Norte América.",
          IMG: "https://cdn.pixabay.com/photo/2020/09/12/18/18/collared-5566393_960_720.jpg"
        },
        {
          id: 17,
          nombre: "Aguila",
          nombreCientifico: "Aquila Chrysaetos",
          nomRuta: "aguila",
          clase: "Aves",
          descripcion: "Majestuosas, sigilosas, veloces, inteligentes y hábiles: si el mar es de los tiburones y la sabana de los leones, la hegemonía del reino de los cielos es delas águilas. Pertenecientes a las familia Accipitridae, este tipo de aves sobrevuelan los cielos de todo el mundo excepto los antárticos. Depredadores por excelencia estos pájaros son temibles aves de presa.  Cuentan con un pico fuerte y robusto acabado en punta y hacia abajo que les facilita la tarea de separar los pedazos de carne de sus víctimas. También gozan de un sentido de la vista extraordinario con el que pueden divisar a sus presas a grandes distancias y además, sus potentes y robustas garras les permiten atrapar animales más grandes que ellas y trasladarlos por el aire. ",
          IMG: "https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg"
        },
        {
          id: 18,
          nombre: "Pavo real",
          nombreCientifico: "Pavo Cristatus",
          nomRuta: "pavo-real",
          clase: "Aves",
          descripcion: "Los pavos reales, pertenecientes a la familia de las Phaisanidae, son aves grandes y muy coloridas (sobre todo azules y verdes) conocidas por su iridiscente cola. Esta llamativa cola, que es el 60 por ciento del cuerpo del animal, luce un ocelo (“ojo”) con variedades de azul, dorado, rojo y otras tonalidades. Los pavos reales utilizan su cola en los rituales de apareamiento y cortejo. Pueden abrirla en un espectacular abanico que se extiende desde la parte dorsal del animal hasta tocar el suelo en cada lado. Se dice que las hembras eligen a sus compañeros en función del tamaño, color y calidad de estas extravagantes colas.",
          IMG: "https://cdn.pixabay.com/photo/2013/03/04/18/49/peacock-90051_960_720.jpg"
        },
        {
          id: 19,
          nombre: "Loro",
          nombreCientifico: "Psittacoidea",
          nomRuta: "loro",
          clase: "Aves",
          descripcion: "Los loros conforman una orden muy amplia que incluye a más de 350 aves, como guacamayos, amazonas, loriquitos, agapornis y cacatúas. A pesar de la gran variedad de aves de esta familia, existen similitudes entre ellos. Todos tienen un pico curvo y patas cigodáctilas, es decir, tienen cuatro dedos en cada pata: dos están dirigidos hacia delante y dos hacia atrás. La mayoría de los loros comen frutas, flores, brotes, frutos secos, semillas y algunos animales pequeños como insectos. Los loros viven en regiones de clima cálido y se encuentran por todo el mundo. En Australasia, América Central y Sudamérica se encuentra la mayor diversidad.",
          IMG: "https://cdn.pixabay.com/photo/2010/12/23/13/36/bird-4078_960_720.jpg"
        },
        {
          id: 20,
          nombre: "Gaviota",
          nombreCientifico: "Laridae",
          nomRuta: "gaviota",
          clase: "Aves",
          descripcion: "Las gaviotas son aves voladoras de la familia Laridae. Se relacionan estrechamente con los gaviotines de la familia Sternidae, y tienen más a distancia con las aves zancudas. La mayoría de las gaviotas pertenece al género Larus. Son en general pájaros grandes, en su mayoría de plumaje gris o blanco, a menudo con señales negras en la cabeza o las alas. Tienen picos robustos, bastante largos. Las gaviotas adultas tienen la cabeza, el cuello, la cola y la parte inferior del cuerpo de un color blanco puro, mientras que la espalda y el dorso de las alas son de color gris pálido, lo que le da el nombre español de gaviota argéntea. En Catalunya se la conoce como “gavià argentat”, “gavota” en Galicia o “kaio” en Euskadi. En inglés se la conoce como “herring gull”.",
          IMG: "https://cdn.pixabay.com/photo/2013/02/09/10/57/seagull-79658_960_720.jpg"
        },
        {
          id: 21,
          nombre: "Colibri",
          nombreCientifico: "Trochiladae",
          nomRuta: "colibri",
          clase: "Aves",
          descripcion: "Es el ave más pequeño del mundo, su peso es de dos gramos, tiene el pico largo y estrecho, y una lengua en forma de trompa. El colibrí tiene las patas débiles y cortas, la cola adopta formas extrañas y está forrada de varios adornos. El pico es muy largo, puntiagudo y guarda en su interior una lengua en forma de trompa, que usa para absorber el néctar de las flores que proporcionan su alimento. Su forma de volar es parecida a la de un insecto y se sostiene en un punto exacto del espacio gracias a la rápida vibración de sus alas. Cuando vuela, es muy difícil distinguirla, y parece como si su cuerpo estuviera suspendido en el vacío mientras recoge el néctar. Esta rápida vibración, provoca un ruido tipo susurro. ",
          IMG: "https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg"
        },
        {
          id: 22,
          nombre: "Tucan",
          nombreCientifico: "Ramphastidae",
          nomRuta: "tucan",
          clase: "Aves",
          descripcion: "El toco tucán presenta un plumaje con una coloración negro mate en casi todo el cuerpo, a excepción de una parte de su pecho, garganta y lados de la cabeza, siendo de color blanco. Una característica bastante llamativa es el pico que posee un vivo color amarillo, y en la punta de la mandíbula superior presenta una parte en color negro, lo mismo que en su base; dentro del grupo de los tucanes es el ave con el pico más grande pues llega a medir hasta 20 cm., de largo y está constituido por una red de fibras óseas lo que le proporciona fuerza y ligereza a la vez. En cuanto a su lengua, ésta es delgada y notablemente larga, puede llegar a medir hasta 15 cm. El macho es más grande que la hembra; sin embargo, ambos sexos poseen la misma coloración en su plumaje. El toco tucán es un ave que gusta de permanecer en las copas altas de los árboles, donde salta de rama en rama. Por lo que respecta a su nido, éste es construido regularmente en los agujeros de los árboles muertos; dichos agujeros llegan a tener hasta 2 m. de profundidad, y pueden ser usados durante varios años. Tanto el macho como la hembra participan en el proceso de incubación.",
          IMG: "https://cdn.pixabay.com/photo/2015/11/03/16/00/keel-billed-toucan-1021048_960_720.jpg"
        }
      );

      listaDeAves(){return this.Aves;}
}

