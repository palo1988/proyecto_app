//rnf
import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image, Button } from "@rneui/base";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";

const LoginScreen = () => {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/llms.jpg")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>¡Crea tu cuenta!</Text>
        <LoginForm />
        <Text style={styles.description}>
          ¿Deseas crearte una cuenta?{" "}
          <Text style={styles.register} onPress={goToRegister}>
            Regístrate aquí.{" "}
          </Text>
        </Text>
        {/* <Button
          title="Presiona aquí"
          onPress={goToRegister}
          buttonStyle={styles.btnStyle}
        /> */}
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
