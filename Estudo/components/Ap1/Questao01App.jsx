import { View, SectionList, Text } from "react-native";
import dadosCompra from "./Dados";
import estilos from "./Estilo";

const Questao01App = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <SectionList
        sections={dadosCompra}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={estilos.title}>
            <Text style={estilos.header}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={estilos.containerDados}>
            <View>
              <Text style={estilos.icon}>{item.icon}</Text>
            </View>
            <View>
              <Text style={estilos.dados}>{item.nome}</Text>
              <Text style={estilos.dados}>{item.horario}</Text>
            </View>
            <View style={estilos.preço} >
              <Text style={estilos.dados}>{item.valor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Questao01App;
