import { animales } from '../../Interface/animales';

export class crustaceos{

    Crustaceos = new Array<animales>(
        {
            id: 58,
            nombre: "Langosta",
            nombreCientifico: "Palinurus elephas",
            nomRuta: "langosta",
            clase: "Crustáceo",
            descripcion: "La langosta es un invertebrado crustáceo de color, en general, rojizo con algunas franjas amarillas o marrones. Los individuos más jóvenes tienen una franja roja en la parte superior del cuerpo. Los dos pares de antenas son de color amarillo. El segundo par de antenas es más largo que el cuerpo y puede llegar a medir 80 cm. Igual que el resto de decápodos tiene 5 pares de patas marchadoras, pero sin pinzas. Su tamaño máximo es de 50 cm. Los adultos pueden llegar a pesar hasta 8 kg. Es un animal de hábitos nocturnos y durante el día se esconde en cuevas o grietas, y sólo deja fuera las antenas, que pueden llegar a medir hasta 80 cm. Se alimenta de bivalvos y caracoles, a los que puede romper la concha aunque no tenga pinzas, y también carroña. La langosta es ovípara. Se ha observado hembras con huevos en septiembre y octubre.",
            IMG: "https://cdn.pixabay.com/photo/2016/10/09/19/23/lobster-1726627_960_720.jpg"
        },
        {
            id: 59,
            nombre: "Camaron",
            nombreCientifico: "Caridea",
            nomRuta: "camaron",
            clase: "Crustáceo",
            descripcion: "El camarón, llamado realmente carídeo (Caridea), es un crústaceo marino al que podemos encontrar en todos los fondos marinos del mundo. Son muy pequeños y algunas especies son realmente pequeños, tanto que muchos animales son incapaces de detectarlos. Hay más de 2.000 especies diferentes de camarones, siendo todos ellos animales invertebrados, es decir ninguna de esas especies posee de espina dorsal. Sin embargo, posee un exoesqueleto duro (cáscara) que suele ser transparentes e incoloro, lo que hace difíciles de ver en el agua.",
            IMG: "https://cdn.pixabay.com/photo/2017/06/11/22/55/shrimp-2393818_960_720.jpg"
        },
        {
            id: 60,
            nombre: "Cangrejo",
            nombreCientifico: "Brachyura",
            nomRuta: "cangrejo",
            clase: "Crustáceo",
            descripcion: "Los cangrejos son los crustáceos más populares de este planeta. Ya sea por su divertida forma de caminar de lado o por sus curiosas pinzas con las que se defienden, son uno de los animales que más simpatía despiertan. Los cangrejos, como todos los crustáceos, se caracterizan por tener un exoesqueleto compuesto de quitina que actúa como un verdadero caparazón que les protege. Poseen cinco pares de patas, de las cuales, una de cada lado, han evolucionado hasta convertirse en pinzas que utilizan para alimentarse, para el cortejo y para defenderse de sus depredadores.",
            IMG: "https://cdn.pixabay.com/photo/2017/03/03/12/59/crab-2113971_960_720.jpg"
        },
        {
            id: 61,
            nombre: "Cangrejo Ermitaño",
            nombreCientifico: "Paguroidea",
            nomRuta: "cangrejo-ermitano",
            clase: "Crustáceo",
            descripcion: "Los paguroideos (Paguroidea) son una superfamilia de crustáceos decápodos, conocidos popularmente como cangrejos ermitaños o paguros. Estos crustáceos tienen en común el uso de conchas de caracol para cubrir su abdomen, que es más blando que el de otros cangrejos. Este tipo de relación interespecífica que mantiene con las conchas de los moluscos muertos se denomina tanatocresis, y es uno de los pocos animales que la realiza. Existen alrededor de 500 especies de cangrejos ermitaños alrededor del mundo, siendo la mayoría acuáticos, pero existiendo algunos terrestres. Solo la parte delantera está cubierta por un exoesqueleto rígido. Para protegerse se refugia dentro de conchas vacías de moluscos. Su abdomen está enroscado para que pueda caber dentro de la concha; además, sus patas y pinzas le permiten bloquear la entrada. A medida que el cangrejo crece, debe cambiar de casa. Empieza por inspeccionar detenidamente con sus pinzas las conchas vacías y cuando encuentra la adecuada, se muda rápidamente. Para los cangrejos ermitaños encontrar una concha vacía es cuestión de vida o muerte, por lo que son frecuentes las luchas entre ellos cuando hay pocas disponibles.",
            IMG: "https://cdn.pixabay.com/photo/2019/02/17/16/11/hermit-crab-4002529_960_720.jpg"
        },
        {
            id: 62,
            nombre: "Percebes",
            nombreCientifico: "Pollicipes pollicipes",
            nomRuta: "percebes",
            clase: "Crustáceo",
            descripcion: "Es un crustáceo cirrópodo, es decir, son crustáceos marinos, hermafroditas, que viven fijos al fondo o como parásitos, con el cuerpo cubierto por un caparazón, y sus patas torácicas, en forma de cirros, actúan como filtros en la captura de las partículas alimenticias. Viven en zonas de fuertes resacas donde el mar rompe violentamente. Forma grupos o piñas que están fijadas al sustrato por unas glándulas cementantes segregadas por unas glándulas situadas tras la cabeza. Mantiene competencia con el mejillón por estos enclaves. Se alimenta del fitoplancton de las aguas que baten las olas, por medio de una especie de pluma filamentosa que emerge de su uña en cada recogida de la ola, conocida como cirro, el cual puede moverse unas 140 veces por minuto.",
            IMG: "https://cdn.pixabay.com/photo/2014/08/15/21/52/mussels-419050_960_720.jpg"
        }
    );

    listaDeCrustaceos() {return this.Crustaceos;}
}