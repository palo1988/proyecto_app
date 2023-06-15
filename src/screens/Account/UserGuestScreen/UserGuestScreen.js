//rnf+TAB
import React from "react";
import { ScrollView, ImageBackground } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreen.styles";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };
  const image = require("../../../../assets/img/vinilo.jpg");

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.imagebg}>
        <Text style={styles.title}>Consultar tu perfil de MuSiCarDE </Text>
        <Text style={styles.description}>
          Servicio de música, pódcasts y vídeos digitales que te da acceso a
          millones de canciones y a otro contenido de creadores de todo el
          mundo. Las funciones básicas, como escuchar música, son totalmente
          gratis.
        </Text>

        <Button
          title="Ingresa a tu cuenta"
          onPress={goToLogin}
          buttonStyle={styles.btnStyle}
        />
      </ImageBackground>
    </ScrollView>
  );
};

export default UserGuestScreen;
