import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1, //faz ocupar a tela toda
    justifyContent: "center", //alinha vertical (coluna)
    alignItems: "center", // alinha horizontal (linha)
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    padding: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
    height:40,
    alignItems:"center",
    margin: 5,
  },
  pressable:{
    flexDirection: "row",
    justifyContent: "space-evenly",  

  },
  textBtn:{
    color: "white",
    fontWeight: "bold",
    alignItems:"center"
  }
})

export default estilos
