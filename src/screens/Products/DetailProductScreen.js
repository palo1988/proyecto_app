import { ScrollView, Text } from "react-native";
import React from "react";
import { ListItem, Avatar } from "@rneui/base";
import { Image } from "@rneui/base";
import { styles } from "./DetailProductScreen.styles";

const DetailProductScreen = ({ route }) => {
  const product = route.params;

  return (
    <ScrollView style={styles.content}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.descripcion}</Text>
      <Image source={product.uri} style={styles.image} />
      <Text style={styles.title1}>Datos</Text>
      <Text style={styles.data}>{product.type}</Text>
      <Text style={styles.data}>{product.members}</Text>
      <Text style={styles.data}>{product.status}</Text>
      <Text style={styles.data}>{product.song}</Text>
    </ScrollView>
  );
};
export default DetailProductScreen;
