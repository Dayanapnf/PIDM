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
          <View style={{ backgroundColor: "#f2f2f2", padding: 10 }}>
            <Text>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row",alignContent: "space-between", padding: 10 }}>
            <View>
              <Text style={estilos.icon}>{item.icon}</Text>
            </View>
            <View>
              <Text style={estilos.dados}>{item.nome}</Text>
              <Text style={estilos.dados}>{item.horario}</Text>
            </View>
            <View>
              <Text style={estilos.dados}>{item.valor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Questao01App;
