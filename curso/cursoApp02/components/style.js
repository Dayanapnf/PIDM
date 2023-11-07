import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  timer:{
   
    borderRadius: 100,
    padding: 50,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 10,
    marginTop: 15,
  },
  txt:{
    fontSize: 24,
    color: "#85cf75",
    fontWeight: "bold",
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 20,
    padding: 15,
    width: 120,
    margin:5,
    borderColor: "#85cf75" ,
  }
});

export default styles;
