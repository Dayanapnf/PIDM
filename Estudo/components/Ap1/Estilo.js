import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  icon: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    padding: 10,
  },
  dados: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    padding: 10,
  },
  title: {
    padding: 10,
  },
  containerDados: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    padding: 10,
  },
  preço:{
    marginLeft:100,
  }
});

export default estilos;
