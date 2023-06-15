import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";

import ProductScreen from "../screens/Products/ProductsScreen";

import DetailProductScreen from "../screens/Products/DetailProductScreen";

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.products.products}
        component={ProductScreen}
        options={{ title: "Artistas" }}
      />
      <Stack.Screen
        name={screen.products.detailProduct}
        component={DetailProductScreen}
        options={{ title: "Descripción" }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;
