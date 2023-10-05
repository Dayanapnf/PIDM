import { View } from "react-native"

const Questao02App ({navigation, route}) => {

    const { icon, nome, horario, valor } = route.params;
  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>{icon}</Text>
      <Text style={estilos.header}>{nome}</Text>
      <Text style={estilos.header}>{horario}</Text>
      <Text style={estilos.header}>{valor}</Text>
    
    </View>
  );
};


export default Questao02App


