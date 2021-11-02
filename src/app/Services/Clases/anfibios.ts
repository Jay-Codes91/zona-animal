import { animales } from '../../Interface/animales';

export class anfibios{

    Anfibios = new Array<animales>(

        {
            id: 53,
            nombre: "Rana",
            nombreCientifico: "Anura",
            nomRuta: "rana",
            clase: "Anfibio",
            descripcion: "Son un tipo de anfibios caracterizados principalmente por su gran capacidad de salto gracias a la morfología de sus extremidades posteriores, potentes y muy desarrolladas. Los ejemplares más pequeños miden aproximadamente 8 centímetros, mientras que los más grandes pueden alcanzar los 30 centímetros. Se han descrito unas 6.600 especies, la mayoría de las cuales reparte su vida entre el medio acuático y el terrestre. Se reproducen mediante huevos y se alimentan de pequeños invertebrados. Su hábitat se distribuye sobretodo en los bosques de las regiones tropicales, pero se pueden encontrar algunas hasta en las regiones subárticas. Las ranas se distinguen de los sapos básicamente por su piel, que en el caso de los sapos presenta algunas verrugas.",
            IMG: "https://cdn.pixabay.com/photo/2017/07/21/08/49/animal-2525109_960_720.jpg"
        },
        {
            id: 54,
            nombre: "Sapo",
            nombreCientifico: "Bufonidae",
            nomRuta: "sapo",
            clase: "Anfibio",
            descripcion: "Los bufónidos son una familia del orden Anura, un grupo de los anfibios conocidos. Muchas de sus especies se conocen con el nombre común de sapos; no obstante, numerosas especies pertenecientes a otras familias también son comúnmente denominados sapos. Esto es así porque las características que popularmente se utilizan para distinguir a las ranas de los sapos no son las mismas que se utilizan en la clasificación científica. Según la cultura popular, se diferencian en que las ranas tienen la piel lisa y húmeda, mientras que los sapos tienen la piel áspera y seca y son más caminadores que saltadores, de ahí que sus patas sean más cortas.",
            IMG: "https://cdn.pixabay.com/photo/2014/07/30/09/20/toad-405121_960_720.jpg"
        },
        {
            id: 55,
            nombre: "Salamandra",
            nombreCientifico: "Caudata",
            nomRuta: "salamandra",
            clase: "Anfibio",
            descripcion: "La salamandra es una especie de anfibio urodelo de la familia Salamandridae. Es el más común de los urodelos en Europa. De hábitos terrestres, únicamente entra en el agua para parir, y muchas subespecies lo hacen en tierra. Es un urodelo inconfundible, de fondo negro y manchas variadas amarillas muy intensas que pueden llegar a cubrir la casi totalidad del cuerpo. A veces también se aprecian manchas de color rojizo. ",
            IMG: "https://cdn.pixabay.com/photo/2014/03/23/15/14/fire-salamander-293324_960_720.jpg"
        },
        {
            id: 56,
            nombre: "Triton",
            nombreCientifico: "Triturus",
            nomRuta: "triton",
            clase: "Anfibio",
            descripcion: "Triturus es un género de anfibios caudados de la familia Salamandridae, compuesto por una serie de especies de Europa y Asia que se encuentran en cuerpos de agua, como estanques poco profundos, lagunas, arroyos y aguas profundas tranquilas; y terrestres, como páramos, pantanos y bosques. Este género se ha usado como especie indicadora debido a que su presencia o ausencia puede indicar la salud del ambiente, por ejemplo el pH del agua y otros contaminantes. Es considerado por la IUCN como una especie de preocupación menor; sin embargo, las poblaciones de las distintas especies han ido decreciendo y en otras se encuentran estables",
            IMG: "https://cdn.pixabay.com/photo/2018/05/16/21/03/newt-3407060_960_720.jpg"
        },
        {
            id: 57,
            nombre: "Gallipato",
            nombreCientifico: "Pleurodeles waltl",
            nomRuta: "gallipato",
            clase: "Anfibio",
            descripcion: "Es la especie de anfibio urodelo más grande que existe en Europa. En cuanto a la familia del gallipato, este anfibio es el representante más grande de la familia de Salamandridae, es decir, que es de la misma familia que las salamandras. Se trata de una especie de anfibio muy grande, con un tamaño que puede alcanza los 31 centímetros de longitud para los machos y unos 29 centímetros para las hembras, aunque los ejemplares criados en cautividad solo alcanzan entre 15 y 25 centímetros.",
            IMG: "https://www.brutal.org.es/wp-content/uploads/2018/10/gallipato-Ra%C3%BAl.jpg"
        }
    );

    listaDeAnfibios() {return this.Anfibios;}
}