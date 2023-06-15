import React from "react";
import { View } from "react-native";
import { styles } from "./RegisterScreen.styles";
import { Image } from "@rneui/base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../../components/Auth/RegisterForm/RegisterForm";

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/msc1.jpg")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
