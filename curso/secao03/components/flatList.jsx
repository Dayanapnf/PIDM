import { View, FlatList, Text} from "react-native";
import styles from "./style";
import data from "./data";

const FlatListTeste = () => {

  return (
    <View style = {styles.container}>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.feedArea}>
            <Text style={styles.txt}>NOME: {item.name}</Text>
            <Text style={styles.txt}>E-MAIL: {item.email}</Text>
        </View>
      )}

      />
    </View>
  );
};

export default FlatListTeste;
