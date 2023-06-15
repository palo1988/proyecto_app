import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { styles } from "./UserLoggerScreen.styles";
const image = require("../../../assets/img/fondo.png");

const UserLoggerScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Bienvenido </Text>
      </ImageBackground>
    </View>
  );
};

export default UserLoggerScreen;
