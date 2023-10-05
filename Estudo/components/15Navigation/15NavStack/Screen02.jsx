import { View, Text, Button } from "react-native";
import estilos from "./MyStyle";

const Screen02 = ({ navigation, route }) => {
  const { name, grade } = route.params;
  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>Screen 02</Text>
      <Text style={estilos.header}>{name}</Text>
      <Text style={estilos.header}>{grade}</Text>
      <Button title="Tela 03" onPress={() => navigation.navigate("Screen03")} />
    </View>
  );
};

export default Screen02;
