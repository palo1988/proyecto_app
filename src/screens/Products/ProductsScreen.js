import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/screenName";
import { Image } from "@rneui/base";
import { styles } from "./ProductScreen.styles";
import { ListItem, Avatar } from "@rneui/base";

const ProductScreen = () => {
  const navigation = useNavigation();
  <Image
    source={require("../../../assets/img/musica4.png")}
    style={styles.image}
  />;

  const products = [
    {
      id: "001",
      name: "Pink Floyd",
      type: "Grupo",
      members:
        "Syd Barrett, Roger Waters, David Gilmour, Nick Mason, Richard Wright, Bob Klose.",
      status: "Inactivo",
      song: "Wish You Were Here",
      descripcion:
        "(1965): Considerada un icono cultural del siglo XX y una de las bandas más influyentes, exitosas y aclamadas en la historia de la música popular, obtuvo gran popularidad dentro del circuito underground gracias a su música psicodélica y espacial, que con el paso del tiempo evolucionó hacia el rock progresivo y el rock sinfónico adquiriendo la popularidad con la que hoy son recordados.",
      uri: require("../../../assets/img/pfband.png"),
    },
    {
      id: "002",
      name: "The Doors",
      type: "Grupo",
      members: "Jim Morrison, Ray Manzarek, John Densmore, Robby Krieger",
      status: "Disuelto",
      song: "Riders on the Storm",
      descripcion:
        "(1965): El estilo musical de la banda se basa en una mezcla de blues y psicodelia. Manzarek aporta elementos de música clásica y del blues (por la influencia de sus padres); Krieger, del flamenco y Densmore del jazz junto con aportes latinos. Las letras del grupo, compuestas principalmente por Jim Morrison, se apartan en buena medida de las convenciones del pop de su época.",
      uri: require("../../../assets/img/thedoors.jpg"),
    },
    {
      id: "003",
      name: "The Neighbourhood",
      type: "Grupo",
      members: "Jesse Rutherford, Zach Abels, Jeremy Freedman, Mikey Margott",
      status: "Inactivo",
      song: "Sweather Weather",
      descripcion:
        "(2011): Banda de música alternativa rock estadounidense. Con una estética retro blanco y negro, que se expresa en el arte de sus discos y en sus vídeos, los liderados por el cantante y compositor Jesse Rutherford presentan, a lo largo de las 11 canciones de su álbum debut, un viaje sonoro atmosférico, por momentos oscuros y si acaso alegres, con melodías que bien parecen diseñadas para acompañar las imágenes sin color de todo su material visual.",
      uri: require("../../../assets/img/thenbh.jpg"),
    },
    {
      id: "004",
      name: "Spoon ",
      type: "Grupo",
      members: "Britt Daniel, Jim Eno, Alex fischel, Gerardo Larios.",
      status: "Activo",
      song: "Inside out",
      descripcion:
        "(1993): Banda de indie rock de Austin, Texas. Son conocidos por sus melodías tarareables, inspiradas en la tradición folk-rock-pop norteamericana, sobre estructuras instrumentales alejadas de lo típico. Canciones compuestas y producidas de manera limpia, arriesgada y creativa. Debido a su constante éxito con la crítica especializada, Spoon es considerada una de las bandas más sólidas y respetadas dentro de la escena indie.",
      uri: require("../../../assets/img/spoon.png"),
    },
    {
      id: "005",
      name: "Arctic Monkeys",
      type: "Grupo",
      members: "Alex Turner, Matt Helders, Jamie Cook, Nick O'Malley",
      status: "Activo",
      song: "I Wanna be Yours",
      descripcion:
        "(2002): Banda británica de garage rock, formada en Sheffield, Reino Unido. Fueron considerados como una de las primeras bandas en hacerse conocidas al público gracias a la difusión de sus canciones por Internet, por lo cual se los catalogó como «la banda que pudo haber cambiado el mercado de la música».",
      uri: require("../../../assets/img/AM.jpg"),
    },
    {
      id: "006",
      name: "The Score",
      type: "Dúo",
      members: "Edan Dover, Eddie Ramirez Jr.",
      status: "Activo",
      song: "Stronger",
      descripcion:
        "(2014): Banda estadounidense de indie rock formada en Los Ángeles, California, Estados Unidos. Sus integrantes son Eddie Anthony y Edan Dover. Se caracteriza por haber participado en diversos comerciales de manera anónima hasta firmar con Republic Records en 2015 después de su sencillo «Oh My Love», que alcanzó éxito entre la población anglosajona.",
      uri: require("../../../assets/img/thescore.jpg"),
    },

    {
      id: "007",
      name: "Oasis",
      type: "Grupo",
      members:
        "Liam Gallagher, Noel Gallagher, Paul Arthurs, Paul McGuigan, Tony McCarroll, Alan White, Gem Archer, Andy Bell, Zak Starkey",
      status: "Inactivo",
      song: "Wonderwall",
      descripcion:
        "(1991): Banda inglesa de rock alternativo, formada en Mánchester. Ha sido considerado como uno de los grupos musicales más importantes en la historia musical de Reino Unido, habiendo entrado en varias ocasiones en el Libro Guinness de los récords (actualmente siguen teniendo uno de ellos en su haber). Publicaron 33 singles, de los cuales 9 alcanzaron el puesto n.º 1 de las listas británicas y 2 el puesto n.º 1 de las listas estadounidenses.",
      uri: require("../../../assets/img/oasis.jpg"),
    },
    {
      id: "008",
      name: "blackbear",
      type: "Solista",
      members: "Matthew Tyler Musto",
      status: "Activo",
      song: "idfc",
      descripcion:
        "(2008): Es un cantante, compositor y productor musical estadounidense. Ha publicado cinco álbumes de estudio, seis EP, un álbum recopilatorio y dos álbumes colaborativos. Musto también es miembro del dúo alternativo/hip-hop/R&B estadounidense Mansionz, junto al que también es cantante y productor estadounidense Mike Posner.",
      uri: require("../../../assets/img/blackbear.jpg"),
    },
    {
      id: "009",
      name: "The Weeknd",
      type: "Solista",
      members: "Abel Makkonen Tesfaye",
      status: "Activo",
      song: "Blinding Lights",
      descripcion:
        "(2009):  Cantante, rapero, compositor, productor discográfico y actor canadiense nacionalizado estadounidense. Conocido por su versatilidad sónica y lirismo oscuro, su música explora el escapismo, el romance y la melancolía, y a menudo se inspira en experiencias personales. Entre los artistas musicales con mayores ventas del mundo con más de 75 millones de discos vendidos,​ tiene varios récords de streaming y de las listas de Billboard. Es el primer artista en debutar simultáneamente entre los tres primeros lugares de la lista Hot R&B/Hip-Hop Songs.",
      uri: require("../../../assets/img/theweeknd.jpg"),
    },
    {
      id: "010",
      name: "Red Hot Chilli Pepper's",
      type: "Grupo",
      members: "Anthony Kiedis, Flea, Chad Smith, John Frusciante.",
      status: "Activo",
      song: "Californication",
      descripcion:
        "(1983): Banda de rock estadounidense formada en 1983 en Los Ángeles, California. El estilo musical de la banda fusiona el funk tradicional con el rock y el rock alternativo incluyendo elementos de otros géneros como el rap, pop rock, heavy metal, dance, punk, hip hop e indie rock. Además, también suelen ser considerados los inventores del punk funk. Son considerados una de las bandas más exitosas y más influyentes del rock alternativo en su historia.",
      uri: require("../../../assets/img/rhcp.png"),
    },
  ];

  return (
    <View>
      {products.map((product) => {
        return (
          <>
            <ListItem bottomDivider>
              <Avatar rounded source={product.uri} />
              <ListItem.Content>
                <ListItem.Title>{product.id}</ListItem.Title>
                <ListItem.Subtitle
                  onPress={() =>
                    navigation.navigate(screen.products.detailProduct, product)
                  }
                >
                  {product.name}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </>
        );
      })}
    </View>
  );
};
export default ProductScreen;
