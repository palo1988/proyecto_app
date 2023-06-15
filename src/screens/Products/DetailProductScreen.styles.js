import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    height: 250,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    marginHorizontal: 20,
  },

  title1: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  data: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5,
  },

  description: {
    textAlign: "justify",
    marginBottom: 10,
  },
});
