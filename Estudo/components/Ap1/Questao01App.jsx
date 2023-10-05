import { View, SectionList, Text } from "react-native";
import dadosCompra from "./Dados";
import estilos from "./Estilo";

const Questao01App = () => {
  return (
    <View style={estilos.container}>
      <SectionList
        sections={dadosCompra}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ padding: 10 }}>
            <Text style={estilos.header}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={{ flex:1,flexDirection: "row", alignItems: "flex-start", justifyContent: "space-evenly", padding: 10 }}>
            <View>
              <Text style={estilos.icon}>{item.icon}</Text>
            </View>
            <View>
              <Text style={estilos.dados}>{item.nome}</Text>
              <Text style={estilos.dados}>{item.horario}</Text>
            </View>
            <View style={{marginLeft:100}} >
              <Text style={estilos.dados}>{item.valor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Questao01App;
