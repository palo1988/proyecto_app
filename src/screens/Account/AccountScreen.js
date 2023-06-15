import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserGuestScreen from "./UserGuestScreen/UserGuestScreen";
import UserLoggerScreen from "./UserLoggerScreen";

const AccountScreen = () => {
  //useState
  const [hasLogged, setHasLogged] = useState(false);
  //useEffect
  useEffect(() => {
    //verifica si el usuario incio sesión o no
    const auth = getAuth(); //no login -> null
    //veifica si el estado de autentificacón cambio
    onAuthStateChanged(auth, (user) => {
      //console.log(user);
      setHasLogged(user != null ? true : false);
    });
  }, []);

  return hasLogged == true ? <UserLoggerScreen /> : <UserGuestScreen />;
};

export default AccountScreen;
