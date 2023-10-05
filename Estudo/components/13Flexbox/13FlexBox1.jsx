import { View, Text, StyleSheet } from "react-native-web";

const MyFlexBox1 = () => {
  return (
    //pai e os filhos
    <View style={estilos.container}>
        <View style={estilos.view1}></View>
        <View style={estilos.view2}></View>
        <View style={estilos.view3}></View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "red",
  },
  view1: {
    backgroundColor: "green",
    flex:1,
  },
  view2: {
    backgroundColor: "purple",
    flex:1,
  },
  view3: {
    backgroundColor: "orange",
    flex:1,
  },
});

export default MyFlexBox1;
