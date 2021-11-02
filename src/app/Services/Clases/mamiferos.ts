import { animales } from '../../Interface/animales';

export class mamiferos{
    
    Mamiferos = new Array<animales>(
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
        },
        {
          id: 11,
          nombre: "Mapache",
          nombreCientifico: "Procyon",
          nomRuta: "mapache",
          clase: "Mamifero",
          descripcion: "El Mapache es un mamífero de la familia de los Procyonidae y original de América (su distribución va desde Canadá a Panamá). Su hábitat comprende lugares con árboles, cercanos a algún depósito de agua o curso, o manglares costeros; es una especie que se ha adaptado perfectamente a zonas urbanas. Su peso medio es de siete a ocho kilogramos, pero ha llegado a alcanzar los 28 kilogramos. El pelaje es gris tirando a negro, en ocasiones rojizo y marrón, aunque son la cola anillada y el “antifaz” en el rostro sus características físicas más reconocidas. El Mapache posee una ancha cabeza en la parte posterior, hocico puntiagudo y pulgares no oponibles; sus patas están provistas de cinco dedos con garras curvadas, no retráctiles, mientras que las plantas de las patas son desnudas y planas. Las extremidades anteriores, más pequeñas y hábiles, le sirven para agarrar comida (de hecho, está considerado “el rey de los ladrones de basura” en algunas ciudades de Estados Unidos); las posteriores, soportan el peso.",
          IMG: "https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081__480.jpg"
        },
        {
          id: 12,
          nombre: "Gorila",
          nombreCientifico: "Gorilla",
          nomRuta: "gorila",
          clase: "Mamifero",
          descripcion: "Los gorilas pertenecientes al género Gorilla son primates herbívoros con composiciones genéticas muy parecidas a las del ser humano. El término Gorila, fue asignado por pobladores africanos cuyo significado es “persona peluda”. El gorila es el más grande de todos los primates. Éstos se desplazan en cuatro patas. Sus extremidades superiores son similares a los brazos humanos que también utilizan para apoyarse al andar. Los machos adultos miden hasta 1.8 metros de altura y pesan más de 135 kilos. Las hembras pesan la mitad que éstos. Algo que los diferencia es la mandíbula protuberante del macho, pues es mayor que el maxilar.",
          IMG: "https://cdn.pixabay.com/photo/2020/09/12/09/26/gorilla-5565295_960_720.jpg"
        }
      );

      listaDeMamiferos() {return this.Mamiferos;}
}