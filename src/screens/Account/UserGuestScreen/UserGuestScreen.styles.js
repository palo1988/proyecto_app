import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 10,
  },
  image: {
    resizeMode: "center",
    height: 400, //alto
    width: "100%", //ancho
    marginBottom: 10,
  },
  imagebg: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
    color: "#9370db",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
    color: "#fffaf0",
    backgroundColor: "#000000c0",
  },
  btnStyle: {
    backgroundColor: "#663399",
    borderRadius: 5,
  },
});
