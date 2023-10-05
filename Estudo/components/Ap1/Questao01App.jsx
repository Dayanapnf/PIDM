import { View, SectionList, Text } from "react-native";
import dadosCompra from "./Dados";
import estilos from "./Estilo";
import Questao02App from "./Questao02App";

const Questao01App = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);

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
              <Button
                    title="Tela 02"
                    onPress={() => navigation.navigate("Questao02App", {item})}
              />
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
      
      

      <Button
        title="Show Modal"
        onPress={() => setModalVisible(true)}
        />
        <Questao02App
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
        />
    </View>
    </View>



    
  );

  
};
export default Questao01App;
