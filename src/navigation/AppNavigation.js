import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { screen } from "../utils/screenName";
import ProductsStack from "./ProductsStack";

import AccountStack from "./AccountStack";

//Crear una instancia para accder a la navegación
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#663399",
        tabBarInactiveTintColor: "#708090",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
      <Tab.Screen
        name={screen.products.tab}
        component={ProductsStack}
        options={{ title: "Musica" }}
      />
    </Tab.Navigator>
  );
};

//función - permitir cabiar los íconos
const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name == screen.products.tab) {
    iconName = "music-box-multiple";
  }

  if (route.name == screen.account.tab) {
    iconName = "headphones-box";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
